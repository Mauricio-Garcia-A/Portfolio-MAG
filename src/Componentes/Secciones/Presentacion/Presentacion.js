import React from 'react'
import './Presentacion.scss'
import SvgUser from './SvgUser'

export default function Presentacion() {
    return (
        <div className='contenedor-Presentacion'>
            <div className='tarjeta-Presentacion'>
                TARJETA DE PRESENTACION
                <br></br>
                <SvgUser width='100px'/>
                <span>Lorem ipsum dolor sit amet.</span><br></br>
            </div>
            <section className='seccion-texto-Presentacion'>
                <h1>SECCION 1: PRESENTACION</h1>
                <p> Lorem ipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint cum odit dolorum non perferendis nihil est consequatur quas. Delectus vitae aut deserunt nisi a iste cupiditate et excepturi exercitationem et consequatur rerum non tempore repudiandae.</p>
            </section>
        </div>
    )
}

