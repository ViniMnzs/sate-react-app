import React, {useEffect, useState} from 'react';
import Header from '../../components/header'
import './style.css';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import api from '../../services/api';
import moment from 'moment';

function Mapa(){
    return(
        <>
  <Header title='Mapa da Cirurgia e CheckIn' />
  <div id='container-list'>
<table width='85%' cellSpacing="15">
  <thead width='100%'>
    <tr width='100%' className='trow'>
      <th width='5%'>Data de Internação</th>
      <th width='5%'>Hora</th>
      <th width='5%'>Data de Alta prevista</th>
      <th width='10%'>Nome</th>
      <th width='5%'>Idade</th>
      <th width='10%'>Nome da Cirurgia</th>
      <th width='5%'>Sala da Cirurgia</th>
      <th width='15%'>Apresentar</th>
    </tr>
  </thead>
<tbody>
    <tr width='100%' className='trow'>
      <td width='5%' data-label='Data de Internação'>05/02/2021</td>
      <td width='5%' data-label='Hora'>21:00</td>
      <td width='5%' data-label='Data de Internação'>07/02/2021</td>
      <td width='10%' data-label='Nome'>Andreia Marques</td>
      <td width='5%' data-label='Idade'>45</td>
      <td width='10%' data-label='Nome da Cirurgia'>Miomectomia</td>
      <td width='5%' data-label='Sala da Cirurgia'>10</td>
      <td width='15%' data-label='Levar'>Doc c/ Foto - Prod Higiene Pessoal</td>
    </tr>
  </tbody>
</table>
          </div>
        </>
    )
}

export default Mapa;