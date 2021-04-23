import React from 'react';
import axios from 'axios';
import { withRouter, Link } from "react-router-dom";
import './InventoryEdit.scss';
import backIcon from '../../Assets/Icons/arrow_back-24px.svg';

class InventoryEdit extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
        .then(res => {
            const item = res.data;
            this.setState({
                warehouseID: item.warehouseID,
                warehouseName: item.warehouseName,
                itemName: item.itemName,
                description: item.description,
                category: item.category,
                status: item.status,
                quantity: item.quantity
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleChangeName = (e) => {
        this.setState({itemName: e.target.value})
    }

    handleChangeDescription = (e) => {
        this.setState({description: e.target.value})
    }

    handleChangeWarehouse = (e) => {
        this.props.warehouseNames.forEach((warehouse) => {
            if(warehouse.id === e.target.value) {
                this.setState({
                    warehouseID: e.target.value,
                    warehouseName: warehouse.name
                })
            }
        })
    }

    handleChangeCategory = (e) => {
        this.setState({category: e.target.value})
    }
    
    handleChangeStatus = (e) => {
        if (e.target.value === "Out of Stock") {
            this.setState({
                status: e.target.value,
                quantity: 0
            })
        } else {
            this.setState({status: e.target.value})
        }
    }

    handleChangeQuantity = (e) => {
        this.setState({quantity: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.itemName === '' || this.state.description === '' || this.state.quantity === '') {
            alert('Please fill in all the required fields !!!')
        } else {
            axios.put(`http://localhost:8080/inventory/${this.props.match.params.id}`, {
                warehouseID: this.state.warehouseID,
                warehouseName: this.state.warehouseName,
                itemName: this.state.itemName,
                description: this.state.description,
                category: this.state.category,
                status: this.state.status,
                quantity: this.state.quantity
            }).then(res => {
                console.log(res);
                alert('Successfully Saving Edit !');
                this.props.history.push('/inventory');
            }).catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        if (!this.state) {
            return <h1 className="loadding">Loading...</h1>
        }

        return (
            <form className="inventory-edit" onSubmit={this.handleSubmit}>
                <div className="inventory-edit__heading">
                    <Link to="/inventory">
                        <img src={backIcon} alt="back icon" className="inventory-edit__back-icon"/>
                    </Link>
                    <h1 className="inventory-edit__heading-title">Edit Inventory Item</h1>
                </div>
                <div className="inventory-edit__details">
                    <h2 className="inventory-edit__details-heading">Item Details</h2>
                    <div className="inventory-edit__details-form">
                        <label htmlFor="itemName" className="inventory-edit__form-label">
                            Item Name
                            <input 
                                type="text" 
                                required
                                name="itemName"
                                value={this.state.itemName}
                                onChange={this.handleChangeName}
                                className="inventory-edit__text-input inventory-edit__item-name"/>
                        </label>
                        {this.state.itemName === '' && <p>This field is required!</p>}
                        <label htmlFor="" className="inventory-edit__form-label">
                            Description
                            <textarea 
                                type="text" 
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChangeDescription} 
                                className="inventory-edit__text-input inventory-edit__description"/>
                        </label>
                        {this.state.description === '' && <p>This field is required!</p>}
                        <label className="inventory-edit__form-label">
                            Category
                            <select 
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChangeCategory} 
                                className="inventory-edit__select-input inventory-edit__category"
                            >
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Health">Health</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="inventory-edit__availability">
                    <h2 className="inventory-edit__availability-heading">Item Availability</h2>
                    <div className="inventory-edit__availability-form">
                        <div className="inventory-edit__radio-group">
                            <label className="inventory-edit__form-label">Status</label>
                            <div className="inventory-edit__radio-buttons">
                                <div className="inventory-edit__radio-button">
                                        <input 
                                            type="radio" 
                                            value="In Stock" 
                                            checked={this.state.status === "In Stock"}
                                            onChange={this.handleChangeStatus}  
                                        />
                                        <label>In Stock</label>
                                </div>
                                <div className="inventory-edit__radio-button">
                                        <input 
                                            type="radio" 
                                            value="Out of Stock" 
                                            checked={this.state.status === "Out of Stock"}
                                            onChange={this.handleChangeStatus} 
                                        />
                                        <label>Out of Stock</label>
                                </div>
                            </div>    
                        </div>
                        {this.state.status === "In Stock" && 
                             <label htmlFor="quantity" className="inventory-edit__form-label">
                             Quantity
                             <input 
                                 type="number" 
                                 name="quantity"
                                 value={this.state.quantity}
                                 onChange={this.handleChangeQuantity}
                                 className="inventory-edit__text-input inventory-edit__item-quantity"/>
                         </label>}
                         {this.state.quantity === '' && <p>This field is required!</p>}
                        <label className="inventory-edit__form-label">
                            Warehouse
                            <select 
                                value={this.state.warehouseID}
                                onChange={this.handleChangeWarehouse} 
                                className="inventory-edit__select-input inventory-edit__warehouses"
                            >
                                {this.props.warehouseNames.map(warehouse => 
                                <option 
                                    value={warehouse.id}
                                    key={warehouse.id}
                                >
                                    {warehouse.name}
                                </option>)}
                            </select>
                        </label>
                    </div>
                </div>
                <div className="inventory-edit__actions">
                    <Link to="/inventory"><button className="inventory-edit__button-cancel">Cancel</button></Link>
                    <button type="submit" className="inventory-edit__button-save">Save</button>
                </div>
        
            </form>
        )
    }
}

export default withRouter(InventoryEdit);