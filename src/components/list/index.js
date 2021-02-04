import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import moment from 'moment';

export default function Main(props){

const [data, setData] = useState([]);    
const x = window.location.href.split('/');
const id = x[4]

useEffect(() => {
          api.get(`/list/${id}`).then(response => {
              setData(response.data.rows)
              console.log(response.data)
          }).catch(err =>{
            console.log(err)
          })
      }, []);

        return(
          <div id='container'>
          <div id='container-list'>
<table width='100%' cellSpacing="15">
  <thead width='100%'>
    <tr width='100%' className='trow'>
      <th width='20%'>Nome</th>
      <th width='10%'>Idade</th>
      <th width='15%'>Categoria</th>
      <th width='10%'>Tipo</th>
      <th width='10%'>Data</th>
      <th width='15%'>Hora</th>
      <th width='10%'>Data da alta</th>
      <th width='10%'>Sala</th>
    </tr>
  </thead>
<tbody>
{(data.map(entry=>(
    <tr width='100%' key={entry.id} className='trow'>
      <td width='20%' data-label='Nome'>{entry.name}</td>
      <td width='10%' data-label='Idade'>{entry.age}</td>
      <td width='10%' data-label='Categoria'>{entry.category === 'Cirurgia' ? <Link style={{color:'red'}} to={`map/${entry.id}`}>{entry.category}</Link> : entry.category}</td>
      <td width='10%' data-label='Tipo'>{entry.type}</td>
      <td width='15%' data-label='Data'>{moment(entry.date).format("DD/MM/YYYY")}</td>
      <td width='10%' data-label='Hora'>{entry.time}</td>
      <td width='10%' data-label='Data da alta'>{moment(entry.end).format("DD/MM/YYYY")}</td>
      <td width='10%' data-label='Sala'>{entry.room}</td>
    </tr>
  )))}
  </tbody>
</table>
          </div>
          </div>
        )}