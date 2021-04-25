import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backIcon from "../../Assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../Assets/Icons/error-24px.svg";
import "./EditWarehouse.scss";

class EditWarehouse extends React.Component {
  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouse/${this.props.match.params.id}`)
      .then((res) => {
        const warehouse = res.data;
        this.setState({
          warehouseID: warehouse.id,
          warehouseName: warehouse.name,
          warehouseAddress: warehouse.address,
          warehouseCity: warehouse.city,
          warehouseCountry: warehouse.country,
          warehouseContactName: warehouse.contact.name,
          warehouseContactPosition: warehouse.contact.position,
          warehouseContactPhone: warehouse.contact.phone,
          warehouseContactEmail: warehouse.contact.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.warehouseID === "" ||
      this.state.warehouseName === "" ||
      this.state.warehouseAddress === "" ||
      this.state.warehouseCity === "" ||
      this.state.warehouseCountry === "" ||
      this.state.warehouseContactName === "" ||
      this.state.warehouseContactPosition === "" ||
      this.state.warehouseContactPhone === "" ||
      this.state.warehouseContactEmail === ""
    ) {
      alert("Please fill in all fields");
      // } else if (
      //   !phoneRegex.test(e.target.this.state.warehouseContactPhone.value) === ""
      // ) {

      // } else if (
      //   !emailRegex.test(e.target.this.state.warehouseContactEmail) === ""
      // ) {
    } else {
      axios
        .put(`http://localhost:8080/warehouse/${this.props.match.params.id}`, {
          name: this.state.warehouseName,
          address: this.state.warehouseAddress,
          city: this.state.warehouseCity,
          country: this.state.warehouseCountry,
          contactName: this.state.warehouseContactName,
          contactPosition: this.state.warehouseContactPosition,
          contactPhone: this.state.warehouseContactPhone,
          contactEmail: this.state.warehouseContactEmail,
        })
        .then((res) => {
          alert("Edit Success");
          this.props.history.push(`/warehouse/warehouse/${this.props.match.params.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleNameOnChange = (e) => {
    this.setState({ warehouseName: e.target.value });
  };

  handleAddressOnChange = (e) => {
    this.setState({ warehouseAddress: e.target.value });
  };

  handleCityOnChange = (e) => {
    this.setState({ warehouseCity: e.target.value });
  };

  handleCountryOnChange = (e) => {
    this.setState({ warehouseCountry: e.target.value });
  };

  handleContactNameOnChange = (e) => {
    this.setState({ warehouseContactName: e.target.value });
  };

  handleContactPositionOnChange = (e) => {
    this.setState({ warehouseContactPosition: e.target.value });
  };

  handleContactPhoneOnChange = (e) => {
    this.setState({ warehouseContactPhone: e.target.value });
  };

  handleContactEmailOnChange = (e) => {
    this.setState({ warehouseContactEmail: e.target.value });
  };

  handleOnCancel = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(+\d{1}?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

    if (!this.state) {
      return <h1>Loading...</h1>;
    }

    return (
      <main className="edit">
        <section className="edit__header-container">
          <div className="edit__header">
            <h1 className="edit__title">
              <Link
                to={`/warehouse/${this.state.warehouseID}`}
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
          <form className="form__body" onSubmit={(e) => this.handleOnSubmit(e)}>
            <div className="form__container-warehouse">
              <div className="form__title-container">
                <h2 className="form__title">Warehouse Details</h2>
              </div>

              <label className="form__warehouse">
                <h3 className="form__label">Warehouse Name</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouseName"
                  value={this.state.warehouseName}
                  onChange={this.handleNameOnChange}
                />
                {this.state.warehouseName === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">This field is required</p>
                  </div>
                )}
                <h3 className="form__label">Street Address</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouseAddress"
                  value={this.state.warehouseAddress}
                  onChange={this.handleAddressOnChange}
                />
                {this.state.warehouseAddress === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">This field is required</p>
                  </div>
                )}
                <h3 className="form__label">City</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouseCity"
                  value={this.state.warehouseCity}
                  onChange={this.handleCityOnChange}
                />
                {this.state.warehouseCity === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">This field is required</p>
                  </div>
                )}
                <h3 className="form__label">Country</h3>
                <input
                  className="form__input"
                  type="text"
                  name="warehouseCountry"
                  value={this.state.warehouseCountry}
                  onChange={this.handleCountryOnChange}
                />
                {this.state.warehouseCountry === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">This field is required</p>
                  </div>
                )}
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
                  name="warehouseContactName"
                  value={this.state.warehouseContactName}
                  onChange={this.handleContactNameOnChange}
                />
                {this.state.warehouseContactName === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">This field is required</p>
                  </div>
                )}
                <h3 className="form__label">Position</h3>
                <input
                  className="form__input"
                  name="warehouseContactPosition"
                  value={this.state.warehouseContactPosition}
                  onChange={this.handleContactPositionOnChange}
                />
                {this.state.warehouseContactPosition === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">This field is required</p>
                  </div>
                )}
                <h3 className="form__label">Phone Number</h3>
                <input
                  className="form__input"
                  type="text"
                  required
                  name="warehouseContactPhone"
                  value={this.state.warehouseContactPhone}
                  onChange={this.handleContactPhoneOnChange}
                />
                {!phoneRegex.test(this.state.warehouseContactPhone) === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">
                      Please enter a valid phone number
                    </p>
                  </div>
                )}
                <h3 className="form__label">Email</h3>
                <input
                  className="form__input"
                  type="email"
                  required
                  name="warehouseContactEmail"
                  value={this.state.warehouseContactEmail}
                  onChange={this.handleContactEmailOnChange}
                />
                {!emailRegex.test(this.warehouseContactEmail) === "" && (
                  <div className="form__warning">
                    <img
                      src={errorIcon}
                      alt="error-icon"
                      className="form__error-icon"
                    />
                    <p className="form__warning-text">
                      Please enter a valid e-mail address
                    </p>
                  </div>
                )}
              </label>
            </div>
            <div className="form__button-wrap">
              <button
                onClick={this.handleOnCancel}
                className="form__cancel"
                type="cancel"
              >
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
