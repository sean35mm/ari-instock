import React from "react";
import backIcon from "../Assets/Icons/arrow_back-24px.svg";
import deleteIcon from "../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../Assets/Icons/edit-24px.svg";
import whiteEdit from "../Assets/Icons/edit_white-24px.svg";
import chevronIcon from "../Assets/Icons/chevron_right-24px.svg";

import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
    <>
      <section className="details">
        <article className="details__header-container">
          <div className="details__header-wrap">
            <img
              className="details__back-icon"
              src={backIcon}
              alt="back-icon"
            />
            <h2 className="details__header-title">PlaceHolder</h2>
            <img
              className="details__edit-icon"
              src={whiteEdit}
              alt="edit-icon"
            />
          </div>
        </article>

        <article className="details__info">
          <div className="details__address">
            <h4 className>WAREHOUSE ADDRESS:</h4>
            <p>123 Place Holder Address,</p>
            <p>Maple, Syrupia</p>
          </div>

          <div className="details__contact">
            <div className="details__contact-name">
              <h4>CONTACT NAME:</h4>
              <p>Placeholder Name</p>
              <p>Placeholder Position</p>
            </div>
            <div className="details__contact-info">
              <h4>CONTACT INFORMATION:</h4>
              <p>+1 (123) 456-7890</p>
              <p>Placeholder@Email.com</p>
            </div>
          </div>
        </article>

        <article className="details__inventory">
          <div className="details__item-content">
            <div className="details__item-container">
              <div className="details__inventory-container">
                <div className="details__item-title">
                  <h4>INVENTORY ITEM</h4>
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
              <div className="details__status-container">
                <h4>STATUS</h4>
                <p className="details__in-stock">PLACEHOLDER</p>
              </div>
            </div>

            <div className="details__category-container">
              <div>
                <h4>CATEGORY</h4>
                <p>Placeholder</p>
              </div>

              <div className="details__quantity-container">
                <h4>QTY</h4>
                <p>#######</p>
              </div>
            </div>

            <div className="details__icon-container">
              <img src={deleteIcon} alt="delete-icon" />
              <img src={editIcon} alt="edit-icon" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default WarehouseDetails;
