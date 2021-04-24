import './InventoryAdd.scss';
import React from 'react';
import { Link } from "react-router-dom";
import backLogo from "../../Assets/Icons/arrow_back-24px.svg"

function InventoryAdd() {

    return (
        <>

            <section className="inventoryAdd">
                <div className="inventoryAdd__nav">
                    <Link to="/inventory"><img class="inventoryAdd__nav-back-button" src={backLogo} alt="button for going back" /></Link>
                    <h2 className="inventoryAdd__nav-title">Add New Inventory Item</h2>
                </div>

                <form className="inventoryAdd__form">
                    <div className="inventoryAdd__form-container">
                        <div className="inventoryAdd__form-details">
                            <h3 className="inventoryAdd__sub-title">Item Details</h3>

                            <div className="inventoryeAdd__details-container">
                                <div className="inventoryAdd__details-subContainer">
                                    <p className="inventoryAdd__details-title">Item Name</p>
                                    <input className="inventoryAdd__details-input" placeholder="Item Name"></input>
                                </div>

                                <div className="inventoryAdd__details-subContainer">
                                    <p className="inventoryAdd__details-title">Description</p>
                                    <textarea className="inventoryAdd__details-textBox" placeholder="Description"></textarea>
                                </div>

                                <div className="inventoryAdd__details-subContainer">
                                    <p className="inventoryAdd__details-title">Category</p>
                                    <select className="inventoryAdd__details-select">
                                        <option value="" disabled selected hidden>Please select</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="inventoryAdd__form-availability">
                            <h3 className="warehouseAdd__sub-title">Item Availability</h3>

                            <div className="inventoryAdd__details-container">
                                <div className="inventoryAdd__details-subContainer">
                                    <p className="inventoryAdd__details-title">Status</p>
                                    <div className="inventoryAdd__details-subContainer-radio">
                                        <div className="inventoryAdd__details-subContainer-radioInp">
                                            <input type="radio" className="inventoryAdd__details-radio" id="inStock" value="In Stock"></input>
                                            <label for="inStock" className="inventoryAdd__radio-label">In Stock</label>
                                        </div>

                                        <div className="inventoryAdd__details-subContainer-radioInp">
                                            <input type="radio" className="inventoryAdd__details-radio" id="outStock" value="Out of Stock"></input>
                                            <label for="outStock" className="inventoryAdd__radio-label">Out of Stock</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="inventoryAdd__details-subContainerr">
                                    <p className="inventoryAdd__details-title">Quantity</p>
                                    <input className="inventoryAdd__details-input-quantity" placeholder="Amount"></input>
                                </div>

                                <div className="inventoryAdd__details-subContainer">
                                    <p className="inventoryAdd__details-title">Warehouse</p>
                                    <select className="inventoryAdd__details-select">
                                        <option value="" disabled selected hidden>Please select</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="inventoryAdd__buttons">
                        <div className="inventoryAdd__buttons-subContainer">
                            <Link to="/inventory"><button className="inventoryAdd__cancel-button">Cancel</button></Link>
                            <Link><button className="inventoryAdd__add-button">+ Add Item</button></Link>
                        </div>
                    </div>
                </form>


            </section>
        </>
    )
}

export default InventoryAdd;