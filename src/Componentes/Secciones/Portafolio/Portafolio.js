import React from 'react'
import './Portafolio.scss'

export default function Portafolio() {
    return (
        <div className='contenedor-Portafolio'>
            <h1>SECCION 4: PORTFOLIO DE PROYECTOS </h1>

            <div className='contenedor-proyecto-Portafolio'> 
                <div className='imagen-proyecto-Portafolio'> IMAGEN PROYECTO </div>
                <div className='texto-proyecto-Portafolio'>
                    <h2>Proyecto 1</h2>
                    <p> Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint cum odit dolorum non perferendis nihil est consequatur quas. Delectus vitae aut deserunt nisi a iste cupiditate</p>
                </div>
            </div>
            <div className='contenedor-proyecto-Portafolio'> 
                <div className='imagen-proyecto-Portafolio'> IMAGEN PROYECTO </div>
                <div className='texto-proyecto-Portafolio'>
                    <h2>Proyecto 2</h2>
                    <p> Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint cum odit dolorum non perferendis nihil est consequatur quas. Delectus vitae aut deserunt nisi a iste cupiditate</p>
                </div>
            </div>
        </div>
    )
}