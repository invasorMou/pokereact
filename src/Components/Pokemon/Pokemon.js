import React, { useState, useEffect } from 'react';
import Type from './Type.js';
import Stats from './Stats.js';
import titelize from '../Utils.js';
import './types.css';
import './card.css';

export default function Pokemon(props) {
  const [pokeImg, setPokeImg] = useState('');
  
  useEffect(()=>{
    async function fetchImg() {
      let response = await fetch(props.sprites.front_default);
      let myBlob = await response.blob();
      
      let objectURL = URL.createObjectURL(myBlob);
      setPokeImg(objectURL)
      props.setLoading(false)
    }
    fetchImg()
  },[props.sprites.front_default])
  
  return (
      <>
        { loading ?
          <div className="pokemon-card loader"> 
            <h2>LOADING...</h2>
          </div>
        :
          <div className="pokemon-card pokemon">
            <img className="pokemon-img" style={{width:160}} src={pokeImg} alt={titelize(props.name)}/>
            <h1>#{props.id} {titelize(props.name)}</h1> 
            <Type types={props.types}/>
            <Stats stats={props.stats}/>
          </div>
        }
      </>
  );
}
