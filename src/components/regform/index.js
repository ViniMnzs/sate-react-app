import React, { useState } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './style.css';
import api from '../../services/api';
import DatePicker from "react-datepicker";
import moment from 'moment'

export default function Regform(){

  const [fields, setFields] = useState({
    name: '',
    sus:'',
    password:'',
    birth: '',
    email: '',
    cpf: '',
    phone:''
  });

function handleInputChange(event){
  fields[event.target.name] = event.target.value;
  setFields(fields)
  console.log(fields)
}

async function handleFormSubmit(event){
  event.preventDefault();
  api.post('/register', fields)
  .then((response)=>{
      alert('registrado com sucesso');
      window.location.href = "/";
  })
  .catch((err)=>{
      alert('Algo deu errado, tente novamente mais tarde');
      //window.location.href = "/";
  })
}

    return(
  <div id="form-page">
  <form onSubmit={handleFormSubmit}>
  <div className="field">
    <label>Nome</label>
    <input name='name' className='input-reg' required type='text' placeholder='Nome do aluno' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>CPF</label>
    <InputMask name='cpf' className='input-reg' required type='text' placeholder='Digite o CPF' mask='999.999.999-99' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>SUS</label>
    <InputMask name='sus' className='input-reg' required type='text' placeholder='Número da carteira do SUS' mask='999 9999 9999 9999' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>Data de Nascimento</label>
    <input name='birth' className='input-reg' required type='date' onChange={handleInputChange}/>
  </div> 
  <div className="field">
    <label>Telefone</label>
    <InputMask name='phone' className='input-reg' required type='text' placeholder='Número de telefone' mask='(99)99999-9999' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>E-mail</label>
    <input name='email' className='input-reg' required type='email' placeholder='Digite um e-mail' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>Senha</label>
    <input name='password' className='input-reg' required type='password' placeholder='Digite uma senha' maxLength={9} onChange={handleInputChange}/>
  </div>
  <div className='field-buttom'>
  <div className="button">
    <button className='button-reg-page'><Link to='/'>Cancelar</Link></button>
    <button type='submit' onClick={handleFormSubmit} className='button-reg-page'>Salvar</button>
  </div>
  </div>
  </form>
  </div>
    
)}