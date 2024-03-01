import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css';

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
      getPokemon(url);
    }, []); 

    const handleClick = () => {
      navigate(`/pokedex/${pokemon.id}`);
    }

  return (
    <article onClick={handleClick} className={`poke_card bd-${pokemon?.types[0].type.name}`}>
        <div className={`bg-${pokemon?.types[0].type.name}`}></div>
        <figure>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon photo" />    
        </figure>
        <h3>{pokemon?.name}</h3>
        <ul className='poke_types'>
          {
            pokemon?.types.map(type => (
              <li key={type.type.url} className={`slot${type.slot}`}>
                {type.type.name}
              </li>
            ))
          }
        </ul>
        <p>type</p>
        <hr />
        <ul className='poke_stats'>
          {
            pokemon?.stats.map(stat => (
              !stat.stat.name.includes('special') &&
              <li key={stat.stat.url}>{stat.stat.name}<span>{stat.base_stat}</span> </li>
            ))
          }
        </ul>
    </article>
  )
}

export default PokeCard;