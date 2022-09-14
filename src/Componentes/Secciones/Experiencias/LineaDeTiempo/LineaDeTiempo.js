import React from 'react';
import ItemExperiencia from '../ItemExperiencia/ItemExperiencia';

import './LineaDeTiempo.scss'


export default function LineaDeTiempo({experiencias, setEstadoModal, setTituloLogo, setContenidoModal}) {

    return (
        <div>
            <div className='contenedor-barra-LineaDeTiempo'>        
                {experiencias.map((opcion,i)=>{ 
                    let posicionItem='derecha'
                    let primeraPosicion=false
                    let ultimaPosicion=false
                    
                    if ((i%2)===0) {
                        posicionItem='izquierda'
                    }
                    if ( i ===0) {
                        primeraPosicion=true
                    }
                    if ( i ===4) {
                        ultimaPosicion=true
                    }

                    return(
                        <ul key={'experiencia'+i}>
                            {primeraPosicion && <li className='primerItem'><span /></li>}            
                            <li className='interseccion-seccion-LineaDeTiempo'/>
                            <li/>
                            <li/>
                            <li className='items-barra-LineaDeTiempo'>
                                <ItemExperiencia 
                                    posicion={posicionItem} 
                                    titulo={opcion.titulo} 
                                    subtitulo={opcion.subtitulo} 
                                    descripcion={opcion.descripcion} 
                                    logo={opcion.logo} 
                                    logoTitulo={opcion.logoTitulo} 
                                    duracion={opcion.duracionAños}
                                    setEstadoModal={setEstadoModal}
                                    setTituloLogo={setTituloLogo}
                                    setContenidoModal={setContenidoModal}
                                />
                            </li>
                            <li/>
                            <li/>
                            <li/>
                            {ultimaPosicion && <li className='ultimoItem'/>}

                        </ul>
                    )
                })}   
            </div>
        </div>
    )
}
