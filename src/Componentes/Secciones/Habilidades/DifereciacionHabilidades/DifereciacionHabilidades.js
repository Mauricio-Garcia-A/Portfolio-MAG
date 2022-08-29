import IconoDev from 'Componentes/Iconos/IconoDev';
import IconoUx from 'Componentes/Iconos/IconoUx';
import React, { useEffect, useState } from 'react';
import './DifereciacionHabilidades.scss'
import FondoDesign from './fondosSVG/FondoDesign';
import FondoDev from './fondosSVG/FondoDev';


export default function DifereciacionHabilidades({imagen1, imagen2, titulo1, descripcion1, titulo2, descripcion2, iconos1, iconos2}) {
    const [cambioTamano, setCambioT]=useState(false)

    window.addEventListener("load", function() {
        window.dispatchEvent(new Event('resize'));
    });
    window.onresize = function() {
        setCambioT(!cambioTamano)
    }

    useEffect(()=>{
        const contenedorDH = document.getElementById('contenedor-DH')   
        const seccion1 = document.getElementById('seccion-uno') 
        const selector = document.getElementById('selector-posicion') 

        const {width} = contenedorDH.getBoundingClientRect()
        const mitadAncho = width/2
        seccion1.style = `clip: rect(0px, ${mitadAncho}px, auto, auto);`
        selector.style = `left:${mitadAncho-31}px;`

        contenedorDH.addEventListener("click", event =>{
            const {offsetX} = event
            seccion1.style = `clip: rect(0px, ${offsetX}px, auto, auto);` 
            selector.style = `left:${offsetX-31}px;`
        })

        contenedorDH.addEventListener('mouseleave', ()=>{
            seccion1.style = `clip: rect(0px, ${mitadAncho}px, auto, auto);`
            selector.style = `left:${mitadAncho-31}px;`
        })

    },[cambioTamano])

    return (
        <div id='contenedor-DH' className='contenedor-DifereciacionHabilidades'>
            <section className='seccion-DifereciacionHabilidades seccion-dos-DifereciacionHabilidades' >  
               <div className='contenedor-informacion-DifereciacionHabilidades'>
                    <div className='informacion-DifereciacionHabilidades'>
                        <h1>{titulo2}</h1>
                        <p>{descripcion2}</p>
                    </div>
                    <div className='tecnologias-DifereciacionHabilidades'>
                        {iconos2.map((icono, i)=>{
                           return <IconoUx key={`iconos-desig-${i}`} titulo={icono} width='80px'/>
                        })}
                    </div>
                </div> 
                <FondoDesign className='fondoDH-Design'/>
                <img src={imagen2} alt='img' className='imagen-DifereciacionHabilidades' />
            </section>
            <section id='seccion-uno' className='seccion-DifereciacionHabilidades seccion-uno-DifereciacionHabilidades' >
                <div className='contenedor-informacion-DifereciacionHabilidades'>
                    <div className='informacion-DifereciacionHabilidades'>
                        <h1>{titulo1}</h1>
                        <p>{descripcion1}</p>
                    </div>
                    <div className='tecnologias-DifereciacionHabilidades'>
                        {iconos1.map((icono, i)=>{
                           return <IconoDev key={`iconos-dev-${i}`} titulo={icono} width='80px'/>
                        })}
                    </div>
                </div>
                <FondoDev className='fondoDH-Dev' />
                <img src={imagen1} alt='img' className='imagen-DifereciacionHabilidades'/>
            </section>
            <div className='bolqueador-DifereciacionHabilidades'>
                <div id='selector-posicion'>
                    <span ></span>
                    <span>◄ ►</span>
                    <span></span>                    
                </div> 
            </div>
        </div>
    )
}