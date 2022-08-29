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
        <div className='contenedor-Habilidades seccionEstandar'>
            <h1>Habilidades <span>Actuales</span></h1>
            {SECCION_HABILIDADES.descripcionSeccion.map((parrafo, i)=>{
                return (<div key={`parrafo-habilidades-${i}`} className='parrafoHabilidades'>
                            <p>{parrafo}</p>
                            <br />
                        </div>)
            })}

            <DifereciacionHabilidades 
                imagen1={SECCION_HABILIDADES.ImagenHabilidad1} 
                imagen2={SECCION_HABILIDADES.ImagenHabilidad2} 
                titulo1={SECCION_HABILIDADES.tituloHabilidad1} 
                descripcion1={SECCION_HABILIDADES.descripcionHabilidad1}
                iconos1={SECCION_HABILIDADES.iconosHabilidad1}
                titulo2={SECCION_HABILIDADES.tituloHabilidad2} 
                descripcion2={SECCION_HABILIDADES.descripcionHabilidad2}
                iconos2={SECCION_HABILIDADES.iconosHabilidad2}
            />
            <div className='contenedor-seccion-tecnologias-Habilidades'>
                <section>
                    <h2>Desarrollador</h2>
                    <ul>
                        {SECCION_HABILIDADES.ActividadesRealizadas1.map((actividad,i)=>{
                        return (
                            <li key={`itemActividad1${i}`} className="item-lista-actividad">{actividad}</li>
                            )
                        })}     
                    </ul>
                                 
                </section>
                <section>
                    <Grafico porcentaje={30}/>
                </section>
                <section>
                    <h2>Diseñador</h2>
                    <ul>
                        {SECCION_HABILIDADES.ActividadesRealizadas2.map((actividad,i)=>{
                            return (
                                <li key={`itemActividad2${i}`} className="item-lista-actividad">{actividad}</li>
                            )
                        })}                         
                    </ul>
                </section> 
            </div>
            <div className='contenedor-seccion2-tecnologias-Habilidades'>
                <h2>SKILLs</h2>

                {SECCION_HABILIDADES.SkillsDev.map((skill, i)=>{
                    return (
                        <div>
                            <div key={`itemSkillDev${i}`}>
                                <h3>{skill.titulo}</h3>
                                {skill.items.map((item, e)=>{
                                    return (<IconoDev titulo={item} width='80px' key={`iconoDev${i}-${e}`}/>)
                                })}
                            </div>
                        </div>
                    )
                })}

                {SECCION_HABILIDADES.SkillsDesing.map((skill, i)=>{
                    return (
                        <div key={`itemSkillDesing${i}`}>
                            <h3>{skill.titulo}</h3>
                            {skill.items.map((item, e)=>{
                                return (<IconoUx titulo={item} width='80px'  key={`iconoDesing${i}-${e}`}/>)
                            })}
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}