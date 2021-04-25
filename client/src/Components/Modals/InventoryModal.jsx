import React from "react";
import "./Modal.scss";
import Modal from 'react-awesome-modal';
import XButton from "../../Assets/Icons/close-24px.svg";
import deleteButton from '../../Assets/Icons/delete_outline-24px.svg'



export default class InventoryModal extends React.Component {


  render() {
   
    return (
      <>
        
        <div className="modal">
          <div className="delete__modal">
            <h1 className="modal__header">Delete this inventory item?</h1>
            <p className="modal__text">
              Please confirm that you'd like to delete this from the inventory
              list. You won't be able to undo this action.
            </p>
            <button className="modal-cancel button" onClick={this.props.handleClose}>Cancel</button>
            <button className="modal-delete button" onClick={this.props.delete}>Delete</button> 
            <a href="" onClick={this.props.closeModal}>
              <img className="modal__x-icon" onClick={this.props.handleClose} src={XButton} alt="x button" />
            </a>
          </div>
        </div> 
        
      </>
    );
  }
}

