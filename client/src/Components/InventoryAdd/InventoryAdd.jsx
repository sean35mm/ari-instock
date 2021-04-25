import "./InventoryAdd.scss";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backLogo from "../../Assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../Assets/Icons/error-24px.svg";

class InventoryAdd extends React.Component {

  state = {
    itemcheck: false,
    descriptioncheck: false,
    quantitycheck: false,
    quantitycheckVal: false,
    stockcheck: true,
    warehousecheck: false,
    categorycheck: false,
    toggle1: true,
    toggle2: false,
    inStock: "In Stock",
    quantity: 0
  };

  // Supports the future possibility of more categories being added as opposed to a manual list of options
  CategoryList = [...new Set(this.props.inventorylist.map(item => item.category))];

  RadioSwap = (e) => {

    console.log(e.target.value)
    if (e.target.value === "In Stock") {
      this.setState({
        toggle1: true,
        toggle2: false,
        stockcheck: true,
        inStock: "In Stock"
      });
    } else {
      this.setState({
        toggle1: false,
        toggle2: true,
        stockcheck: false,
        inStock: "Out of Stock"
      });
    }

    console.log(this.state.inStock)

  };



  SubmitForm = (e) => {
    e.preventDefault();
    let expressURL = "http://localhost:8080";
    let addInventory = "/inventory/add";

    if (this.state.inStock === "In Stock") {
      if (e.target.itemName.value === "") {
        this.setState({ itemcheck: true });
      } else if (e.target.description.value === "") {
        this.setState({ descriptioncheck: true });
      } else if (e.target.category.value === "") {
        this.setState({ categorycheck: true });
      } else if (e.target.quantity.value === "") {
        this.setState({ quantitycheck: true, quantitycheckVal: false });
      } else if (e.target.quantity.value < 0) {
        this.setState({ quantitycheckVal: true, quantitycheck: false });
      } else if (e.target.warehouseName.value === "") {
        this.setState({ warehousecheck: true });
      } else {
        alert("Item Created");

        this.setState({
          itemcheck: false,
          descriptioncheck: false,
          quantitycheck: false,
          quantitycheckVal: false,
          stockcheck: true,
        });

        axios.post(expressURL + addInventory, {
          warehouseName: e.target.warehouseName.value,
          itemName: e.target.itemName.value,
          description: e.target.description.value,
          category: e.target.category.value,
          status: this.state.inStock,
          quantity: e.target.quantity.value
        });

        this.props.history.push("/inventory");
      }
    } else {
      if (e.target.itemName.value === "") {
        this.setState({ itemcheck: true });
      } else if (e.target.description.value === "") {
        this.setState({ descriptioncheck: true });
      } else if (e.target.category.value === "") {
        this.setState({ categorycheck: true });
      } else if (e.target.warehouseName.value === "") {
        this.setState({ warehousecheck: true });
      } else {
        alert("Item Created");

        this.setState({
          itemcheck: false,
          descriptioncheck: false,
          quantitycheck: false,
          quantitycheckVal: false,
          stockcheck: true,
        });

        axios.post(expressURL + addInventory, {
          warehouseName: e.target.warehouseName.value,
          itemName: e.target.itemName.value,
          description: e.target.description.value,
          category: e.target.category.value,
          status: this.state.inStock,
          quantity: this.state.quantity
        });

        this.props.history.push("/inventory");
      }
    }
  };



