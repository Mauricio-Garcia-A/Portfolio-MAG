
import React from 'react'
import Logo from 'Componentes/Logotipo/Logo'
import { useSimuladorAPI } from 'Hooks/useSimuladorAPI'
import pdf from 'Documentos/CV-Garcia Mauricio.pdf'
import IconoDescagaPDF from 'Imagenes/icono-descagaPDF.png'


import './Contacto.scss'
import IconoGeneral from 'Componentes/Iconos/IconoGeneral'

export default function Contacto() {
    const { SECCION_CONTACTO } = useSimuladorAPI()

    return (
        <div className='contenedor-Contacto'>
            <h1>FORMAS <span>DE CONTACTO</span> </h1>
            <section> 
                <Logo />
                <h2>Reces Sociales</h2>
                { SECCION_CONTACTO.redesSociales.map((redSocial,i)=>{
                    return ( 
                        <a href={redSocial.link}  key={`redSocial${i}`}>
                            <IconoGeneral titulo={redSocial.icono}  width='30px'/>
                        </a >
                    )
                    
                        
                })}
            </section>
            <section>
                { SECCION_CONTACTO.formasDeContacto.map((FDC,i)=>{
                    return (
                        <div  key={`FDC${i}`}>
                            <h2> {FDC.titulo}</h2>
                            <IconoGeneral titulo={FDC.icono}  width='30px'/>
                            <span>{FDC.descripcion}</span>                            
                        </div>
                    )
                })}
            </section>
            <section>
                <div className='contenedor-cv-Contacto'>
                    <a href={pdf} >
                        <div className='bloqueador-CV'>
                            <span>VER CV</span>
                        </div>
                        <embed src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`} title="CV"  style={{ overflow:'hidden !important'}}>
                        </embed>
                    </a>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Garcia Mauricio.pdf" className='botonDescargaCV-Contacto'> 
                        <img src={IconoDescagaPDF } alt='pdf' />
                        Descarga CV
                    </a>                  
                </div>

            </section>

        </div>
    )
}