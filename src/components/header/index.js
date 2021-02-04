import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
    render(){
        return(
    <div id='header'>
        <h2>{this.props.title}</h2>
    </div>
        
)}}