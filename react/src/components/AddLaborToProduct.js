import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import LaborDropDown from './LaborDropDown'

const customStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AddLaborToProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      productlabors:[],
      time_per_job: '',
      cost_for_this_job: '',
      labor_id: 0,
      labors: []
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLaborId = this.setLaborId.bind(this);
  }

  // Productlabor Form Methods

    newProductlabor(productlaborPayload) {
      fetch('/api/v1/productlabors', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(productlaborPayload),
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
        this.props.getProduct()
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    handleFormSubmit(event){
      event.preventDefault();
      let productlaborPayload = {
        time_per_job: this.state.time_per_job,
        labor_id: this.state.labor_id,
        product_id: this.props.product_id,
        cost_for_this_job: this.state.cost_for_this_job
      }
      this.newProductlabor(productlaborPayload);
      this.handleCloseModal();
    }

    //Modal Methods

      handleOpenModal () {
      this.setState({ showModal: true });
    }
      handleCloseModal () {
        this.setState({
          time_per_job: '',
          cost_for_this_job: '',
          showModal: false
         });
      }

    //Misc Functions

    setLaborId(labor){ this.setState({  labor_id: labor.value }) }

       handleChange(event) {
         let value = event.target.value;
         let name = event.target.name;
        this.setState( { [name]: value } )
       }


  render() {
    let setLaborId = (labor) => {this.setLaborId(labor)}
    let form;
    form = <form onSubmit={this.handleFormSubmit}>
      <h2>Add Production to this Product</h2>
      <label>
      <h5>Select a Labor Type:</h5>
      <LaborDropDown
        setLaborId = {setLaborId}
      />
      <h5>Approximate time (in minutes) to complete this task for this product:</h5>
      <input className = 'forminputs' value={this.state.time_per_job} onChange={this.handleChange} name='time_per_job' type='text' placeholder='number of minutes'/>
       </label>

      <button type="submit" onClick={this.props.handleFormSubmit}>Submit</button>
    </form>

    return (
      <div>
        <button id='add' className="button" onClick={this.handleOpenModal}>Add Labor to Product</button>
        <Modal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handlecloseModal}
           style={customStyle}
           contentLabel="Modal"
           >
          <button id='close' onClick={this.handleCloseModal}>Close</button>
          {form}
        </Modal>
      </div>
    )
  }
 }

export default AddLaborToProduct;
