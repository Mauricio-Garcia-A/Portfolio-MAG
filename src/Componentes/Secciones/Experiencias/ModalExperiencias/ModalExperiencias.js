import React from 'react'
import LogoExperiencia from '../LogoExperiencia/LogoExperiencia'
import './ModalExperiencias.scss'


const IconoCerrar = () =>{
    return(
        <svg width="100%" height="100%" fill="currentColor" className='bi bi-x' viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    )
}

export default function ModalExperiencias({titulo, setEstadoModal, tituloLogo, contenidoModal }) {


    return (
        <>
                <div className='fondoModal'>
                    <div className='contenedorEstandarProducto contenedorVentanaModal'>
                        <button className='botonCerrarModal' onClick={()=>setEstadoModal(false)}>
                            <IconoCerrar />
                        </button>
                        <span className='tituloModal'>{titulo}</span>
                        <div >
                            <LogoExperiencia titulo={tituloLogo} width='300px' />
                            <p>{contenidoModal}</p>
                            
                        </div>
                        
                    </div>
                </div>
        </>
    );
}

