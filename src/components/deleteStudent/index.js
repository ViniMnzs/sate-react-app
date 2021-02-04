import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

export default function DeleteStudent(props){
    
    const id = parseInt(props.match.params.id);

    function handleRemovePost(){
        console.log(id)
        axios.delete(`http://localhost:3001/remove/${id}`).then(res => {
        alert('usuario apagado com sucesso')
        window.location.href = "/process";
        })
        .catch(err=>{
        alert(err)
        window.location.href = "/";
        })
    }

    return (
        <div id='delete-div'>
            <h1 className='msg'>Remover cadastro {id} ?</h1>
            <div id='button-del-div'>
                <button className='del-page-one'>
                <Link to='/'>
                Cancelar
                </Link>
                </button>
                <button onClick={handleRemovePost} className='del-page-two'>
                    Excluir
                </button>
            </div>
        </div>
    );
}