  render() {
    return (
      <>
        <section className="inventoryAdd">
          <div className="inventoryAdd__nav">
            <Link to="/inventory">
              <img
                className="inventoryAdd__nav-back-button"
                src={backLogo}
                alt="button for going back"
              />
            </Link>
            <h2 className="inventoryAdd__nav-title">Add New Inventory Item</h2>
          </div>

          <form
            className="inventoryAdd__form"
            onSubmit={(e) => this.SubmitForm(e)}
          >
            <div className="inventoryAdd__form-container">
              <div className="inventoryAdd__form-details">
                <h3 className="inventoryAdd__sub-title">Item Details</h3>

                <div className="inventoryeAdd__details-container">
                  <div className="inventoryAdd__details-subContainer">
                    <p className="inventoryAdd__details-title">Item Name</p>
                    <input
                      className="inventoryAdd__details-input"
                      name="itemName"
                      placeholder="Item Name"
                    ></input>
                    {this.state.itemcheck && (
                      <div className="inventoryAdd__warning-container">
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="inventoryAdd__warning-icon"
                        />
                        <p className="inventoryAdd__warning-field">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="inventoryAdd__details-subContainer">
                    <p className="inventoryAdd__details-title">Description</p>
                    <textarea
                      className="inventoryAdd__details-textBox"
                      name="description"
                      placeholder="Description"
                    ></textarea>
                    {this.state.descriptioncheck && (
                      <div className="inventoryAdd__warning-container">
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="inventoryAdd__warning-icon"
                        />
                        <p className="inventoryAdd__warning-field">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="inventoryAdd__details-subContainer">
                    <p className="inventoryAdd__details-title">Category</p>
                    <select
                      className="inventoryAdd__details-select"
                      name="category"
                    >
                      {this.CategoryList.map((category, i) => (
                        <option key={i} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>

                    {this.state.categorycheck && (
                      <div className="inventoryAdd__warning-container">
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="inventoryAdd__warning-icon"
                        />
                        <p className="inventoryAdd__warning-field">
                          This field is required
                        </p>
                      </div>
                    )}
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
                        <input
                          type="radio"
                          className="inventoryAdd__details-radio"
                          name="inStock"
                          id="inStock"
                          value="In Stock"
                          onChange={(e) => this.RadioSwap(e)}
                          checked={this.state.toggle1}
                        ></input>
                        <label
                          htmlFor="inStock"
                          className="inventoryAdd__radio-label"
                        >
                          In Stock
                        </label>
                      </div>

                      <div className="inventoryAdd__details-subContainer-radioInp">
                        <input
                          type="radio"
                          className="inventoryAdd__details-radio"
                          name="outStock"
                          id="outStock"
                          value="Out of Stock"
                          onChange={(e) => this.RadioSwap(e)}
                          checked={this.state.toggle2}
                        ></input>
                        <label
                          htmlFor="outStock"
                          className="inventoryAdd__radio-label"
                        >
                          Out of Stock
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="inventoryAdd__details-subContainer">
                    {this.state.stockcheck && (
                      <div className="inventoryAdd__details-quantity">
                        <p className="inventoryAdd__details-title">Quantity</p>
                        <input
                          className="inventoryAdd__details-input-quantity"
                          name="quantity"
                          placeholder="Amount"
                        ></input>
                      </div>
                    )}

                    {this.state.quantitycheck && (
                      <div className="inventoryAdd__warning-container">
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="inventoryAdd__warning-icon"
                        />
                        <p className="inventoryAdd__warning-field">
                          This field is required
                        </p>
                      </div>
                    )}

                    {this.state.quantitycheckVal && (
                      <div className="inventoryAdd__warning-container">
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="inventoryAdd__warning-icon"
                        />
                        <p className="inventoryAdd__warning-field">
                          Quantity cannot be less than 0
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="inventoryAdd__details-subContainer">
                    <p className="inventoryAdd__details-title">Warehouse</p>
                    <select
                      className="inventoryAdd__details-select"
                      name="warehouseName"
                    >
                      {this.props.warehouselist.map(warehouse => <option key={warehouse.id} value={warehouse.name}>{warehouse.name}</option>)}
                    </select>

                    {this.state.warehousecheck && (
                      <div className="inventoryAdd__warning-container">
                        <img
                          src={errorIcon}
                          alt="Error"
                          className="inventoryAdd__warning-icon"
                        />
                        <p className="inventoryAdd__warning-field">
                          This field is required
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="inventoryAdd__buttons">
              <div className="inventoryAdd__buttons-subContainer">
                <Link to="/inventory">
                  <button className="inventoryAdd__cancel-button">
                    Cancel
                  </button>
                </Link>
                <button className="inventoryAdd__add-button">+ Add Item</button>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default InventoryAdd;
