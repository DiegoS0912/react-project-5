import React, { useRef } from 'react';
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainerName(textInput.current.value.trim()));
        navigate('/pokedex');
    }

  return (
    <div>
    <h1>¡Hola Entrenador!</h1>
    <h2>Para poder comenzar, dame tu nombre</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={textInput}/>
        <button>Comenzar</button>
    </form>
    </div>
  )
}

export default HomePage;