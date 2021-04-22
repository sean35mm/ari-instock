import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backIcon from "../../Assets/Icons/arrow_back-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import whiteEdit from "../../Assets/Icons/edit_white-24px.svg";
import chevronIcon from "../../Assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
    <section className="details">
      <article className="details__header-container">
        <div className="details__header-wrap">
          <h1 className="details__header-title">
            <img
              className="details__back-icon"
              src={backIcon}
              alt="back-icon"
            />
            PlaceHolder
          </h1>
          <Link to="/warehouse/:id/edit">
            <img
              className="details__edit-icon"
              src={whiteEdit}
              alt="edit-icon"
            />
          </Link>
        </div>

        <Link to="/warehouse/:id/edit">
          <div className="details__edit-button">
            <h3 className="details__button-text">
              <img
                className="details__button-image"
                src={whiteEdit}
                alt="edit-icon"
              />
              Edit
            </h3>
          </div>
        </Link>
      </article>

      <article className="details__info">
        <div className="details__address">
          <h4 className>WAREHOUSE ADDRESS:</h4>
          <p>123 Place Holder Address,</p>
          <p>Maple, Syrupia</p>
        </div>

        <div className="details__contact">
          <div className="details__contact-name">
            <h4 classname="details__contact-content">CONTACT NAME:</h4>
            <p className="details__manager">Placeholder Name</p>
            <p>Placeholder Position</p>
          </div>
          <div className="details__contact-info">
            <h4 className="details__contact-title">CONTACT INFORMATION:</h4>
            <p>+1 (123) 456-7890</p>
            <p>Placeholder@Email.com</p>
          </div>
        </div>
      </article>

      <article className="details__inventory">
        <nav className="details__navbar">
          <div className="details__navbar-list details__navbar-list--inventory">
            <h4 className="details__navbar-item">INVENTORY ITEM</h4>
            <img className="details__sort" src={sortIcon} alt="sort-icon" />
          </div>
          <div className="details__navbar-list details__navbar-list--category">
            <h4 className="details__navbar-item">CATEGORY</h4>
            <img className="details__sort" src={sortIcon} alt="sort-icon" />
          </div>
          <div className="details__navbar-list details__navbar-list--status">
            <h4 className="details__navbar-item">STATUS</h4>
            <img className="details__sort" src={sortIcon} alt="sort-icon" />
          </div>
          <div className="details__navbar-list details__navbar-list--quantity">
            <h4 className="details__navbar-item">QUANTITY</h4>
            <img className="details__sort" src={sortIcon} alt="sort-icon" />
          </div>
          <div className="details__navbar-list details__navbar-list--qty">
            <h4 className="details__navbar-item">QTY</h4>
            <img className="details__sort" src={sortIcon} alt="sort-icon" />
          </div>
          <div className="details__navbar-list--actions">
            <h4 className="details__navbar-item">ACTIONS</h4>
          </div>
        </nav>

        <ul className="details__bp-list">
          <li className="details__list-item details__list-item--inventory">
            <h3 className="details__description">Placeholder</h3>
            <img
              className="details__chevron"
              src={chevronIcon}
              alt="right-arrow-icon"
            />
          </li>
          <li className="details__list-item details__list-item--category">
            Placeholder
          </li>
          <li className="details__list-item details__list-item--status">
            <p className="details__in-stock details__out-stock">Placeholder</p>
          </li>
          <li className="details__list-item details__list-item--quantity">
            ######
          </li>
          <li className="details__list-item details__list-item--actions">
            <img
              className="details__delete"
              src={deleteIcon}
              alt="delete-icon"
            />
            <img
              className="details__item-edit"
              src={editIcon}
              alt="edit-icon"
            />
          </li>
        </ul>

        <div className="details__item-content">
          <div className="details__inventory-wrap">
            <div className="details__item-container">
              <div className="details__inventory-container">
                <div className="details__item-title">
                  <h4 className="details__inventory-title">INVENTORY ITEM</h4>
                </div>

                <div className="details__item-wrap">
                  <h3 className="details__description">Placeholder</h3>
                  <img
                    className="details__chevron"
                    src={chevronIcon}
                    alt="right-arrow-icon"
                  />
                </div>
              </div>
              <div className="details__category-container">
                <h4 className="details__category-title">CATEGORY</h4>
                <p className="details__category-text">Placeholder</p>
              </div>
            </div>

            <div className="details__stock-container">
              <div className="details__status-container">
                <h4 className="details__status-title">STATUS</h4>
                <p className="details__in-stock details__out-stock">
                  PLACEHOLDER
                </p>
              </div>

              <div className="details__quantity-container">
                <h4 className="details__quantity-title">QTY</h4>
                <p className="details__quantity-text">#######</p>
              </div>
            </div>
          </div>

          <div className="details__icon-container">
            <img
              className="details__delete"
              src={deleteIcon}
              alt="delete-icon"
            />
            <img
              className="details__item-edit"
              src={editIcon}
              alt="edit-icon"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default WarehouseDetails;
