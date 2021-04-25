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
import InventoryModal from "../Modals/InventoryModal";
import { v4 as uuidv4 } from 'uuid';

export default class WarehouseDetails extends React.Component {
  state = {
    warehouse: {},
    showModal: false,
    itemID: '',
    inventoryList: this.props.inventoryList
  };

  showModal = (id) => {
    this.setState(
      {showModal: true, itemID: id}
    )
  }
  

  closeModal = () => {
    this.setState(
      {showModal: false}
    )
  }
  
  
  handleDelete(id) {
    axios.delete(`http://localhost:8080/inventory/${id}`)
    .then(res => {
      this.setState({
        showModal: false,
        inventoryList: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouse/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          warehouse: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  render() {
   
    let modal = <></>
    if (this.state.showModal) {
      modal = <InventoryModal closeModal={this.closeModal} delete={() => this.handleDelete(this.state.itemID)}/>
    } 

    if (!this.state.warehouse.id) {
      return <h1>Loading...</h1>;
    }

    return (
      <section className="details">
        <>
          <article className="details__header-container">
            <div className="details__header-wrap">
              <h1 className="details__header-title">
                <Link to="/warehouse" className="details__back-link">
                  <img
                    className="details__back-icon"
                    src={backIcon}
                    alt="back-icon"
                  />
                </Link>
                {this.state.warehouse.name}
              </h1>
              <Link
                to={`/warehouse/${this.state.warehouse.id}/edit}`}
                className="details__edit-link"
              >
                <img
                  className="details__edit-icon"
                  src={whiteEdit}
                  alt="edit-icon"
                />
              </Link>
            </div>

            <Link
              to={`/warehouse/${this.state.warehouse.id}/edit`}
              className="details__edit-link"
            >
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
              <h4 className="details__contact-content">WAREHOUSE ADDRESS:</h4>
              <p>{this.state.warehouse.address},</p>
              <p>
                {this.state.warehouse.city}, {this.state.warehouse.country}
              </p>
            </div>

            <div className="details__contact">
              <div className="details__contact-name">
                <h4 className="details__contact-content">CONTACT NAME:</h4>
                <p className="details__manager">
                  {this.state.warehouse.contact.name}
                </p>
                <p>{this.state.warehouse.contact.position}</p>
              </div>
              <div className="details__contact-info">
                <h4 className="details__contact-title">CONTACT INFORMATION:</h4>
                <p>{this.state.warehouse.contact.phone}</p>
                <p>{this.state.warehouse.contact.email}</p>
              </div>
            </div>
          </article>
        </>

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

          {this.state.inventoryList.map((item) => (
            <>
              <ul className="details__bp-list" key={uuidv4()}>
                <Link
                  to={`/inventory/item/${item.id}`}
                  className="details__list-link"
                >
                  <li key={uuidv4()}className="details__list-item details__list-item--inventory">
                    <h3 className="details__description">
                      {item.itemName}
                      <img
                        className="details__chevron"
                        src={chevronIcon}
                        alt="right-arrow-icon"
                      />
                    </h3>
                  </li>
                </Link>
                <li key={uuidv4()} className="details__list-item details__list-item--category">
                  {item.category}
                </li>
                <li key={uuidv4()} className="details__list-item details__list-item--status">
                  <div className="details__in-stock details__out-stock">
                    {item.status === "In Stock" ? (
                      <p className="details__in-stock">IN STOCK</p>
                    ) : (
                      <p className="details__out-stock">OUT OF STOCK</p>
                    )}
                  </div>
                </li>
                <li key={uuidv4()} className="details__list-item details__list-item--quantity">
                  {item.quantity}
                </li>
                <li key={uuidv4()} className="details__list-item details__list-item--actions">
                  <img src={deleteIcon} alt="delete icon" onClick={() => this.showModal(item.id)} />
                  <Link to={`/inventory/${item.id}/edit`}>
                    <img
                      className="details__item-edit"
                      src={editIcon}
                      alt="edit-icon"
                    />
                  </Link>
                </li>
              </ul>

              <div className="details__item-content">
                <div className="details__inventory-wrap">
                  <div className="details__item-container">
                    <div className="details__inventory-container">
                      <div className="details__item-title">
                        <h4 className="details__inventory-title">
                          INVENTORY ITEM
                        </h4>
                      </div>

                      <div className="details__item-wrap">
                        <h3 className="details__description">
                          {item.itemName}
                          <img
                            className="details__chevron"
                            src={chevronIcon}
                            alt="right-arrow-icon"
                          />
                        </h3>
                      </div>
                    </div>
                    <div className="details__category-container">
                      <h4 className="details__category-title">CATEGORY</h4>
                      <p className="details__category-text">{item.category}</p>
                    </div>
                  </div>

                  <div className="details__stock-container">
                    <div className="details__status-container">
                      <h4 className="details__status-title">STATUS</h4>
                      <div className="details__in-stock details__out-stock">
                        {item.status === "In Stock" ? (
                          <p className="details__in-stock">IN STOCK</p>
                        ) : (
                          <p className="details__out-stock">OUT OF STOCK</p>
                        )}
                      </div>
                    </div>

                    <div className="details__quantity-container">
                      <h4 className="details__quantity-title">QTY</h4>
                      <p className="details__quantity-text">{item.quantity}</p>
                    </div>
                  </div>
                </div>

                <div className="details__icon-container">
                  <img src={deleteIcon} alt="delete icon" onClick={this.showModal} />
                  <img
                    className="details__item-edit"
                    src={editIcon}
                    alt="edit-icon"
                  />
                </div>
              </div>
            </>
          ))}
          {modal}
        </article>
      </section>
    );
  }
}
