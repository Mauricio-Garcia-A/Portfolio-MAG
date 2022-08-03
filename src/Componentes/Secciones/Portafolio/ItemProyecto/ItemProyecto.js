import React from 'react';
import Celular from '../Plantillas/Celular';
import Navegador from '../Plantillas/Navegador';
import './ItemProyecto.scss'


export default function ItemProyecto({titulo, descripcion, posicionItem, imagenCelular, imagenNavegador, tituloHttp, logo, colorFondo}) {
    return (
        <div className={`contenedor-ItemProyecto ${posicionItem}`}>
           <div className='contenedor-detalles-ItemProyecto'>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <button>code</button>
                <button>demo</button>
            </div>
            <div className='contenedor-imagenes-ItemProyecto'> 
                <Navegador  tituloHttp={tituloHttp} logo={logo} colorFondo={colorFondo}>
                    <img src={imagenNavegador} alt='img' />        
                </Navegador>
                <Celular tituloHttp={tituloHttp} colorFondo={colorFondo}>
                    <img src={imagenCelular} alt='img' />   
                </Celular>

            </div>

        </div>
    )
}
