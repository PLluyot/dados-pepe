import React from 'react'

const Dado = (item,i) => {
  return (
    <button key={i} className="dado">
        {item.dado}
    </button>
  )
}

export default Dado;
