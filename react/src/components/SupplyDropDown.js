import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Select from 'react-select';
import { Async } from 'react-select';

class SupplyDropDown extends Component{
  constructor(props) {
    super(props);
    this.state = {
      supplies:[],
      selectedOption: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleChange(selectedOption){
  this.setState({ selectedOption });
  this.props.setSupplyId(selectedOption);
  console.log(`Selected: ${selectedOption.label} supply_id: ${selectedOption.value}`);
}

componentDidMount(){
  this.getOptions();
}
  getOptions() {
    fetch('/api/v1/supplies')
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
        supplies: body.supplies
      })
    }
  )
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    const{supplies} = this.state;
    let supplyOptions;
    let options = []
    supplyOptions = supplies.map((supply) => {
      options.push({value: supply.id, label: supply.name})

    })
     return (
       <div>
         <Select
           name="form-field-name"
           className="select"
           value={this.state.selectedOption.value}
           onChange={this.handleChange}
           options={options}
         />
       </div>
     );
   }

}
export default SupplyDropDown;
