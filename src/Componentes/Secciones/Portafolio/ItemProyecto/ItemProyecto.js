import IconoDev from 'Componentes/Iconos/IconoDev';
import IconoGeneral from 'Componentes/Iconos/IconoGeneral';
import React from 'react';
import Celular from '../Plantillas/Celular';
import Navegador from '../Plantillas/Navegador';
import './ItemProyecto.scss'


export default function ItemProyecto({titulo, descripcion, posicionItem, imagenCelular, imagenNavegador, tituloHttp, logo, logoTitulo, colorFondo, fecha, tecnologias, linkGit, linkPage}) {
    return (
        <div className={`contenedor-ItemProyecto`}>
            <div className= {`borde-contenedor-ItemProyecto ${posicionItem}`} />

            <div className={`contenedor-proyecto-ItemProyecto ${posicionItem}`}>
                <div className='contenedor-imagenes-ItemProyecto'> 
                    <Navegador  tituloHttp={tituloHttp} logo={logo} colorFondo={colorFondo}>
                        <img src={imagenNavegador} alt='img' />        
                    </Navegador>
                    <Celular tituloHttp={tituloHttp} colorFondo={colorFondo}>
                        <img src={imagenCelular} alt='img' />   
                    </Celular>
                </div>

                <div className='contenedor-detalles-ItemProyecto'>
                    <article>
                        <div className='contenedor-informacion-ItemProyecto'>
                            <img src={logoTitulo} alt='img' className='logoProyecto'/>
                            <h2 className='tituloProyecto'>{titulo}</h2>
                            <p className='descripcionProyecto'>{descripcion}</p>
                            <p className='fechaProyecto'><b>Fecha:</b> {fecha} </p>
                            <p className='tecnoligiasProyecto'><b>Tecnologias Utilizadas:</b> </p>
                            {tecnologias.map((item, e)=>{
                                        return (<IconoDev titulo={item} width='40px' key={`iconoDev-${e}`}/>)
                            })}
                            <br></br>
                            <div className='contenedor-botones-itemProyecto'>
                                <a href={linkGit} className='botonProyecto'><IconoGeneral titulo='github-icono' width='30px'/>&nbsp;&nbsp;&nbsp;<b>VER CODIGO</b> </a>
                                <a href={linkPage} className='botonProyecto'><IconoGeneral titulo='demo-icon' width='30px'/>&nbsp;&nbsp;&nbsp;<b>VER DEMO</b> </a>
                            </div>
                        </div>
                        
                    </article>
                    <span className='fondocirculo-ItemProyecto' style={{ background: colorFondo }} />
                </div>

            </div>        
        </div>
    )
}
