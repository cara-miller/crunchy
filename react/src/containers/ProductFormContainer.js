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
    padding               : '20px',
    transform             : 'translate(-50%, -50%)'
  }
};

class ProductFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      products: [],
      modalIsOpen: false,
      retail_price: '',
      profit_margin: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleProductFormSubmit = this.handleProductFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//Product Form Methods
  newProduct(productPayload) {
    fetch('/api/v1/products', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(productPayload),
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
      this.props.getProducts()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleProductFormSubmit(event) {
    event.preventDefault();
    let productPayload = {
      name: this.state.name,
      retail_price: this.state.retail_price,
      profit_margin: this.state.profit_margin,
    }
    this.newProduct(productPayload);
    this.handleCloseModal();
  }

//Modal Methods

  handleOpenModal () {
  this.setState({ showModal: true });
}
  handleCloseModal () {
    this.setState({
      name: '',
      retail_price: '',
      profit_margin: '',
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
   form = <form id='form' className='modal-form' onSubmit={this.handleProductFormSubmit}>
     <button id='close' onClick={this.handleCloseModal}>X</button><br/>
     <h4>Create New Product</h4>
     <label>
       <h5>Product Name:</h5>
       <input value={this.state.name} className = 'forminputs' onChange={this.handleChange} name='name' type='text' placeholder='Product Name'/>
     </label>
     <label>
       <h5>Sale Price:</h5>
       <input value={this.state.retail_price} className = 'forminputs' onChange={this.handleChange} name='retail_price' type='text' placeholder='Price'/>
     </label>

     <button type="submit" className="button" onClick={this.handleProductFormSubmit}>Submit</button>
  </form>

    return(
      <div>
        <button id='add' className="topbutton" onClick={this.handleOpenModal}>Create New Product</button>
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

export default ProductFormContainer;
