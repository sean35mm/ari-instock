import React, { Component } from 'react';
import axios from 'axios';
import './Inventory.sass';
import searchIcon from '../../Assets/Icons/search-24px.svg';
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg';
import editIcon from '../../Assets/Icon/edit-24px.svg'

export default class InventoryList extends Component {
    state = {
        inventoryList: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/inventory')
        .then(res => {
            this.setState({
                inventoryList: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {

        return (
            <div>
                <div className="inventory__heading">
                    <h2 className="inventory__title">Inventory</h2>
                    <div className="inventory__heading-functions">
                        <div className="inventory__search-bar">
                            <img src={searchIcon} alt="search icon" className="inventory__search-icon"/>
                            <input type="text" className="inventory__search-input"/>
                        </div>
                        <button className="inventory__add-button">+ Add New Item</button>
                    </div>
                </div>
                <ul className="inventory__list">
                    {this.state.inventoryList.map(item => 
                    <li className="inventory__list-item" key={item.id}>
                        <div className="inventory__item-name">
                            <h3 className="inventory__label">INVENTORY ITEM</h3>
                            <p className="inventory__name">{item.itemName}</p>
                        </div>
                        <div className="inventory__item-category">
                            <h3 className="inventory__label">CATEGORY</h3>
                            <p className="inventory__category">{item.category}</p>
                        </div>
                        <div className="inventory__item-status">
                            <h3 className="inventory__label">STATUS</h3>
                            <p className="inventory__status">{item.status}</p>
                        </div>
                        <div className="inventory__item-quantity">
                            <h3 className="inventory__label">QTY</h3>
                            <p className="inventory__quantity">{item.quantity}</p>
                        </div>
                        <div className="inventory__item-warehouse">
                            <h3 className="inventory__label">WAREHOUSE</h3>
                            <p className="inventory__warehouse">{item.warehouseName}</p>
                        </div>
                        <div className="inventory__item-actions">
                            <img src={deleteIcon} alt="delete icon" className="inventory__delete"/>
                            <img src={editIcon} alt="edit icon" className="inventory__edit"/>
                        </div>
                    </li>
                    )}
                </ul>
                
            </div>
        )
    }
}
