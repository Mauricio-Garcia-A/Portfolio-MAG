import React from 'react';
import './BotonDesplegable.scss'

export default function BotonDesplegable({estadoDesplegado}) {

    return (
        <div className={`icon nav-icon ${estadoDesplegado ? "open" :""}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
