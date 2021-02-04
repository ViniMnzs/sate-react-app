import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style.css';
import api from '../../services/api';
import {Link} from 'react-router-dom';

export default function Login(){

  const [fields, setFields] = useState({
    password: '',
    cpf: '',
  });

function handleInputChange(event){
  fields[event.target.name] = event.target.value;
  setFields(fields)
}

function handleFormSubmit(event){
  event.preventDefault();
  api.post('/login', fields)
  .then((response)=>{
    alert('Logado com sucesso')
    window.location.href = `/list/Andreia Marques`;
  })
  .catch((err)=>{
      alert(err);
      window.location.href = "/";
  })
}


    return(
  <div id="form-page">
  <form onSubmit={handleFormSubmit}>
  <Link style={{marginBottom:'100px', height:'5vh'}} to='/admin'>Painel do Administrador</Link>
  <div className="field">
    <label>CPF</label>
    <InputMask name='cpf' className='input-reg' required type='text' placeholder='Digite o CPF' mask='999.999.999-99' onChange={handleInputChange}/>
  </div> 
  <div className="field">
    <label>Senha</label>
    <input name='password' maxLength={9} className='input-reg' required type='password' placeholder='Digite uma senha' onChange={handleInputChange}/>
  </div>
  <div className='field-buttom'>
  <div className="button">
    <button className='button-reg-page' type='submit' onClick={handleFormSubmit} >Entrar</button>
  </div>
  </div>
  <Link className='singUp' to='/register'>Não tem conta? Cadastre-se!</Link>
  </form>
  </div>
    
)}