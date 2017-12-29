import React from 'react';
import { Link } from 'react-router';
import SupplyFormContainer from "./containers/SupplyFormContainer"
import LaborFormContainer from "./containers/LaborFormContainer"
// import SearchBar from './components/SearchBar';

const NavBar = props =>{
  return(
  <div>
    <div id='billboard' className='row'>
      <a href="../"><h1 className="menu-text">Crunchify</h1></a>
      <div className="menu">
        <SupplyFormContainer/>
      </div>
      <div className="menu">
        <LaborFormContainer/>
      </div>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar;
