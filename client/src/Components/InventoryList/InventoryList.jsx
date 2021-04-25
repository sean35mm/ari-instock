import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./InventoryList.scss";



import searchIcon from "../../Assets/Icons/search-24px.svg";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import chevronIcon from "../../Assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";

import "../Modals/Modal.scss";
import Modal from 'react-awesome-modal';
import XButton from "../../Assets/Icons/close-24px.svg";

export default class InventoryList extends React.Component {

  state = {
    visible: false,
  };


  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  handleDelete(id) {
    axios.delete(`http://localhost:8080/inventory/${id}`)
    .then(res => {
      this.setState({
        visible: false
      })
    })
    .catch(err => {
      console.log(err);
    })

  }


  render () {
    const { inventoryList } = this.props; 
    return (
      <div className="inventory">
        <div className="inventory__heading">
          <h1 className="inventory__title">Inventory</h1>
          <div className="inventory__heading-functions">
            <div className="inventory__search-bar">
              <img
                src={searchIcon}
                alt="search icon"
                className="inventory__search-icon"
              />
              <input
                type="text"
                className="inventory__search-input"
                placeholder="Search..."
              />
            </div>
            <Link to="/inventory/add">
              <button className="inventory__add-button">+ Add New Item</button>
            </Link>
          </div>
        </div>
        <div className="inventory__title-background"></div> 
        <ul className="inventory__list">
          {inventoryList.map((item) => (
            <li className="inventory__list-item" key={item.id}>
              <div className="inventory__item-content">
                <div className="inventory__label-wrap inventory__item-name">
                  <h3 className="inventory__label">
                    INVENTORY ITEM
                    <img
                      src={sortIcon}
                      alt="sort icon"
                      className="inventory__sort-icon"
                    />
                  </h3>
                  <Link
                    to={`/inventory/${item.id}`}
                    className="inventory__link"
                  >
                    <p className="inventory__name">
                      {item.itemName}
                      <img
                        src={chevronIcon}
                        alt="chevron icon"
                        className="inventory__name-icon"
                      />
                    </p>
                  </Link>
                </div>
                <div className="inventory__label-wrap inventory__item-category">
                  <h3 className="inventory__label">
                    CATEGORY
                    <img
                      src={sortIcon}
                      alt="sort icon"
                      className="inventory__sort-icon"
                    />
                  </h3>
                  <p className="inventory__category">{item.category}</p>
                </div>
                <div className="inventory__label-wrap inventory__item-status">
                  <h3 className="inventory__label">
                    STATUS
                    <img
                      src={sortIcon}
                      alt="sort icon"
                      className="inventory__sort-icon"
                    />
                  </h3>
                  <p
                    className={
                      "inventory__status " +
                      (item.status === "In Stock"
                        ? "inventory__status--instock"
                        : "inventory__status--outstock")
                    }
                  >
                    {item.status.toUpperCase()}
                  </p>
                </div>
                <div className="inventory__label-wrap inventory__item-quantity">
                  <h3 className="inventory__label">
                    QTY
                    <img
                      src={sortIcon}
                      alt="sort icon"
                      className="inventory__sort-icon"
                    />
                  </h3>
                  <p className="inventory__quantity">{item.quantity}</p>
                </div>
                <div className="inventory__label-wrap inventory__item-warehouse">
                  <h3 className="inventory__label">
                    WAREHOUSE
                    <img
                      src={sortIcon}
                      alt="sort icon"
                      className="inventory__sort-icon"
                    />
                  </h3>
                  <p className="inventory__warehouse">{item.warehouseName}</p>
                </div>
              </div>
              <div className="inventory__item-actions">
                <h3 className="inventory__label inventory__label-actions">
                  ACTIONS
                </h3>
                <div className="inventory__actions-functions">
                  <div className="inventory__delete-modal">
                    <img src={deleteIcon} alt="delete button" onClick={() => this.openModal()} className="inventory__delete-button"/>
                    <Modal visible={this.state.visible}>
                      <div className="delete__modal">
                        <h1 className="modal__header">Delete this inventory item?</h1>
                        <p className="modal__text">
                          Please confirm that you'd like to delete this from the inventory
                          list. You won't be able to undo this action.
                        </p>
                        <button className="modal-cancel button" onClick={() => this.closeModal()}>Cancel</button>
                        <button className="modal-delete button" onClick={() => this.handleDelete(item.id)}>Delete</button> 
                        <a href="" onClick={() => this.closeModal()}>
                          <img className="modal__x-icon" src={XButton} alt="x button" />
                        </a>
                      </div>
                    </Modal>
                  </div>
                  <Link to={`/inventory/${item.id}/edit`}>
                    <img
                      src={editIcon}
                      alt="edit icon"
                      className="inventory__edit"
                    />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
