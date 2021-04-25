import React from "react";
import { Link } from "react-router-dom";
import "../WarehouseCard/WarehouseCard.scss";
import DeleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../Assets/Icons/edit-24px.svg";
import ChevronIcon from "../../Assets/Icons/chevron_right-24px.svg";
import WarehouseModal from "../Modals/WarehouseModal"
import axios from "axios";


class WarehouseCard extends React.Component {

  state = {
    showModal: false
  }

  showModal = () => {
    this.setState(
      {showModal: true}
    )
  }
  

  closeModal = () => {
    this.setState(
      {showModal: false}
    )
  }

  handleDelete() {
    axios.delete(`http://localhost:8080/warehouse/${this.props.id}`)
    .then(res => {
      this.setState({
        showModal: false,
      })
     console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {

    let modal = <></>
    if (this.state.showModal) {
      modal = <WarehouseModal closeModal={this.closeModal} delete={() => this.handleDelete()}/>
    }

    return (
      <>
        <div className="warehouseList__card">
          <div className="warehouseList__card-text-container">
            <div className="warehouseList__card-sub-container">
              <h3 className="warehouseList__card-title">WAREHOUSE</h3>
              <Link
                to={`/warehouse/warehouse/${this.props.id}`}
                className="warehouseList__link"
                style={{ textDecoration: "none" }}
              >
                <div className="warehouseList__card-link">
                  <p className="warehouseList__card-content warehouseList__card-location">
                    {this.props.city}
                  </p>
                  <img
                    className="warehouseList__icon"
                    src={ChevronIcon}
                    alt="Chevron for going to Warehouse Details"
                  />
                </div>
              </Link>
            </div>
  
            <div className="warehouseList__card-sub-container">
              <h3 className="warehouseList__card-title">CONTACT NAME</h3>
              <p className="warehouseList__card-content warehouseList__card-content-mobile">
                {this.props.name}
              </p>
              <p className="warehouseList__card-content warehouseList__card-content-tablet">
                {this.props.address}
              </p>
            </div>
  
            <div className="warehouseList__card-sub-container">
              <h3 className="warehouseList__card-title">ADDRESS</h3>
              <p className="warehouseList__card-content warehouseList__card-content-mobile">
                {this.props.address}
              </p>
              <p className="warehouseList__card-content warehouseList__card-content-tablet">
                {this.props.name}
              </p>
            </div>
  
            <div className="warehouseList__card-sub-container">
              <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
              <p className="warehouseList__card-content">{this.props.number}</p>
              <p className="warehouseList__card-content">{this.props.email}</p>
            </div>
          </div>
  
          <div className="warehouseList__card-image-container">
            <img src={DeleteIcon} alt="delete icon" onClick={this.showModal}/>
            <Link to={`/warehouse/${this.props.id}/edit`}><img
              className="warehouseList__card-edit-button"
              src={EditIcon}
              alt="Edit Icon"
            /></Link>
          </div>
        </div>
          {modal}
      </>
    );
  }
}

export default WarehouseCard;