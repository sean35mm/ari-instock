import React from "react";
import "./Modal.scss";
import Modal from 'react-awesome-modal';
import XButton from "../../Assets/Icons/close-24px.svg";
import deleteButton from '../../Assets/Icons/delete_outline-24px.svg'



export default class InventoryModal extends React.Component {


  state = {
    visible: false,
  };

  //create functions for open/close state of the modal

  openModal() {
    this.setState({
      visible: true,
    });
    console.log("pls work")
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  //need to make some of the elements on the page dynamic still
  render() {
    console.log(this.state.visible)
    return (
      <>
        <img src={deleteButton} alt="delete button" onClick={() => this.openModal()} className="delete__button"/>
        <Modal visible={this.state.visible}>
          <div className="delete__modal">
            <h1 className="modal__header">Delete this inventory item?</h1>
            <p className="modal__text">
              Please confirm that you'd like to delete this from the inventory
              list. You won't be able to undo this action.
            </p>
            <button className="modal-cancel button" onClick={() => this.closeModal()}>Cancel</button>
            <button className="modal-delete button" onClick={this.props.delete}>Delete</button> 
            <a href="" onClick={() => this.closeModal()}>
              <img className="modal__x-icon" src={XButton} alt="x button" />
            </a>
          </div>
        </Modal>
      </>
    );
  }
}

