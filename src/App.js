import React, { useState, useEffect }  from 'react';
import Pokemon from './Components/Pokemon/Pokemon.js';
import Pokelist from './Components/Pokelist/Pokelist.js';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPokemon = async () => {
      const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
        const pokemonData = await apiCall.json();
        setPokemon(pokemonData);
      }
    fetchPokemon();
  }, [number]);
  
  return (
    <div className="app">
      <div className="list">
        <Pokelist setNumber={(n)=>setNumber(n)}/>
      </div>
        { pokemon.hasOwnProperty('name') ? 
          <Pokemon {...pokemon} setLoading={setLoading} loading={loading}/>
          : 
          '' 
        }
      <h5 className="sign">made by Mauricio Scioville</h5>
    </div>
  );
}

export default App;
