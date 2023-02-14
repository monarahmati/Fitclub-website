import React from 'react';
import'./Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkdin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <hr/>
            <div className='footer'>
                <div className='social-links'>
                <img src={Github} alt='img'  />
                <img src={Instagram}  alt='img' />
                <img src={Linkdin}  alt='img' />
                </div>
                
                <div className='Logo-f'>
                    <img src={Logo}  alt='img' />
                </div>
            </div>

            <div className='blur blur-f-1'></div>
            <div className='blur blur-f-2'></div>
        </div>
    );
};

export default Footer;