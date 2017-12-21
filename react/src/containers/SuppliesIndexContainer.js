import React, { Component } from 'react';
import SupplyCategoryTile from "../components/SupplyCategoryTile"
import { Route, IndexRoute, Router, browserHistory, Link, Redirect } from 'react-router';

class SuppliesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplyCategories: []
    }
  }

  componentDidMount () {
    fetch('/api/v1/supply_categories')
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
        supplyCategories: body.supply_categories
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let supplyCategories = this.state.supplyCategories.map(supply => {
      return (
        <SupplyCategoryTile
          key = {supply.id}
          id = {supply.id}
          name = {supply.name}
        />
      )
    })
    return(
      <div>
        <h1>All Supplies</h1>
        {supplyCategories}
      </div>
    )
  }
}

export default SuppliesIndexContainer;
