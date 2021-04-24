import React from "react";
import { Link } from "react-router-dom";
import "../WarehouseCard/WarehouseCard.scss";
import DeleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../Assets/Icons/edit-24px.svg";
import ChevronIcon from "../../Assets/Icons/chevron_right-24px.svg";

function WarehouseCard(props) {
  return (
    <>
      <div className="warehouseList__card">
        <div className="warehouseList__card-text-container">
          <div className="warehouseList__card-sub-container">
            <h3 className="warehouseList__card-title">WAREHOUSE</h3>
            <Link to={`/warehouse/${props.id}`} className="warehouseList__link" style={{textDecoration: "none"}}>
              <div className="warehouseList__card-link">
                <p className="warehouseList__card-content warehouseList__card-location">
                  {props.city}
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
              {props.name}
            </p>
            <p className="warehouseList__card-content warehouseList__card-content-tablet">
              {props.address}
            </p>
          </div>

          <div className="warehouseList__card-sub-container">
            <h3 className="warehouseList__card-title">ADDRESS</h3>
            <p className="warehouseList__card-content warehouseList__card-content-mobile">
              {props.address}
            </p>
            <p className="warehouseList__card-content warehouseList__card-content-tablet">
              {props.name}
            </p>
          </div>

          <div className="warehouseList__card-sub-container">
            <h3 className="warehouseList__card-title">CONTACT INFORMATION</h3>
            <p className="warehouseList__card-content">{props.number}</p>
            <p className="warehouseList__card-content">{props.email}</p>
          </div>
        </div>

        <div className="warehouseList__card-image-container">
          <a>
            <img
              className="warehouseList__card-edit-button"
              src={DeleteIcon}
              alt="Delete Icon"
            />
          </a>
          <Link to={`/warehouse/${props.id}/edit`}><img
              className="warehouseList__card-edit-button"
              src={EditIcon}
              alt="Edit Icon"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default WarehouseCard;
