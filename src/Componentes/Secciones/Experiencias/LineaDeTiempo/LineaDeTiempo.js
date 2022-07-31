import React from 'react';
import ItemExperiencia from '../ItemExperiencia/ItemExperiencia';
import './LineaDeTiempo.scss'


export default function LineaDeTiempo({experiencias}) {
    return (

        <div>
            <div className='contenedor-barra-LineaDeTiempo'>        
                {experiencias.map((opcion,i)=>{ 
                    let posicionItem='derecha'
                    if ((i%2)===0) {
                        posicionItem='izquierda'
                    }

                    return(
                        <ul key={'experiencia'+i}>
                            <li className='interseccion-seccion-LineaDeTiempo'/>
                            <li/>
                            <li/>
                            <li className='items-barra-LineaDeTiempo'><ItemExperiencia posicion={posicionItem} titulo={opcion.titulo} subtitulo={opcion.subtitulo} descripcion={opcion.descripcion} logo={opcion.logo} duracion={opcion.duracionAños}/> </li>
                            <li/>
                            <li/>
                        </ul>

                    )
                })}   
            </div>
        </div>
    )
}
