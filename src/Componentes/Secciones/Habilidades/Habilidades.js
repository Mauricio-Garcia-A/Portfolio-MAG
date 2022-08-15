import IconoDev from 'Componentes/Iconos/IconoDev'
import IconoUx from 'Componentes/Iconos/IconoUx'
import { useSimuladorAPI } from 'Hooks/useSimuladorAPI'
import React from 'react'
import DifereciacionHabilidades from './DifereciacionHabilidades/DifereciacionHabilidades'
import Grafico from './Grafico'

import './Habilidades.scss'


export default function Habilidades() {
    const {SECCION_HABILIDADES}=useSimuladorAPI()
    return (
        <div className='contenedor-Habilidades'>
            <h1>{SECCION_HABILIDADES.Titulo}</h1>
            <p>{SECCION_HABILIDADES.descripcionSeccion}</p>
            <DifereciacionHabilidades 
                imagen1={SECCION_HABILIDADES.ImagenHabilidad1} 
                imagen2={SECCION_HABILIDADES.ImagenHabilidad2} 
                titulo1={SECCION_HABILIDADES.tituloHabilidad1} 
                descripcion1={SECCION_HABILIDADES.descripcionHabilidad1} 
                titulo2={SECCION_HABILIDADES.tituloHabilidad2} 
                descripcion2={SECCION_HABILIDADES.descripcionHabilidad2}
            />
            <div className='contenedor-seccion-tecnologias-Habilidades'>
                <div>DEV</div>
                    <Grafico porcentaje={30}/>
                <div>DESIG</div>  
            </div>
            <div className='contenedor-seccion-tecnologias-Habilidades'>
                <IconoDev titulo='html5' width='80px' />
                <IconoDev titulo='css3' width='80px'/>
                <IconoDev titulo='reactjs' width='80px'/>
                <IconoDev titulo='sass' width='80px'/>
                <IconoDev titulo='angular' width='80px'/>
                <IconoDev titulo='angularjs' width='80px'/>
                <IconoDev titulo='vuejs' width='80px'/>
                <IconoDev titulo='github' width='80px'/>
                <IconoDev titulo='js' width='80px'/>
                <IconoDev titulo='javascript' width='80px'/>
                <IconoDev titulo='nodejs' width='80px'/> 
                <IconoDev titulo='bootstrap' width='80px'/> 
                <IconoUx titulo='coreldraw' width='80px' /> 
                <IconoUx titulo='photoshop' width='80px' />
            </div>
              
            SKILLs: Habilidad 01 - Habilidad 02 - Habilidad 03 - Habilidad 04 - Habilidad 05 - Habilidad 06 - Habilidad 07 
        </div>
    )
}