import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Select from 'react-select';
import { Async } from 'react-select';

class LaborDropDown extends Component{
  constructor(props) {
    super(props);
    this.state = {
      labors:[],
      selectedOption: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleChange(selectedOption){
  this.setState({ selectedOption });
  this.props.setLaborId(selectedOption);
  console.log(`Selected: ${selectedOption.label} labor_id: ${selectedOption.value}`);
}

componentDidMount(){
  this.getOptions();
  // debugger;
}
  getOptions() {
    fetch('/api/v1/labors', {
      credentials: 'same-origin'
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
      this.setState({
        labors: body.labors
      })
    }
  )
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    const{labors} = this.state;
    let laborOptions;
    let options = []
    laborOptions = labors.map((labor) => {
      options.push({value: labor.id, label: labor.description})

    })
     return (
       <div>
         <Select
           name="form-field-name"
           value={this.state.selectedOption.value}
           onChange={this.handleChange}
           options={options}
         />
       </div>
     );
   }

}
export default LaborDropDown;
