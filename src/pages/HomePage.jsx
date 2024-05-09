import React, { useRef } from 'react';
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css'

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
    <div className='front_page'>
      <h1 className='title'>¡Hola Entrenador!</h1>
      <h2 className='subtitle'>Para poder comenzar, dame tu nombre</h2>
      <form onSubmit={handleSubmit} className='form'>
          <input type="text" ref={textInput}/>
          <button className='form_btn'>Comenzar</button>
      </form>
    </div>
  )
}

export default HomePage;