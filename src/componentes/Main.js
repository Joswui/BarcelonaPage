import React from 'react'
import Portero from '../images/01-MARC-ANDRE_TER_STEGEN.webp'
import Cancelo from '../images/jugador_fitxa-cancelo.webp'
import Araujo from '../images/04-RONALD_ARAUJO_.webp'
import Balde from '../images/mini_28-BALDE.webp'
import Gavi from '../images/30-GAVI_.webp'
import Gundogan from '../images/jugador_fitxa-gundogan.webp'
import Frenkie from '../images/21-FRENKIE_DE_JONG.webp'
import Pedri from '../images/08-PEDRI.webp'
import Ferran from '../images/11-FERRAN_TORRES.webp'
import Vitor from '../images/19-VITOR_ROQUE.webp'
import Joao from '../images/jugador_fitxa-felix.webp'


export const Main = () => {
    return (
        <main>
            <div className='portero'>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/11072/marc-andre-ter-stegen'><img src={Portero} alt='portero del club' ></img></a>
            </div>
            <div className='defense'>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/5051/joao-pedro-cavaco-cancelo'><img src={Cancelo} alt='Joao Cancelo'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/66133/ronald-araujo'><img src={Araujo} alt='Ronald Araujo'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/68906/alejandro-balde'><img src={Balde} alt='Alejandro Balde'/></a>
            </div>
            <div className='mid'>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/116719/pablo-martin-paez-gavira'><img src={Gavi} alt='Gavi'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/5101/ilkay-gundogan'><img src={Gundogan} alt='Ilkay Gündogan'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/16291/frenkie-de-jong'><img src={Frenkie} alt='Frenkie de Jong'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/70486/pedro-gonzalez-lopez'><img src={Pedri} alt='Pedri'  /></a>
            </div>
            <div className='front'>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/43098/ferran-torres'><img src={Ferran} alt='Ferran Torres'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/144035/vitor-hugo-roque-ferreira'><img src={Vitor} alt='Vitor Roque'/></a>
                <a href='https://www.fcbarcelona.es/es/futbol/primer-equipo/jugadores/50856/joao-felix-sequeira'><img src={Joao} alt='Joao Felix'/></a>
            </div>
        </main>
    )
}
