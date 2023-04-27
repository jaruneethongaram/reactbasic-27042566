
import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'


export default function Router1() {
    const navStyle = {
        backgroundColor: '#ced', 
        padding: '7px', 
        textAlign: 'center'
   }

    const linkStyle = {
        display: 'inline-block',
        color: 'blue',
        textDecoration: 'none',
    }

    return (
        <BrowserRouter>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>Homexx</Link> |&nbsp; 
                <Link to="/About" style={linkStyle}>Aboutxx</Link> |&nbsp;
                <Link to="/Contact" style={linkStyle}>Contact Usxx</Link>
            </nav>
        </BrowserRouter>
    )
}