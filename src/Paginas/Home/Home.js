import React from 'react'
import Experiencias from 'Componentes/Secciones/Experiencias/Experiencias'
import Habilidades from 'Componentes/Secciones/Habilidades/Habilidades'
import Portafolio from 'Componentes/Secciones/Portafolio/Portafolio'
import Presentacion from 'Componentes/Secciones/Presentacion/Presentacion'
import './Home.scss'

export default function Home(){
    return (
        <div>
            <section className='seccionEstandar'> 
                <Presentacion />
            </section>
            <section className='seccionEstandar'>
                <Habilidades />
            </section>
            <section className='seccionEstandar'> 
                <Experiencias />
            </section>
            <section className='seccionEstandar'> 
                <Portafolio />
            </section> 
        </div>
    )
}

