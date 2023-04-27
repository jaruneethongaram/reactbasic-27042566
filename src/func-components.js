import React from 'react'
import './App.css';

//</div><div style={{backgroundColor: '#ccc'}}>
export function Header() {
    const aStyle = {
    display: 'inline-block',
    //color: 'blue',
    margin: '15px',
    textDecoration: 'none',
    backgroundColor:'coral',
    color: '#fff'
    }

    return (
            <div className='S1'>
            <a href=" " style={aStyle}>Home</a> |&nbsp;
            <a href=" " style={aStyle}>About</a> |&nbsp;
            <a href=" " style={aStyle}>Contact</a>
            </div>
    )
    }

export function Content() {
    return (
    <div style={{textAlign: 'center'}}>
    <h2>Hello <br/>React & React Native</h2>
    <br/><br/><br/>
    </div>
    )
}

export const Footer = () => { //Arrow Function
    return (
    <div style={{textAlign: 'center'}}>
    &copy; {new Date().getFullYear()} All rights reserved
    </div>
    )
}