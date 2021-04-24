import '../WarehouseAdd/WarehouseAdd.scss';
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import backLogo from "../../Assets/Icons/arrow_back-24px.svg"

function WarehouseAdd(props) {

    return (
        <>

            <section className="warehouseAdd">
                <div className="warehouseAdd__nav">
                    <Link to="/warehouse"><img class="warehouseAdd__nav-back-button" src={backLogo} alt="button for going back" /></Link>
                    <h2 className="warehouseAdd__nav-title">Add New Warehouse</h2>
                </div>

                <form className="warehouseAdd__form">
                    <div className="warehouseAdd__form-container">

                        <div className="warehouseAdd__form-details">
                            <h3 className="warehouseAdd__sub-title">Warehouse Details</h3>

                            <div className="warehouseAdd__details-container">
                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">Warehouse Name</p>
                                    <input className="warehouseAdd__details-input" placeholder="Warehouse Name"></input>
                                </div>

                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">Street Address</p>
                                    <input className="warehouseAdd__details-input" placeholder="Street Address"></input>
                                </div>

                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">City</p>
                                    <input className="warehouseAdd__details-input" placeholder="City"></input>
                                </div>

                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">Country</p>
                                    <input className="warehouseAdd__details-input" placeholder="Country"></input>
                                </div>
                            </div>
                        </div>

                        <div className="warehouseAdd__form-contact">
                            <h3 className="warehouseAdd__sub-title">Contact Details</h3>

                            <div className="warehouseAdd__details-container">
                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">Contact Name</p>
                                    <input className="warehouseAdd__details-input" placeholder="Contact"></input>
                                </div>

                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">Position</p>
                                    <input className="warehouseAdd__details-input" placeholder="Position"></input>
                                </div>

                                <div className="warehouseAdd__details-subContainerr">
                                    <p className="warehouseAdd__details-title">Phone Number</p>
                                    <input className="warehouseAdd__details-input" placeholder="Phone Number"></input>
                                </div>

                                <div className="warehouseAdd__details-subContainer">
                                    <p className="warehouseAdd__details-title">Email</p>
                                    <input className="warehouseAdd__details-input" placeholder="Email"></input>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="warehouseAdd__buttons">
                        <div className="warehouseAdd__buttons-subContainer">
                            <Link to="/warehouse"><button className="warehouseAdd__cancel-button">Cancel</button></Link>
                            <Link><button className="warehouseAdd__add-button">+ Add Warehouse</button></Link>
                        </div>
                    </div>
                </form>


            </section>
        </>
    )
}

export default WarehouseAdd;