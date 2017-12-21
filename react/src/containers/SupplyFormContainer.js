// import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
//
// class SupplyFormContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       supply: '',
//       supplier: '',
//       soldInQuantity: '',
//       unitOfMeasurement: '',
//       cost: '',
//       productCode: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClearForm = this.handleClearForm.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     let newKey = event.target.name;
//     let newValue = event.target.value;
//     this.setState({
//       [newKey]: newValue
//     });
//   }
//   addNewSupply(newSupply) {
//   fetch('/api/v1/supplies', {
//     credentials: 'same-origin',
//     method: 'POST',
//     body: JSON.stringify(newSupply),
//     headers: {'Content-Type': 'application/json'}
//   })
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       let errorMessage = `${response.status} (${response.statusText})`,
//       error = new Error(errorMessage);
//       throw(error);
//     }
//   })
//   .then(response => response.json())
//   .then(body => {
//     browserHistory.push(`/supplies`);
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`));
//   }
