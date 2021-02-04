import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import moment from 'moment';

export default function Main(props){

const data = [
  {
    age: 45,
    category: "Cirurgia",
    date: "2021-02-03T03:00:00.000Z",
    end: "2021-02-10T03:00:00.000Z",
    id: "1083327",
    name: "Andreia Marques",
    predate: "2021-02-03T03:00:00.000Z",
    room: "10",
    time: "07:20:00",
    type: "Miomectomia",
  },
  {
  age: 45,
  category: "Consulta",
  date: "2021-02-02T03:00:00.000Z",
  end: null,
  id: "124588",
  name: "Andreia Marques",
  predate: null,
  room: "2",
  time: "07:30:00",
  type: "Ginecologista",
  }
]    
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
      <td width='10%' data-label='Categoria'>{entry.category === 'Cirurgia' ? <Link style={{color:'red'}} to='map'>{entry.category}</Link> : entry.category}</td>
      <td width='10%' data-label='Tipo'>{entry.type}</td>
      <td width='15%' data-label='Data'>{moment(entry.date).format("DD/MM/YYYY")}</td>
      <td width='10%' data-label='Hora'>{entry.time}</td>
      <td width='10%' data-label='Data da alta'>{entry.end ? moment(entry.end).format("DD/MM/YYYY") : '-'}</td>
      <td width='10%' data-label='Sala'>{entry.room}</td>
    </tr>
  )))}
  </tbody>
</table>
          </div>
          </div>
        )}