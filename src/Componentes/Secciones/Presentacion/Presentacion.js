import React, { useState } from 'react'
import { useSimuladorAPI } from 'Hooks/useSimuladorAPI'
import Tarjeta from './Tarjeta/Tarjeta'
import pdf from 'Documentos/CV-Garcia Mauricio.pdf'
import IconoGeneral from 'Componentes/Iconos/IconoGeneral'
import IconoDescagaPDF from 'Imagenes/icono-descagaPDF.png'

import './Presentacion.scss'



export default function Presentacion() { 
    const { SECCION_PRESENTACION }=useSimuladorAPI()

    const [colorTarjeta, setColorTarjeta]=useState('rgba(67, 91, 162, 0.4)')


    return (
        <div className='contenedor-Presentacion'>
            <Tarjeta nombreYapellido={SECCION_PRESENTACION.NombreYApellido} imagenPerfil={SECCION_PRESENTACION.ImagenPefil} estudio={SECCION_PRESENTACION.Estudio} nacionalidad={SECCION_PRESENTACION.Nacinalidad} iconoBandera={SECCION_PRESENTACION.IconoBandera} colorTarjeta={colorTarjeta}/>
            <section className='seccion-texto-Presentacion'>
                <div> 
                    <svg viewBox="0 0 1000 1000" xmlSpace="preserve" ><path d="M587.4 500 238 150.6c-32.2-32.2-32.2-84.3 0-116.4C270.2 2 322.3 2 354.4 34.2L762 441.8c32.2 32.2 32.2 84.3 0 116.4L354.4 965.9c-32.2 32.2-84.3 32.1-116.4 0-32.2-32.2-32.2-84.3 0-116.4L587.4 500z" /> </svg>
                    <h1>{SECCION_PRESENTACION.Titulo}</h1>  
                    <svg viewBox="-900 -200 500 1000" xmlSpace="preserve" ><path style={{transform:'rotate(110deg)'}} d="M908.3 418.3c45.1 0 81.7 36.6 81.7 81.7s-36.6 81.7-81.7 81.7H91.7C46.6 581.7 10 545.1 10 500s36.6-81.7 81.7-81.7h816.6z" /></svg>
                    <svg viewBox="0 0 1000 1000" xmlSpace="preserve" ><path d="M587.4 500 238 150.6c-32.2-32.2-32.2-84.3 0-116.4C270.2 2 322.3 2 354.4 34.2L762 441.8c32.2 32.2 32.2 84.3 0 116.4L354.4 965.9c-32.2 32.2-84.3 32.1-116.4 0-32.2-32.2-32.2-84.3 0-116.4L587.4 500z" /> </svg>
                </div>
                <p><b>{'< HOLA MUNDO /> '}</b>{SECCION_PRESENTACION.Descripcion}</p>
                <p><b>+{SECCION_PRESENTACION.AñosDeExperiencia}</b> años de experiencia en IT</p>
                <p>Me considero una persona:</p>
                <ul>
                    {SECCION_PRESENTACION.CaracteristicasPersonales.map((caracteristica, i)=>{
                        return (<li key={`listaCaracteristica${i}`} onClick={()=>setColorTarjeta(caracteristica.colorFondo)}>{caracteristica.titulo}</li>)
                    })}
                </ul>
                <section className='seccion-contacto-Presentacion'>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Garcia Mauricio.pdf" className='botonDescargaCV'> 
                        <img src={IconoDescagaPDF } alt='pdf' />
                        Descarga CV
                    </a>
                    <a  href='https://www.linkedin.com/in/mauricio-ariel-garcía' className='botonContacto-Presentacion'> <IconoGeneral titulo='linkedin' width='40px'/></a>
                    <a  href='https://www.linkedin.com/in/mauricio-ariel-garcía' className='botonContacto-Presentacion'> <IconoGeneral titulo='gmail' width='40px'/></a>
                </section>
                
            </section>
        </div>
    )
}

