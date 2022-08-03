import React from 'react';
import IconoPlantilla from './iconoPlantillas';
import './plantillas.scss'

export default function Navegador(props) {
    return (
        <div className='contenedor-Navegador' style={{ background: props.colorFondo }}>
            <header>
                <div className='header-parte1-Navegador'>
                    <div>
                        <img src={props.logo} alt='img' style={{width:'15px'}} />
                        <span>{props.tituloHttp}</span>
                    </div>
                    <div>
                        <IconoPlantilla titulo='mas' fill='rgb(50, 50, 50)' width='10px' style={{padding:'7px'}}/>
                    </div>
                    <IconoPlantilla titulo='minimizar' fill='rgb(50, 50, 50)' width='10px' style={{padding:'7px'}}/>
                    <IconoPlantilla titulo='maximizar' fill='rgb(50, 50, 50)' width='10px' style={{padding:'7px'}}/>
                    <IconoPlantilla titulo='cerrar' fill='rgb(50, 50, 50)' width='10px' style={{padding:'7px'}}/>
                </div>
                <div className='header-parte2-Navegador'>
                    <IconoPlantilla titulo='flechaControl' fill='rgb(50, 50, 50)' width='15px' style={{transform:'rotate(180deg)'}} />
                    <IconoPlantilla titulo='flechaControl' fill='rgb(50, 50, 50)' width='15px' />
                    <IconoPlantilla titulo='volverAcargar' fill='rgb(50, 50, 50)' width='15px' />
                    <div>
                        <IconoPlantilla titulo='candado' fill='rgb(50, 50, 50)' width='12px' />
                        <span>https://www.{props.tituloHttp}.com</span>
                    </div>
                    <IconoPlantilla titulo='menuNavegador' fill='rgb(50, 50, 50)' width='15px' />
                </div>
            </header>
            <div className='contenedor-imagen-Navegacion'>
                {props.children}
            </div>
            
        </div>
    );
}

