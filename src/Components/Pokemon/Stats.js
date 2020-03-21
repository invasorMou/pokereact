import React from 'react';
import Bar from './Bar.js';
import titelize from '../Utils.js';
import './stats.css';

 
export default function Stats(props) {
  const stats = props.stats.map( (param, idx) => {
      const value = statPercentage(param.base_stat, maxStats[param.stat.name]);
      return (
        <div className="stat" key={idx}>
          <span className="name">
            {titelize(param.stat.name)}:
          </span> 
          <span className="base">
            {param.base_stat}
          </span> 
          <Bar id={idx}
            value={value}
            color={colorsStats[param.stat.name]}
          />
        </div>
      )
    }
  );
  
  return (
    <div className="stats">
      {stats.reverse()}
    </div>
  );
}

function statPercentage(base , max) {
  return (base/max)*100;
}

const maxStats = {
  "hp": 250,
  "attack": 134,
  "defense": 180,
  "special-attack": 154,
  "special-defense": 125,
  "speed": 150
}

const colorsStats = {
  "hp": "red",
  "attack": "darkorange",
  "defense": "gold",
  "special-attack": "dodgerblue",
  "special-defense": "limegreen",
  "speed": "hotpink"
}
