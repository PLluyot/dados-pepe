import React from 'react'
import Dado from './Dado.js'

const Tabla = ({ value, onButtonPuntosClick }) => {

   /* value.map((item ,i )=> console.log('elemento '+i+ ' botonBloqueado vale :'+item.botonBloqueado));*/

    return (
        
            <table >
                <thead>
                <tr>
                    <th>Select</th>
                    <th>Value</th>
                    <th>Combination</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {value.map((elemento,e)=>(
                   
                    <tr key={elemento.key}>
                     <td><button disabled={elemento.botonBloqueado} onClick={()=>onButtonPuntosClick(e)}>Seleccionar</button></td>
                    <td className='left'><button className="dado" style={{backgroundImage: `url(${elemento.imagen})`, backgroundSize: 'cover',}}/>{elemento.descripcion} x{elemento.valor}</td>
                    <td>{elemento.dados.map((item, i) => (
                        <Dado
                            key={i+elemento.key}
                            value={item}
                        />))}</td>
                    <td>{elemento.puntos}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        
    )
}

export default Tabla