import React from "react";
import backIcon from "../../Assets/Icons/arrow_back-24px.svg";
import "./EditWarehouse.scss";

function EditWarehouse() {
  return (
    <main className="edit">
      <section className="edit__header-container">
        <div className="edit__header">
          <h1 className="edit__title">
            <img className="edit__back-icon" src={backIcon} alt="back-icon" />
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
              />
              <h3 className="form__label">Street Address</h3>
              <input
                className="form__input"
                type="text"
                name="warehouse-address"
              />
              <h3 className="form__label">City</h3>
              <input
                className="form__input"
                type="text"
                name="warehouse-city"
              />
              <h3 className="form__label">Country</h3>
              <input
                className="form__input"
                type="text"
                name="warehouse-country"
              />
            </label>
          </div>

          <div className="form__container-contact">
            <div className="form__title-container">
              <h2 className="form__title">Contact Details</h2>
            </div>

            <label className="form__contact">
              <h3 className="form__label">Contact Name</h3>
              <input className="form__input" type="text" name="contact-name" />
              <h3 className="form__label">Position</h3>
              <input
                className="form__input"
                type="text"
                name="contact-position"
              />
              <h3 className="form__label">Phone Number</h3>
              <input
                className="form__input"
                type="number"
                name="contact-phone"
              />
              <h3 className="form__label">Email</h3>
              <input
                className="form__input"
                type="email"
                name="contact-email"
                placeholder="test"
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

export default EditWarehouse;
