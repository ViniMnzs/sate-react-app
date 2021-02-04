import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Formik } from "formik";
import './style.css'

export default function UpdateStudent(props){

  const [fields, setFields] = useState({
    id: '',
    name: '',
    email: '',
    cpf: '',
  });

  useEffect(() => {
        axios.get(`http://localhost:3001/listid`).then(response=> {
           setFields(response.data.rows)
        })
    }, []);


  
  function handleInputChange(event){
    fields[event.target.name] = event.target.value;
    setFields(fields)
  }


    return (
                      <Formik
                        initialValues={{
                            id:fields.id,
                            name:fields.name,
                            cpf:fields.cpf,
                            email:fields.email
                        }}
                        enableReinitialize={true}
                        onSubmit={(  
                          async(event)=>{
                            event.preventDefault();
                            axios.post('http://localhost:3001/registration', fields)
                            .then((response)=>{
                                alert('registrado com sucesso');
                                window.location.href = "/";
                            })
                            .catch((err)=>{
                                alert(err);
                                window.location.href = "/";
                            })
                          })}>
                        {({
                            handleChange,
                            handleSubmit,
                            values,
                            handleBlur,
                            setFieldValue,
                            isSubmitting,
                        }) => (
    <div className="card">
        <form onSubmit={handleSubmit}>
                <h1 align='center'>Editar Dados</h1>
                <input name='cpf' type="text" readOnly value={values.cpf} onChange={handleInputChange}/>
                <input name='id' type="text" readOnly value={values.id} onChange={handleInputChange}/>
                <br/>
                <input onChange={handleChange} disabled={isSubmitting} value={values.name} name='name' type="text"  />
                <input onChange={handleChange} disabled={isSubmitting} value={values.email} name='email' type="text" />
                <br/>
                <div id='btn'>
                <button id='btn-back'><Link width='100%' to='/'>Voltar</Link></button>
                <button id='btn-submit' onClick={handleSubmit}>Salvar</button>
                </div>
        </form>        
    </div>
                        )}
    </Formik>
    );}