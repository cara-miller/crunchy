import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

class LaborFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labors: [],
      modalIsOpen: false,
      description: '',
      cost_per_hour: ''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleLaborFormSubmit = this.handleLaborFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//Labor Form Methods
  newLabor(laborPayload) {
    fetch('/api/v1/labors', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(laborPayload),
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
        labors: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleLaborFormSubmit(event) {
    event.preventDefault();
    let laborPayload = {
      description: this.state.description,
      cost_per_hour: +this.state.cost_per_hour
    }

    this.newLabor(laborPayload);
    this.handleCloseModal();
  }

//Modal Methods

  handleOpenModal () {
  this.setState({ showModal: true });
}
  handleCloseModal () {
    this.setState({
      description: '',
      cost_per_hour: '',
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
   form = <form id='form' onSubmit={this.handleLaborFormSubmit}>
     <h5>Add a Labor Type</h5>
     <label>
       Labor Description:
       <input value={this.state.description} onChange={this.handleChange} name='description' type='text' placeholder='Job Name'/>
     </label>
     <label>
       Hourly Wage:
       <input value={this.state.cost_per_hour} onChange={this.handleChange} name='cost_per_hour' type='text' placeholder='wage'/>
     </label>

     <button type="submit" className="button" onClick={this.handleLaborFormSubmit}>Submit</button>
  </form>

    return(
      <div>
        <button id='add' className="topbutton" onClick={this.handleOpenModal}>Create New Labor</button>
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

export default LaborFormContainer;
