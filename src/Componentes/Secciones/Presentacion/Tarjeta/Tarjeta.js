import Logo from 'Componentes/Logotipo/Logo';
import React, { useEffect } from 'react';
import IconosTarjeta from './IconosTarjeta';
import './Tarjeta.scss'

export default function Tarjeta({nombreYapellido, imagenPerfil, estudio, nacionalidad, iconoBandera}) {

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
                        <div className='bloquedor'/>
                        <div className='nacionalidad-seccion-Tarjeta'>
                        <IconosTarjeta titulo={iconoBandera}  style={{ width:'30px'}}/>
                            <b>{nacionalidad}</b>
                        </div>
                        <div className='universidad-seccion-Tarjeta'>
                            <IconosTarjeta titulo='utnfrlp' />
                        </div>

                        <section className='seccion1'>
                            <div className='logoTarjeta-Tarjeta'>
                                <Logo colorFigura2='blue' width='130px'  />
                            </div>
                            
                            <div className='foto-perfil-Tarjeta'>
                                <img src={imagenPerfil} alt='img'  />
                            </div>   
                        </section>
                        <section className='seccion2'>
                            <p>NOMBRE Y APELLIDO:</p>
                            <h2>{nombreYapellido}</h2>
                            <p>ESTUDIO UNIVERSITARIO:</p>
                            <h2>{estudio}</h2>
                            
                        </section>
                    </div>
                </div> 
            </div>           
        </div>
    );
}
