import React from 'react';
import './Habilidades.scss'

function Grafico({porcentaje}) {

    const porcentaje2 = 100-porcentaje;

    return (
        <div>
            <svg width='250px' viewBox="0 0 40 40" className='donut'>
                    <circle className="donut-hole" cx="20" cy="20" r="17" ></circle>
                    <circle className="donut-ring" cx="20" cy="20" r="16" fill="transparent" strokeWidth="3.5"></circle>
                    <circle style={{transform: 'scale(0.47)' }} className="donut-segment donut-segment-1" cx="21" cy="19" r="16" fill="transparent" strokeWidth="32" strokeDasharray={`${porcentaje} ${porcentaje2}`} strokeDashoffset="25"></circle>
                    <circle style={{transform: 'scale(0.5)' }} className="donut-segment donut-segment-2" cx="20" cy="20" r="16" fill="transparent" strokeWidth="32" strokeDasharray={`${porcentaje2} ${porcentaje}` } strokeDashoffset={porcentaje2+25}></circle>

                   <g className="donut-text">
                        <text y="35%" >
                            <tspan x="27px" textAnchor="middle" className="donut-data-design">DESIGNER</tspan>
                            <tspan x="27px" y='18px' textAnchor="middle" className="donut-design">{porcentaje}%</tspan>   
                        </text>
                        <text y="67%" >
                            <tspan x="19px" textAnchor="middle" className="donut-data-dev">CODER</tspan>
                            <tspan x="20px" y='31px' textAnchor="middle" className="donut-dev">{porcentaje2}%</tspan>   
                        </text>
                    </g>
                </svg>
        </div>
    );
}

export default Grafico;