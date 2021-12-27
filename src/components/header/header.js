import React from 'react'
import './header.css'
import social from './Constantes';

function Header() {
        
    return (
        <div className='headContent'>
            <div className='social'>
                <a href ="https://facebook.com" target='_blank' rel="noreferrer">{social.face}</a>
                <a href='https://www.linkedin.com/in/ion-iosif-sora-694a57221/' target='_blank' rel="noreferrer">{social.linkedin}</a>

            </div>
            <div>
                <h1>JJ Web Developer</h1>
            </div>
            <div className='portada'></div>
        </div>
    )
}

export default Header;

