import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SupplyDropDown from './SupplyDropDown'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AddSupplyToProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      productSupplies:[],
      quantity: '',
      productsupplycost: '',
      supply_id: 0
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setSupplyId = this.setSupplyId.bind(this);
  }

  // Productsupply Form Methods

    newProductsupply(productsupplyPayload) {
      fetch('/api/v1/productsupplies', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(productsupplyPayload),
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
        this.closeModal()
        this.setState({
          productsupplies: body
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    handleFormSubmit(event){
      event.preventDefault();
      let productsupplyPayload = {
        quantity: this.state.quantity,
        supply_id: this.state.supply_id,
        product_id: this.props.product_id,
        productsupplycost: this.state.productsupplycost
      }
      debugger;
      this.newProductsupply(productsupplyPayload);
      this.handleCloseModal();
    }

    //Modal Methods

      handleOpenModal () {
      this.setState({ showModal: true });
    }
      handleCloseModal () {
        this.setState({
          name: '',
          quantity: '',
          productsupplycost: '',
          showModal: false
         });
      }

    //Misc Functions

    setSupplyId(supply){ this.setState({  supply_id: supply.value }) }

       handleChange(event) {
         let value = event.target.value;
         let name = event.target.name;
        this.setState( { [name]: value } )
       }


  render() {
    let setSupplyId = (supply) => {this.setSupplyId(supply)}
    let form;
    form = <form onSubmit={this.handleFormSubmit}>
      <h2>Add a Supply to this Product</h2>
      <label>
      Select a Supply:
      <SupplyDropDown
        setSupplyId = {setSupplyId}
      />
      Amount used in this product:
      <input value={this.state.quantity} onChange={this.handleChange} name='quantity' type='text' placeholder='quantity'/>
       </label>
       <label>
      For the price:
      <input value={this.state.productsupplycost} onChange={this.handleChange} name='productsupplycost' type='text' placeholder='price'/>
       </label>
      <button type="submit" onClick={this.props.handleFormSubmit}>Submit</button>
    </form>

    return (
      <div>
        <button id='add' className="button" onClick={this.handleOpenModal}>Add Supply</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handlecloseModal}
           >
          <button id='close' onClick={this.handleCloseModal}>Close</button>
          {form}
        </Modal>
      </div>
    )
  }
 }

export default AddSupplyToProduct;
