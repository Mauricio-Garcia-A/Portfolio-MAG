import React from 'react'
import Descripcion from 'Componentes/Secciones/Descripcion/Descripcion'
import Hobbies from 'Componentes/Secciones/Hobbies/Hobbies'

export default function AcercaDeMi(){
    return (
        <div>
            <section> 
                <Descripcion />
            </section>
            <section> 
                <Hobbies />
            </section>
        </div>
    )
}