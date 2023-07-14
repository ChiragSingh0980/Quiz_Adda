import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import './Footer.css';
import logoImg from '../assets/logo.png'

const Footer = () => {

    return (
        <div className='footer-main' style={{padding: "20px"}}>
        <div className='footer-data'>
        <div className='footer-left'>
            <img className='img-logo' src={logoImg}></img>
            </div>
        <div className='footer-rigth'>
            <p>Our Soical Links</p>
            <div className='footer-social-links'>
                <AiOutlineLinkedin />
                <AiOutlineInstagram />
                <AiOutlineFacebook />
            </div>
        </div>
        </div>
        <hr/>
        <div>
        <p>Thanks for visiting our online quiz portal</p>
        <p style={{margin: "0px"}}>CopyRights@All Rights Reserved</p>
        </div>
        </div>
    );
};

export default Footer;