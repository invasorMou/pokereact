import React from 'react';
import titelize from '../Utils.js';
 
export default function Type(props) {

  const types = props.types.map( option => 
    <div className={"type ".concat(option.type.name)} key={option.slot}>{titelize(option.type.name)}</div>
  );
  
  return (
    <div>
      {types}
    </div>
  );
}
