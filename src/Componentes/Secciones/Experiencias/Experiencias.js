import { useSimuladorAPI } from 'Hooks/useSimuladorAPI'
import React from 'react'
import './Experiencias.scss'
import LineaDeTiempo from './LineaDeTiempo/LineaDeTiempo'

export default function Experiencias() {
    const {SECCION_EXPERIENCIAS}= useSimuladorAPI()
    return (
        <div className='contenedor-Experiencias'>
            <h1>{SECCION_EXPERIENCIAS.Titulo} </h1>
            <p>{SECCION_EXPERIENCIAS.DescripcionExperiencias}</p>
            <div> 
                <LineaDeTiempo experiencias={SECCION_EXPERIENCIAS.experiencias}/>
            </div>
        </div>
    )
}