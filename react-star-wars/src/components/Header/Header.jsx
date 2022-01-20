import React from 'react';
import Nav from './Nav/Nav'
import './Header.css'
export default function Header(props) {
    return(
        <div className="Header">
            <h1 className="header-title">Starship Homework</h1>
            <Nav/>
        </div>
        
    )
}