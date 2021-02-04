import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default function Login(){

  const [fields, setFields] = useState({
    password: '',
    login: '',
  });

function handleInputChange(event){
  fields[event.target.name] = event.target.value;
  setFields(fields)
}

function handleFormSubmit(event){
  event.preventDefault();
  api.post('/login/admin', fields)
  .then((response)=>{
    alert('Logado com sucesso')
    window.location.href = "/process";
  })
  .catch((err)=>{
      alert('Algo errado aconteceu, tente novamente');
      window.location.href = "/";
  })
}

    return(
  <div id="form-page">
  <form onSubmit={handleFormSubmit}>
  <Link style={{marginBottom:'100px', height:'5vh'}} to='/'>Voltar</Link>
  <div className="field">
    <label>Login</label>
    <input name='login' maxLength={5} className='input-reg' required type='text' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>Senha</label>
    <input name='password' maxLength={4} className='input-reg' required type='password' placeholder='Digite uma senha' onChange={handleInputChange}/>
  </div>
  <div className='field-buttom'>
  <div className="button">
    <Link to='/process' className='button-reg-page'>Entrar</Link>
  </div>
  </div>
  </form>
  </div>
    
)}