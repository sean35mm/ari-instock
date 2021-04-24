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
              <img className="inv-header__icon" src={editWhite} alt="edit icon" fill="#2E66E6"/>              
              </Link>
        </div>

          <hr className="details-break"/>

          <div className="details">
              <div className="details__top-container">
                  <div className="details__group-left">
                      <h4 className="details__label">ITEM DESCRIPTION</h4>
                      <p className="details__item">{this.state.inventory.description}</p>
                  </div>
                  <div className="details__right-container">
                      <h4 className="details__label">CATEGORY</h4>
                      <p className="details__cat">{this.state.inventory.category}</p>
                  </div>
              </div>
              <div className="details__vl"></div>
              <div className="details__tablet-right">
                  <div className="details__mid-container">
                      <div className="details__left">
                          <h4 className="details__label">STATUS</h4>
                          <h4 className="details__status">{this.state.inventory.status}</h4>
                      </div>
                      <div className="details__mid-right">
                          <h4 className="details__label">QUANTITY</h4>
                          <p className="details__qty">{this.state.inventory.quantity}</p>
                      </div>
                  </div>  
                  <div className="details__bottom-container">
                      <h4 className="details__label">WAREHOUSE</h4>
                      {console.log(this.state.inventory)}
                      <p className="details__qty">{this.state.inventory.warehouseName}</p>
                  </div> 
              </div>
          </div>
        </div>
    )
  }

}