import React, {useEffect, useState} from 'react';
import Header from '../../components/header'
import './style.css';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import moment from 'moment';

function Process(){
    const [fields, setFields] = useState({
        date: '',
        name: '',
        category: '',
        age: '',
        room: '',
        end: '',
        time: '',
        type:'',
        predate:'',
      });
    
    function handleInputChange(event){
      fields[event.target.name] = event.target.value;
      setFields(fields)
      console.log(fields)
    }
    
    async function handleFormSubmit(event){
      event.preventDefault();
      api.post('/create', fields)
      .then((response)=>{
          alert('registrado com sucesso');
          window.location.href = "/process";
      })
      .catch((err)=>{
          alert('Algo deu errado, tente novamente mais tarde');
          //window.location.href = "/";
      })
    }

    const [data, setData] = useState([]);    
    const [paciente, setPaciente] = useState([]);

        useEffect(() => {
          api.get(`/listProcess`).then(response => {
              setData(response.data.rows)
              console.log(response.data)
          }).catch(err =>{
            alert('algo errado aconteceu, tente novamente')
            console.log(err)
          })

          api.get(`/list`).then(response => {
            setPaciente(response.data.rows)
            console.log(response.data)
        }).catch(err =>{
          console.log(err)
        })
      }, []);
    
    return(
        <>
        <Header title='Cadastro de procedimento' />
        <div id="form-page">
  <form onSubmit={handleFormSubmit}>
  <div className="field">
    <label>Paciente</label>
    <select className='input-reg' name='name' onChange={handleInputChange}>
        <option value=''></option>
        {
        paciente.map(index=>{return(
            <option key={index.id} style={{color:'#000'}} value={index.name}>{index.name}</option>
        )})
        }
    </select>
    </div>
<div className="field">
    <label>Idade</label>
    <input name='age' className='input-reg' required type='text' onChange={handleInputChange}/>
  </div> 
  <div className="field">
    <label>Data Agendamento</label>
    <input name='predate' className='input-reg' required type='date' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>Data Cirurgia</label>
    <input name='date' className='input-reg' required type='date' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>Horário</label>
    <input name='time' className='input-reg' required type='time' onChange={handleInputChange}/>
  </div>
  <div className="field">
    <label>Procedimento</label>
    <select className='input-reg' name='category' onChange={handleInputChange}>
        <option  value=''></option>
        <option value='Exame'>Exame</option>
        <option  value='Consulta'>Consulta</option>
        <option value='Cirurgia'>Cirurgia</option>
    </select>
  </div>   
    <div className="field">
        <label>Tipo</label>
        <input name='type' className='input-reg' required type='text' onChange={handleInputChange}/>
    </div>
  <div className="field">
    <label>Sala</label>
    <input name='room' className='input-reg' required type='text' onChange={handleInputChange}/>
  </div> 
    <div className="field">
        <label>Data da Alta</label>
        <input name='end' dateFormat="dd/MM/yyyy" className='input-reg' required type='date' onChange={handleInputChange}/>
    </div>
  <div className='field-buttom'>
  <div className="button">
    <button className='button-reg-page'><Link to='/'>Sair</Link></button>
    <button type='submit' onClick={handleFormSubmit} className='button-reg-page'>Salvar</button>
  </div>
  </div>
  </form>
  </div>
  <div id='container-list'>
<table width='95%' cellSpacing="15">
  <thead width='100%'>
    <tr width='100%' className='trow'>
      <th width='10%'>Nome</th>
      <th width='5%'>Idade</th>
      <th width='10%'>Categoria</th>
      <th width='10%'>Tipo</th>
      <th width='10%'>Agendamento</th>
      <th width='10%'>Data</th>
      <th width='5%'>Hora</th>
      <th width='10%'>Data da alta</th>
      <th width='5%'>Sala</th>
      <th width='2%'>Ações</th>
    </tr>
  </thead>
<tbody>
{(data.map(entry=>(
    <tr width='100%' key={entry.id} className='trow'>
      <td width='15%' data-label='Nome'>{entry.name}</td>
      <td width='5%' data-label='Idade'>{entry.age}</td>
      <td width='10%' data-label='Categoria'>{entry.category === 'Cirurgia' ? <Link style={{color:'red'}} to={`map/${entry.id}`}>{entry.category}</Link> : entry.category}</td>
      <td width='10%' data-label='Tipo'>{entry.type}</td>
      <td width='10%' data-label='Agendamento'>{entry.predate === null ? '-' : moment(entry.predate).format("DD/MM/YYYY")}</td>
      <td width='10%' data-label='Data'>{entry.date === null ? '-' : moment(entry.date).format("DD/MM/YYYY")}</td>
      <td width='5%' data-label='Hora'>{entry.time}</td>
      <td width='10%' data-label='Data da alta'>{entry.end === null ? '-' : moment(entry.end).format("DD/MM/YYYY")}</td>
      <td width='5%' data-label='Sala'>{entry.room}</td>
      <td width='2%' data-label='Sala'><button id='button-remove'><Link to={`/remove/${entry.id}`} >Excluir</Link></button></td>
    </tr>
  )))}
  </tbody>
</table>
          </div>
        </>
    )
}

export default Process;