import React, { useEffect } from 'react';
import './Tarjeta.scss'

export default function Tarjeta({nombreYapellido, imagenPerfil, estudio}) {

    useEffect(()=>{
        const wrapper = document.getElementById('wrapperId')   
        const tiket = document.getElementById('tiketId') 
        const {width, height } = wrapper.getBoundingClientRect()
        const mitadAncho = width/2
        const mitadAlto = height/2
        wrapper.addEventListener('mousemove', event =>{
            const {offsetX, offsetY} = event
            const rotacionX = ((offsetX - mitadAncho)/mitadAncho)*15
            const rotacionY = ((offsetY - mitadAlto)/mitadAlto)*15
            tiket.style.transform = `rotateX(${rotacionY}deg) rotateY(${rotacionX}deg)`  // Cuando me muevo en el eje X roto en Y, y viceversa

        })

        wrapper.addEventListener('mouseleave', ()=>{
            tiket.style.transform = `rotateX(0deg) rotateY(0deg)`
        })
    },[])
    
    return (
        <div className='container'>
            <div className='wrapper' id='wrapperId'>
                <div className='contenedor-Tarjeta' id='tiketId'>
                    <div className='contenedor2-Tarjeta'>
                        <div className='bloquedor'></div>
                        <div className='foto-perfil-Tarjeta'>
                            <img src={imagenPerfil} alt='img' width='190px' />
                        </div>
                        <div>
                            <p>Nombre y Apellido</p>
                            <h1>{nombreYapellido}</h1>
                            <p>Estudio</p>
                            <h2>{estudio}</h2>

                        </div>
                    </div>
                </div> 
            </div>           
        </div>
    );
}
