import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SupplyFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      supplies: [],
      modalIsOpen: false,
      sold_in_quantity: '',
      unit_of_measurement: '',
      cost: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSupplyFormSubmit = this.handleSupplyFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//Supply Form Methods
  newSupply(supplyPayload) {
    fetch('/api/v1/supplies', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(supplyPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.handleCloseModal()
      this.setState({
        supplies: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleSupplyFormSubmit(event) {
    event.preventDefault();
    let supplyPayload = {
      name: this.state.name,
      sold_in_quantity: this.state.sold_in_quantity,
      unit_of_measurement: this.state.unit_of_measurement,
      cost: this.state.cost,
    }
    this.newSupply(supplyPayload);
    this.handleCloseModal();
  }

//Modal Methods

  handleOpenModal () {
  this.setState({ showModal: true });
}
  handleCloseModal () {
    this.setState({
      name: '',
      sold_in_quantity: '',
      unit_of_measurement: '',
      cost: '',
      showModal: false
     });
  }

//Misc Functions

   handleChange(event) {
     let value = event.target.value;
     let name = event.target.name;
    this.setState( { [name]: value } )
   }

//Render
 render() {
   let form;
   form = <form id='form' onSubmit={this.handleSupplyFormSubmit}>
      <button id='close' onClick={this.handleCloseModal}>X</button>
     <h4>New Supply</h4>
     <label>
       <h5>Supply Name:</h5>
       <input value={this.state.name} onChange={this.handleChange} name='name' type='text' placeholder='material'/>
     </label>
     <label>
       <h5>This supply is sold in sets of:</h5>
       <input value={this.state.sold_in_quantity} onChange={this.handleChange} name='sold_in_quantity' type='text' placeholder='quantity'/>
       <input value={this.state.unit_of_measurement} onChange={this.handleChange} name='unit_of_measurement' type='text' placeholder='unit of measurement'/>
     </label>
        <h5>For the price:</h5>
        <input value={this.state.cost} onChange={this.handleChange} name='cost' type='text' placeholder='price'/>
     <button type="submit" className="button" onClick={this.handleSupplyFormSubmit}>Submit</button>
  </form>

    return(
      <div>
        <button id='add' className="topbutton" onClick={this.handleOpenModal}>Create Supply</button>
       <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handlecloseModal}
          style={customStyle}
          contentLabel="Modal"
          >
         {form}
       </Modal>
     </div>
    )
  }
}

export default SupplyFormContainer;
