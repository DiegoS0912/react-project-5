import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css'
import Pagination from '../components/pokedexPage/Pagination';

const PokedexPage = () => {
  
    const [page, setPage] = useState(2);
    const [selectValue, setSelectValue] = useState('allPokemons');
    const trainerName = useSelector(store => store.trainerName);
    const pokemonName = useSelector(store => store.pokemonName);
    const dispatch = useDispatch();
    const [pokemons, getPokemons, getPerType] = useFetch();

    useEffect(() => {
        if (selectValue==='allPokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1300';
            getPokemons(url); 
        } else {
            getPerType(selectValue);
        }
    }, [selectValue]);

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
        textInput.current.value = '';
    };

    const cbFilter = () => {
        if (pokemonName) {
            return pokemons?.results.filter(element => element.name.includes(pokemonName));
        } else {
            return pokemons?.results;
        }
    }

        const quantity = 12;
        // const total = Math.ceil(cbFilter().length / quantity);
        const pagination = () => {
            const end = quantity * page;
            const start = end - quantity;
            return cbFilter()?.slice(start, end);
        }

    return (
        <div className='pokedex'>
            <section className='poke_header'>
                <h3><span>Bienvenido {trainerName},  </span>Aquí podrás encontrar tu pokemon favorito</h3>
                <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={textInput}/>
                    <button>Buscar</button>
                </form>
                <SelectType
                    setSelectValue={setSelectValue}
                />
                </div>
            </section>
            <section className='poke_container'>
                {
                    pagination()?.map(poke => (
                        <PokeCard
                        key={poke.url}
                        url={poke.url}
                        />
                    ))
                }
            </section>
            <Pagination
                setPage={setPage}
                page={page}
                // total={total}
            />
        </div>
    )
}

export default PokedexPage;