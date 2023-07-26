import React from 'react';
import K from './Assets/K.png';
import Q from './Assets/Q.png';
import A from './Assets/A.png';
import N from './Assets/N.png';
import R from './Assets/R.png';
import J from './Assets/J.png';

const Dado = ({ value, onDadoClick }) => {
  let claseDado = "dado";
  if (value.estado) claseDado = "dado blocked";

// Objeto que mapea el valor del dado con la imagen importada
const imagenesDados = {
  K: K,
  Q: Q,
  A: A,
  N: N,
  R: R,
  J: J,
};

// Obtener la imagen de fondo basada en el valor de value.dado
const backgroundImageURL = imagenesDados[value.dado];

  return (
    <>
      <button
        className={claseDado}
        onClick={onDadoClick}
        style={{backgroundImage: `url(${backgroundImageURL})`, backgroundSize: 'cover',}}
      ></button>
    </>
  );
};

export default Dado;
