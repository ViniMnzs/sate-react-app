import React from 'react';
import Header from '../../components/header/index'
import List from '../../components/list/index'

function Main(){
    return(
        <>
        <Header title='Consultas'/>
        <a style={{marginTop:'30px'}} href="https://api.whatsapp.com/send?phone=+5513974076050" target="__blank" rel="noreferrer">
        <svg style={{marginRight:'10px'}} xmlns="http://www.w3.org/2000/svg" 
        width="23.045" height="23.156" 
        viewBox="0 0 23.045 23.156">
        <g transform="translate(-0.25)">
        <path d="M19.938,3.365A11.477,11.477,0,0,0,1.878,17.21L.25,23.156l6.083-1.6a11.462,11.462,0,0,0,5.483,1.4h0A11.479,11.479,0,0,0,19.938,3.365ZM11.821,21.019h0A9.525,9.525,0,0,1,6.963,19.69l-.348-.207-3.61.947.963-3.519-.227-.361a9.537,9.537,0,1,1,8.079,4.469Zm5.231-7.143c-.287-.144-1.7-.837-1.959-.933s-.454-.143-.645.144-.741.933-.908,1.124-.334.215-.621.072a7.831,7.831,0,0,1-2.306-1.423,8.648,8.648,0,0,1-1.595-1.986c-.167-.287,0-.427.126-.585a8.111,8.111,0,0,0,.717-.981.527.527,0,0,0-.024-.5c-.072-.143-.645-1.555-.884-2.129-.233-.559-.469-.483-.645-.492s-.358-.01-.55-.01a1.053,1.053,0,0,0-.765.359,3.216,3.216,0,0,0-1,2.392,5.577,5.577,0,0,0,1.171,2.966,12.78,12.78,0,0,0,4.9,4.329,16.411,16.411,0,0,0,1.635.6,3.93,3.93,0,0,0,1.806.114,2.954,2.954,0,0,0,1.935-1.363,2.4,2.4,0,0,0,.167-1.363C17.53,14.092,17.339,14.02,17.052,13.877Zm0,0"
        fill="#00af80" fill-rule="evenodd">
        </path></g></svg>Entre em contato conosco!</a>
        <List/>
        </>
    )
}

export default Main;