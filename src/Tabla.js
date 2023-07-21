import React from 'react'
import Dado from './Dado.js'

const Tabla = ({ value }) => {
    return (
        <div>
            <h1>info</h1>
            <table >
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Combination</th>
                    <th>Value</th>
                    <th>Points</th>
                </tr>
                {value.map((elemento,e)=>(
                    <tr>
                     <td><button disabled={elemento.botonBloqueado}>Seleccionar</button></td>
                    <td>{elemento.descripcion}</td>
                    <td>{elemento.dados.map((item, i) => (
                        <Dado
                            key={i}
                            value={item}
                        />))}</td>
                    <td>{elemento.valor}</td>
                    <td>{elemento.puntos}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Tabla