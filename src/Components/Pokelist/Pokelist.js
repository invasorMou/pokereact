import React, { useState }  from 'react';
import Label from './Label.js';
import './pokelist.css';

export default function Pokelist(props) {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
  const [list, setList] = useState({});
  
  if (!list.hasOwnProperty('results') ) {
    fetch(`${url}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setList(data)
    });
  }

  return (
      <div className="pokemon-list">
        {list.hasOwnProperty('results') ? 
          list.results.map((poke, idx) => 
            <Label 
              idx={idx} 
              poke={poke} 
              key={idx} 
              setNumber={(n)=>props.setNumber(n)} 
              />
          )
          :
          null
        }
      </div>
  );
}
