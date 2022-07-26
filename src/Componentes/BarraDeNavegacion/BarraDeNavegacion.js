import Logo from 'Componentes/Logotipo/Logo'
import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import './BarraDeNavegacion.scss'
import BotonDesplegable from './BotonDesplegable/BotonDesplegable'

export default function BarraDeNavegacion(){
    const [menuDesplegado, setMenuDespegado] = useState(false) 
    
    return (
        <nav className='contenedor-BarraDeNavegacion'>
            <div className='contenedor-logo-BarraDeNavegacion'>
                <Logo colorFigura2='blue' />
            </div>
            <div className={`contenedor-link-BarraDeNavegacion ${menuDesplegado ? "" :"menu-desactivo"}`} onClick={()=>{setMenuDespegado(false)}}>
                <NavLink to="/" className='link-BarraDeNavegacion'>PORTFOLIO</NavLink>
                <NavLink to="/about-me" className='link-BarraDeNavegacion'>ACERCA DE MI</NavLink>
                <button className='boton-contacto-BarraDeNavegacion'>CONTACTO</button>
            </div>
            <div className='contenedor-boton-desplegable-BarraDeNavegacion' onClick={()=>{setMenuDespegado(!menuDesplegado)}}>
                <BotonDesplegable estadoDesplegado={menuDesplegado} />
            </div>
        </nav>
    )
}