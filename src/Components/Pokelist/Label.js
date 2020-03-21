import React from 'react';
import titelize from '../Utils.js';

export default function Label(props) {
  return (
      <div className="pokemon-index" onClick={()=>props.setNumber(props.idx+1)}>
        <span className="pokemon-idx">
          {props.idx+1}
        </span>
        <span className="pokemon-name">
          {titelize(props.poke.name)}
        </span>
      </div>
  );
}
