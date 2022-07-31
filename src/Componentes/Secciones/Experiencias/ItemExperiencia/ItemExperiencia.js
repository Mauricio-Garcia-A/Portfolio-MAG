import React, { useState } from 'react';
import LogoExperiencia from '../LogoExperiencia/LogoExperiencia';
import './ItemExperiencia.scss'


export default function ItemExperiencia({posicion, subtitulo, titulo,  descripcion, logo, duracion}) {
    const [ desplegado, setDesplegado]= useState(false)

    return (
        <div className='contenedor-ItemExperiencia'>
            <h1 className={`${posicion}`}>{titulo}</h1>
            <h2 className={`${posicion}`}>{duracion}</h2>
            <div className='boton-ItemExperiencia' onClick={()=>{setDesplegado(!desplegado)}}>{desplegado?'-':'+'}</div>
            <section className={`seccion-informacion-ItemExperiencia ${posicion}`}> 
                <h3 className={`${posicion} ${desplegado?'':'desactivado'}`}>{subtitulo}</h3>
                <span className={`${posicion} ${desplegado?'':'desactivado'}`}/>
                <p className={desplegado?'':'desactivado'}> {descripcion} </p>
            </section >
            <div className={`contenedor-icono-ItemExperiencia ${posicion} ${desplegado?'':'desactivado'}`}>
                <LogoExperiencia titulo={logo}  width='80px' />
            </div>
        </div>
    );
}

