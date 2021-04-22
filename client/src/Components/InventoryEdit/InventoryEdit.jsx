import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './InventoryEdit.scss';
import backIcon from '../../Assets/Icons/arrow_back-24px.svg';

export default class InventoryEdit extends React.Component {
    state = {
        item: {}
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                item: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        if (!this.state.item.id) {
            return <h1>Loading...</h1>
        }

        return (
            <div className="inventory-edit">
                <div className="inventory-edit__heading">
                    <img src={backIcon} alt="back icon" className="inventory-edit__back-icon"/>
                    <h1 className="inventory-edit__heading-title">Edit Inventory Item</h1>
                </div>
                <div className="inventory-edit__details">
                    <h2 className="inventory-edit__details-heading">Item Details</h2>
                    <form className="inventory-edit__details-form">
                        <label htmlFor="itemName" className="inventory-edit__form-label">
                            Item Name
                            <input type="text" name="itemName" className="inventory-edit__text-input inventory-edit__item-name"/>
                        </label>
                        <label htmlFor="" className="inventory-edit__form-label">
                            Description
                            <textarea type="text" name="description" className="inventory-edit__text-input inventory-edit__description"/>
                        </label>
                        <label className="inventory-edit__form-label">
                            Category
                            <select name="category" className="inventory-edit__select-input inventory-edit__category">
                                <option>Electronics</option>
                                <option>Gear</option>
                                <option>Apparel</option>
                                <option>Accessories</option>
                                <option>Health</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className="inventory-edit__availability">
                    <h2 className="inventory-edit__availability-heading">Item Availability</h2>
                    <form className="inventory-edit__availability-form">
                        <div className="inventory-edit__radio-group">
                            <label className="inventory-edit__form-label">Status</label>
                            <div className="inventory-edit__radio-buttons">
                                <div className="inventory-edit__radio-button">
                                        <input type="radio" value="In Stock" />
                                        In Stock
                                </div>
                                <div className="inventory-edit__radio-button">
                                        <input type="radio" value="Out of Stock" />
                                        Out of Stock
                                </div>
                            </div>    
                        </div>
                        <label className="inventory-edit__form-label">
                            Warehouse
                            <select name="warehouses" className="inventory-edit__select-input inventory-edit__warehouses">
                                <option>Manhattan</option>
                                <option>King West</option>
                                <option>Granville</option>
                                <option>San Fran</option>
                                <option>Santa Monica</option>
                                <option>Seattle</option>
                                <option>Montreal</option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className="inventory-edit__actions">
                    <button className="inventory-edit__button-cancel">Cancel</button>
                    <button className="inventory-edit__button-save">Save</button>
                </div>
        
            </div>
        )
    }
}
