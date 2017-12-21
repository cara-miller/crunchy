import React, { Component } from 'react';
import { Route, IndexRoute, Link, Router, browserHistory } from 'react-router';
import SupplyTile from "../components/SupplyTile"

class SupplyShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supply: {},
      supplyCategory: {},
      supplier: {}
    };
    this.getSupply = this.getSupply.bind(this);
  }

  getSupply() {
    let supplyId = this.props.params.id

  fetch(`/api/v1/supplies/${supplyId}`)
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       supply: body.supply,
       supplyCategory: body.supply_category,
       supplier: body.supplier
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getSupply()
  }

  render () {
    return(
      <div>
        <SupplyTile
          key={this.state.supply.id}
          id={this.state.supply.id}
          cost={this.state.supply.cost}
          quantity={this.state.supply.sold_in_quantity}
          unit={this.state.supply.unit_of_measurement}
          productCode={this.state.supply.product_code}
          name={this.state.supplyCategory.name}
          supplier={this.state.supplier.name}
        />
      </div>
    );
  }

}

export default SupplyShowContainer;
