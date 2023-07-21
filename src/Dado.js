import React from 'react'

const Dado = ({value, onDadoClick}) => {
  let claseDado = "dado";
  if (value.estado) claseDado="dado blocked";
  return (
    <button className={claseDado} onClick={onDadoClick}>
        {value.dado}
    </button>
  )
}

export default Dado;
