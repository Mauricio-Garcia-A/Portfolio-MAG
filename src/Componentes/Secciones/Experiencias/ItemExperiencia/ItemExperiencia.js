import React, { useState } from 'react';
import LogoExperiencia from '../LogoExperiencia/LogoExperiencia';
import './ItemExperiencia.scss'



export default function ItemExperiencia({posicion, subtitulo, titulo,  descripcion, logo, logoTitulo,  duracion, setEstadoModal, setTituloLogo, setContenidoModal}) {
    const [ desplegado, setDesplegado]= useState(false)

    const handlerOnClick =()=> {
        setEstadoModal(true)
        setTituloLogo(logoTitulo)
        setContenidoModal(descripcion)
      }
    
    return (
        <div className='contenedor-ItemExperiencia'>
            <h1 className={`${posicion}`}>{titulo}</h1>
            <h2 className={`${posicion}`}>{duracion}</h2>
            <button onClick={()=>handlerOnClick()}  className={`${posicion} ${desplegado?'':'desactivado'}`}>LEER MAS</button>
            
            
            <div className='boton-ItemExperiencia' onClick={()=>{setDesplegado(!desplegado)}}>{desplegado?'-':'+'}</div>
            <section className={`seccion-informacion-ItemExperiencia ${posicion}`}>
                <span className={`${posicion} ${desplegado?'':'desactivado'}`}/> 
                <article className={desplegado?'':'desactivado'}>
                    <h3 className={posicion}>{subtitulo}</h3>
                    <p > {descripcion} </p>
                </article>      
            </section >
            <div className={`contenedor-icono-ItemExperiencia ${posicion} ${desplegado?'':'desactivado'}`} onClick={()=>{setDesplegado(!desplegado)}}>
                <LogoExperiencia titulo={logo}  width='80px' />
            </div>
        </div>
    );
}

