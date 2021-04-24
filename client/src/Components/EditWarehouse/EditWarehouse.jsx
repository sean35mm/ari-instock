import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backIcon from "../../Assets/Icons/arrow_back-24px.svg";
import "./EditWarehouse.scss";

class EditWarehouse extends React.Component {
  state = {
    warehouse: {},
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouse/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          warehouse: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.warehouse.id) {
      return <h1>Loading...</h1>;
    }

    return (
      <main className="edit">
        <section className="edit__header-container">
          <div className="edit__header">
            <h1 className="edit__title">
              <Link
                to={`/warehouse/${this.state.warehouse.id}`}
                className="edit__link"
              >
                <img
                  className="edit__back-icon"
                  src={backIcon}
                  alt="back-icon"
                />
              </Link>
              Edit Warehouse
            </h1>
          </div>
        </section>

        <section className="form">
          <form className="form__body">
            <div className="form__container-warehouse">
              <div className="form__title-container">
                <h2 className="form__title">Warehouse Details</h2>
              </div>

              <label className="form__warehouse">
                <h3 className="form__label">Warehouse Name</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouse-name"
                  placeholder={this.state.warehouse.name}
                />
                <h3 className="form__label">Street Address</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouse-address"
                  placeholder={this.state.warehouse.address}
                />
                <h3 className="form__label">City</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouse-city"
                  placeholder={this.state.warehouse.city}
                />
                <h3 className="form__label">Country</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouse-country"
                  placeholder={this.state.warehouse.country}
                />
              </label>
            </div>

            <div className="form__container-contact">
              <div className="form__title-container">
                <h2 className="form__title">Contact Details</h2>
              </div>

              <label className="form__contact">
                <h3 className="form__label">Contact Name</h3>
                <input
                  className="form__input"
                  type="text"
                  name="contact-name"
                  placeholder={this.state.warehouse.contact.name}
                />
                <h3 className="form__label">Position</h3>
                <input
                  className="form__input"
                  type="text"
                  name="contact-position"
                  placeholder={this.state.warehouse.contact.position}
                />
                <h3 className="form__label">Phone Number</h3>
                <input
                  className="form__input"
                  type="number"
                  name="contact-phone"
                  placeholder={this.state.warehouse.contact.phone}
                />
                <h3 className="form__label">Email</h3>
                <input
                  className="form__input"
                  type="email"
                  name="contact-email"
                  placeholder={this.state.warehouse.contact.email}
                />
              </label>
            </div>
            <div className="form__button-wrap">
              <button className="form__cancel" type="cancel">
                Cancel
              </button>
              <button className="form__save" type="submit">
                Save
              </button>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default EditWarehouse;
