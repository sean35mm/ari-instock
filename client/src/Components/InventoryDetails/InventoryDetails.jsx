import React from 'react';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import editWhite from '../../Assets/Icons/edit_white-24px.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./InventoryDetails.scss";


export default class InventoryDetails extends React.Component {
  
  state =  {
    inventory: {}
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.inventory.id) {
      return <h1>Loading...</h1>;
    }

    return(
      <div className="inv-details-container">
        <div className="inv-header">
              <img className="inv-header__arrow" src={backArrow} alt=""/>
              <h1 className="inv-header__title">{this.state.inventory.itemName}</h1>
              <Link to={`/inventory/editinventory/${this.state.inventory.id}`}>
              <div className="inv-header__edit-button">
                <h3 className="inv-header__text">Edit</h3>
                <img className="inv-header__icon" src={editWhite} alt="edit icon"/> 
              </div>             
              </Link>
        </div>

        <hr className="details-break"/>

        <div className="inv-details">
          <div className="inv-details__left-container">
            <div className="inv-details__description">
              <h5 className="inv-details__label">ITEM DESCRIPTION:</h5>
              <p className="inv-details__txt">{this.state.inventory.description}</p>
            </div>
            <div className="inv-details__cat-container">
              <h5 className="inv-details__label">CATEGORY:</h5>
              <p className="inv-details__txt">{this.state.inventory.category}</p>
            </div>
          </div>
          <div className="inv-details__right-container">
            <div className="inv-details__tablet-right">
              <div className="inv-details__status">
                <h5 className="inv-details__label">STATUS:</h5>
                <p className="inv-details__status-txt">{this.state.inventory.status}</p>
              </div>
              <div className="inv-details__qty">
                <h5 className="inv-details__label">QUANTITY:</h5>
                <p className="inv-details__txt">{this.state.inventory.quantity}</p>
              </div>
            </div>
            <div className="inv-details__warehouse">
              <h5 className="inv-details__label">WAREHOUSE:</h5>
              <p className="inv-details__txt">{this.state.inventory.warehouseName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}