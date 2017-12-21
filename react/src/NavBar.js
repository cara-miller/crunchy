import React from 'react';
import { Link } from 'react-router';
// import SearchBar from './components/SearchBar';

const NavBar = props =>{
  return(
    <div>
    <div id='billboard' className='row'>
      <a href="../"><h1 className="menu-text">Crunchify</h1></a>
        <div className="menu">
          <a href="../products">Products</a>
        </div>
        <div className="menu">
          <a href="../supplies">Supplies</a>
        </div>
        <div className="menu">
          <a href="../suppliers">Suppliers</a>
        </div>
        <div className="menu">
          <a href="../labor">Labor</a>
        </div>
      </div>
      {props.children}
      </div>
  )
}

export default NavBar;
