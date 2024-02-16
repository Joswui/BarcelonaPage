import React from 'react'
import Logo  from '../images/logoclub.png'
import Login from '../images/userwhite.png'
import '../styles.css'

export const Header = () => {
    return (
        <div>
            <header className='header'>
                <a href='https://www.fcbarcelona.es/es/' ><img src={Logo} alt='logo del club' className='header-img'></img></a>
                <div className='header-mid'>
                    <p><a href="https://www.fcbarcelona.es/es/" >CLUB</a> </p>
                    <p><a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores' >PRIMER EQUIPO</a></p>
                    <p><a href='https://www.fcbarcelona.es/es/socios/noticias' >SOCIOS</a></p>
                    <p><a href='https://www.fcbarcelona.es/es/entradas/futbol' >MUSEO</a></p>
                    <p><a href='https://store.fcbarcelona.com/es/'>TIENDA</a></p>
                </div>
                <div className='header-login'>
                    <img src={Login} alt='login de usuario' className='img-login'/>
                    <p className='login-p'>Login</p>
                </div>
            </header>
        </div>
    )
}