import React from 'react'
import {NavLink} from "react-router-dom"
import './BarraDeNavegacion.scss'

export default function BarraDeNavegacion(){
    return (
        <nav className='contenedor-BarraDeNavegacion'>
            <div className='logo-BarraDeNavegacion'> 
                <span>LOGO </span>
            </div>
            <div>
                <NavLink to="/" className='link-BarraDeNavegacion'>HOME</NavLink>
                <NavLink to="/about-me" className='link-BarraDeNavegacion'>Acerca de mi</NavLink>
                <button className='link-BarraDeNavegacion'>contacto</button>
            </div>
        </nav>
    )
}