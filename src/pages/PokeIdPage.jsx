import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import './styles/pokeIdPage.css'

const PokeIdPage = () => {
    
    const [ pokeData, getPokeData ] = useFetch();
    const param = useParams();
    
    useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`;
      getPokeData(url);
    }, []);

    console.log(pokeData)

  return (
    <section className='poke_body'>
      <header className='pokeid_head'>
        <img className='pokeid_img1' src="./assets/pokedex_img.png" alt="" />
        <img className='pokeid_img2' src="./assets/imagen_head.png" alt="image header" />
      </header>
      <article className={`pokedata bd-${pokeData?.types[0].type.name}`}>
        <div className={`bg-${pokeData?.types[0].type.name}`}></div>
        <figure className='pokedata_img'>
          <img src={pokeData?.sprites.other["official-artwork"].front_default} alt="pokemon photo" />
        </figure>
        <span># {pokeData?.id}</span>
        <h2>{pokeData?.name}</h2>
        <ul>
          <li><span>weight: </span><span>{pokeData?.weight}</span></li>
          <li><span>height: </span><span>{pokeData?.height}</span></li>
        </ul>
        <div>
          <article className='poke_id'>
            <h3>type</h3>
            <ul>
              {
                pokeData?.types.map(type => (
                  <li key={type.type.url}>{type.type.name}</li>
                ))
              }
            </ul>
          </article>
          <article>
            <h3>skills</h3>
            <ul>
              {
                pokeData?.abilities.map(skill => (
                  <li key={skill.ability.url}>{skill.ability.name}</li>
                ))
              }
            </ul>
          </article>
        </div>
      </article>
      <ul className='pokedata_stats'>
      <h2>Stats</h2>
        {
          pokeData?.stats.map(stat => (
            <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}/150</span>
            <div className='stats_bar'><div  style={{width: `${stat.base_stat/1.5}%`}} className='stats_prog'></div></div></li>
          ))
        }
      </ul>
      <hr />
      <div className='movements_container'>
        <h2>Movements</h2>
        <ul className='movements_ul'>
          {
            pokeData?.moves.map(move => (
              <li className='pokedata_moves' key={move.move.url}>{move.move.name}</li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default PokeIdPage;