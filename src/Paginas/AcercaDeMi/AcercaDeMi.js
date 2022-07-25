import React from 'react'
import Descripcion from 'Componentes/Secciones/Descripcion/Descripcion'
import Hobbies from 'Componentes/Secciones/Hobbies/Hobbies'

export default function AcercaDeMi(){
    return (
        <div>
            <section className='seccionEstandar'> 
                <Descripcion />
            </section>
            <section className='seccionEstandar'> 
                <Hobbies />
            </section>
        </div>
    )
}