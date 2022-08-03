import React from 'react'
import IconoPlantilla from './iconoPlantillas'

import './plantillas.scss'


export default function Celular(props) {
    let date = new Date();
    const horaActual = `${date.toLocaleTimeString('en-US').split(' ')[0].split(':')[0]}:${date.toLocaleTimeString('en-US').split(' ')[0].split(':')[1]} ${date.toLocaleTimeString('en-US').split(' ')[1]}`
    
    return (
        <div className='contenedor-Celular' style={{ background: props.colorFondo }}>
            <header>
                <div className='header-parte1-Celular'>{horaActual}</div>
                <div className='header-parte2-Celular'>
                    <div>
                       <div>
                            <div width='10px' className='parlante-Celular'/>
                            <div width='3px' className='camara-Celular'/>
                       </div>
                    </div>
                    <div />
                    <svg viewBox="0 0 54 11">
                            <path d="M.1 5.2 0 11h54l-.1-5.8c-.1-3.1-.4-4.7-.6-3.6-.2 1.2-1.3 3-2.5 4-1.8 1.7-4 1.9-23.8 1.9S5 7.3 3.2 5.6C2 4.6.9 2.8.7 1.6.5.5.2 2.1.1 5.2z" />
                    </svg>
                </div>
                <div className='header-parte3-Celular'>
                    <IconoPlantilla titulo='señal' fill='white' width='10px' />
                    <IconoPlantilla titulo='wifi' fill='white' width='10px'/>
                    <IconoPlantilla titulo='bateria' fill='white' width='10px' />
                </div>
            </header>
            <div className='navegador-Celular'>
                <IconoPlantilla titulo='volverAcargar' fill='rgb(80, 80, 80)' width='12px' />
                 <div><span>https://www.{props.tituloHttp}.com</span></div>
            </div>
            <div className='contenedor-imagen-Celular'>
                {props.children}
            </div>
            <footer>
                <IconoPlantilla titulo='botonControl1' fill='rgb(200, 200, 200)' width='10px' />
                <IconoPlantilla titulo='botonControl2' fill='rgb(200, 200, 200)' width='20px' />
                <IconoPlantilla titulo='botonControl3' fill='rgb(200, 200, 200)' width='10px' />
            </footer>
            <div className='boton1-lateral-Celular' />
            <div className='boton2-lateral-Celular' />
            <div className='boton3-lateral-Celular' />
        </div>
    );
}

