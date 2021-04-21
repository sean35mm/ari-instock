import React from 'react';
import "./Modal.scss";
import Modal from 'react-modal';
import XButton from '../../Assets/Icons/close-24.svg'


export default class InventoryModal extends React.Component {
  //following online guide :)
 

  state = {
    show: false
  }
  
  //create functions for open/close state of the modal

  openModal() {
    this.setState({
      show: true
    })
  }

  closeModal() {
    this.setState({
      show: false
    })
  }

//need to make some of the elements on the page dynamic still
  render() {
    return(
      <>
        <button className="delete_button" onClick={() => this.openModal()}></button>
        <Modal show={this.state.show}>
          <div className="del_modal">
            <h1 className="modal__title">Delete this inventory item?</h1>
            <p className="modal__body">Please confirm that you'd like to delete this from the inventory list. You won't be able to undo this action.</p>
            <button className="modal__cancel button" onClick={() => this.closeModal()}>Cancel</button>
            {/* <button className="modal__delete button">Delete</button>  I need a clickhandler to delete */}
            <a href="" onClick={()=> this.closeModal()}><img className="modal__x-icon" src={XButton} alt="x button"/></a>
          </div>
        </Modal>
      </>
    )
  }

  // I will edit above once I finish Warehouse Modal first