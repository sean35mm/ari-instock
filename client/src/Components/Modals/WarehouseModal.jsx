import React from 'react';
import "./Modal.scss";
import XButton from '../../Assets/Icons/close-24px.svg'


export default class WarehouseModal extends React.Component {


  render() {
    return(
      <>
        
        <div className="modal">
          <div className="delete__modal">
            <h1 className="modal__header">Delete this warehouse?</h1>
            <p className="modal__text">Please confirm that you'd like to delete this from the list of warehouses. You won't be able to undo this action.</p>
            <button className="modal-cancel button" onClick={this.props.closeModal}>Cancel</button>
            <button className="modal-delete button" onClick={this.props.delete}>Delete</button>  
            <a href="/" onClick={this.props.closeModal}>
              <img className="modal__x-icon" src={XButton} alt="x button"/>
            </a>
          </div>
        </div> 
      
      </>
    )
  }
}