import { Button } from '@material-ui/core';
import React from 'react';
import "./Navbar.css";

const Navbar = () => {

    return (
        <div className='nav-main'>
         <div className='nav-head'>
           <h1 className='nav-heading'><b>Quiz-</b>ADDA</h1>
         </div>
         <div>
         <a href='#login-card' className='nav-link'><button className='nav-btn'>Login</button></a>
         </div>
        </div>
    );
}

export default Navbar; 