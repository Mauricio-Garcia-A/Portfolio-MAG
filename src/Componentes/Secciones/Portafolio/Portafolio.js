import React from 'react'
import { useSimuladorAPI } from 'Hooks/useSimuladorAPI'

import ItemProyecto from './ItemProyecto/ItemProyecto'
import './Portafolio.scss'

export default function Portafolio() {
    const { SECCION_PORTAFOLIO }= useSimuladorAPI()

    return (
        <div className='contenedor-Portafolio'>
            <h1>{SECCION_PORTAFOLIO.Titulo} </h1>
            <div className='contenedor-proyectos-Portafolio' >
                {SECCION_PORTAFOLIO.proyectos.map((proyecto,i)=>{
                    let posicionItem='derecha'
                    if ((i%2)===0) {
                        posicionItem='izquierda'
                    }
                    return(
                        <ItemProyecto
                            key={`ItemProyecto-${i}`}
                            titulo={proyecto.titulo} 
                            descripcion={proyecto.descripcion} 
                            posicionItem={posicionItem} 
                            imagenCelular={proyecto.imagenMovil} 
                            imagenNavegador={proyecto.imagenBrowser}
                            tituloHttp={proyecto.tituloHttp}
                            logo={proyecto.logo}
                            colorFondo={proyecto.colorFondo}
                         />
                    )
                })}
            </div>
        </div>
    )
}