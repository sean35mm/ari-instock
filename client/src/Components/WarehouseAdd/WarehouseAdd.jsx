import './WarehouseAdd.scss';
import React from 'react';
import axios from 'axios';
import backLogo from "../../Assets/Icons/arrow_back-24px.svg"

function WarehouseAdd(props) {

    return (
        <>
            <div className="warehouse-nav">
                <img class="warehouse-nav__back-button" src={backLogo} alt="button for going back" />
                <h2 className="warehouse-nav__title">Add New Warehouse</h2>
            </div>

            <form className="warehouse-form">
                <div className="warehouse-details">
                    <h3 className="warehouse-details__title">Warehouse Details</h3>

                    <div className="warehouse-details__input-container">
                        <div className="warehouse-details__input-subContainer">
                            <p className="warehouse-details__input-title">Warehouse Name</p>
                            <input className="warehouse-details__input-area" placeholder="Warehouse Name"></input>
                        </div>

                        <div className="warehouse-details__input-subContainer">
                            <p className="warehouse-details__input-title">Street Address</p>
                            <input className="warehouse-details__input-area" placeholder="Street Address"></input>
                        </div>

                        <div className="warehouse-details__input-subContainer">
                            <p className="warehouse-details__input-title">City</p>
                            <input className="warehouse-details__input-area" placeholder="City"></input>
                        </div>

                        <div className="warehouse-details__input-subContainer">
                            <p className="warehouse-details__input-title">Country</p>
                            <input className="warehouse-details__input-area" placeholder="Country"></input>
                        </div>
                    </div>
                </div>

                <div className="contact-details">
                    <h3 className="contact-details__title">Contact Details</h3>

                    <div className="contact-details__input-container">
                        <div className="contact-details__input-subContainer">
                            <p className="contact-details__input-title">Contact Name</p>
                            <input className="contact-details__input-area" placeholder="Contact"></input>
                        </div>

                        <div className="contact-details__input-subContainer">
                            <p className="contact-details__input-title">Position</p>
                            <input className="contact-details__input-area" placeholder="Position"></input>
                        </div>

                        <div className="contact-details__input-subContainer">
                            <p className="contact-details__input-title">City</p>
                            <input className="contact-details__input-area" placeholder="Phone Number"></input>
                        </div>

                        <div className="contact-details__input-subContainer">
                            <p className="contact-details__input-title">Country</p>
                            <input className="contact-details__input-area" placeholder="Email"></input>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default WarehouseAdd;