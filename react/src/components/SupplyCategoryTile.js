import React from 'react';
import { browserHistory, Link } from 'react-router';

const SupplyCategoryTile = props =>{
  return(
    <div className="rows">
      <div id="post-module" className="small-12 medium-4 columns">
        <Link to={`/supplies/${props.id}`}>
          {props.name}
      </Link>
      </div>
    </div>
  );
};

export default SupplyCategoryTile;
