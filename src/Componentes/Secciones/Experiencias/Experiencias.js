
import React, { useState } from 'react'
import './Experiencias.scss'
import LineaDeTiempo from './LineaDeTiempo/LineaDeTiempo'
import { useSimuladorAPI } from 'Hooks/useSimuladorAPI'
import ModalExperiencias from './ModalExperiencias/ModalExperiencias'

export default function Experiencias() {
    const {SECCION_EXPERIENCIAS}= useSimuladorAPI()
    const [estadoModal, setEstadoModal]= useState(false)
    const [tituloLogo, setTituloLogo]= useState('')
    const [contenidoModal, setContenidoModal]= useState('sssss')

    return (
        <div className='contenedor-Experiencias seccionEstandar'>
            <h1>Formación <span>Profesional</span></h1>
            <p>{SECCION_EXPERIENCIAS.DescripcionExperiencias}</p>
            <br />

            {estadoModal && <ModalExperiencias 
                    titulo="Formación Profesional" 
                    setEstadoModal={setEstadoModal}
                    tituloLogo={tituloLogo}
                    contenidoModal={contenidoModal}
             />}
            <div> 
                <LineaDeTiempo 
                    experiencias={SECCION_EXPERIENCIAS.experiencias} 
                    setEstadoModal={setEstadoModal}
                    setTituloLogo={setTituloLogo}
                    setContenidoModal={setContenidoModal}
                />
            </div>
        </div>
    )
}