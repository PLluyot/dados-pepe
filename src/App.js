import Dado from './Dado.js'
import Tabla from './Tabla.js'
import { useState } from 'react';

import K from './Assets/K.png';
import Q from './Assets/Q.png';
import A from './Assets/A.png';
import N from './Assets/N.png';
import R from './Assets/R.png';
import J from './Assets/J.png';


const RESULTADOS = ["A", "R", "N", "J", "Q", "K"];
const ICONOS = ["./Assets/A.svg", "./Assets/R.svg", "./Assets/N.svg", "./Assets/J.svg", "./Assets/Q.svg", "./Assets/K.svg"];


function lanzarDado() {
  const num = Math.floor(Math.random() * 6);
  return { tirada: RESULTADOS[num], imagen: ICONOS[num] }
};
let numLanzamientos = 3;

export default function Tablero() {
  const dadosIniciales = [
    { dado: null, estado: false},
    { dado: null, estado: false},
    { dado: null, estado: false},
    { dado: null, estado: false},
    { dado: null, estado: false},
  ];
  /* dados estado */
  const [dados, setDados] = useState(dadosIniciales);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [total, setTotal] = useState(0);
  const [finPartida, setFinPartida] = useState(false);
  const [tablaPuntos, setTablaPuntos] = useState(
    [{
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'As',
      imagen: A,
      puntos: 0,
      key: 'A',
      valor: 6,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'King',
      imagen: K,
      puntos: 0,
      key: 'K',
      valor: 5,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'Queen',
      imagen: Q,
      puntos: 0,
      key: 'Q',
      valor: 4,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'Joker',
      imagen: J,
      puntos: 0,
      key: 'J',
      valor: 3,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'Red',
      imagen: R,
      puntos: 0,
      key: 'R',
      valor: 2,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'Black',
      imagen: N,
      puntos: 0,
      key: 'N',
      valor: 1,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'Full',
      imagen: A,
      puntos: 0,
      key: 'FULL',
      valor: 30,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'Poker',
      imagen: A,
      puntos: 0,
      key: 'P',
      valor: 45,
    },
    {
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloqueado: false,
      descripcion: 'RePoker',
      imagen: A,
      puntos: 0,
      key: 'RP',
      valor: 50,
    },
    ]
  );
   // número de combinaciones
   const numTotComb = tablaPuntos.length;
   const [numComb, setNumComb] = useState(0);
   ///////////////////////////////////////////////////////////////////////////////////
  /* lanzamos los dados, para aquellos dados no bloqueados*/
  function cargarDados(e) {
    numLanzamientos--;
    const nextDados = dados.slice();
    nextDados.map((item) => {
      if (!item.estado) {
        const { tirada, imagen } = lanzarDado();
        item.dado = tirada;
        item.icono = imagen;
        return item;
      }
      else { return null }

    });

    if (numLanzamientos === 0) {
      /*e.target.disabled=true;*/
      setButtonDisabled(true);
    }
    setDados(nextDados);
  }
  /* funcion que cambia de estado Bloqueado/desbloqueado un dado*/
  function handleClick(i) {
    if (numLanzamientos === 0) {
      return;

    }
    const nextDados = dados.slice();
    nextDados[i].estado = !dados[i].estado;
    setDados(nextDados);
    /* console.log(nextDados[i].estado)*/
  }
  /* función que copia el lanzamiento de datos en la fila correspondiente, y calcula los puntos correspondientes*/
  function actualizarPuntos(indice) {
    /* si no se ha realizado ninguna tirada, salimos*/
    if (numLanzamientos === 3) return
    /*copiamos los dados en la fila correspondiente copiando la estructura nueva de datos*/
    const nextTabla = tablaPuntos.slice();
    const nextDados = dados.slice();
    nextTabla[indice] = {
      ...nextTabla[indice],
      dados: nextDados,
      puntos: calcularPuntos(indice),
      botonBloqueado: true,
    };
    setTotal(total + nextTabla[indice].puntos);
    /* console.log(nextTabla);*/
    /* nextTabla[indice].dados=nextDados;
     nextTabla[indice].puntos=calcularPuntos(indice);     llamamos a calcular los puntos*/
    setTablaPuntos(nextTabla);


    setDados(dadosIniciales);
    /* aumentamos en 1 el número de combinaciones resueltas*/
    setNumComb(numComb+1);
    console.log(numComb);
    if (numComb===numTotComb) {// fin de partida
      //limpiar todo
      alert('fin de la partida');
      
      //window.location.reload(true);
    
    }
    numLanzamientos = 3;
    setButtonDisabled(false);
    
  }

  function calcularPuntos(e) {
    let puntos = 0;
    switch (tablaPuntos[e].key) {
      case 'A':
      case 'K':
      case 'Q':
      case 'J':
      case 'R':
      case 'N':
        const contador = dados.filter((elemento) => elemento.dado === tablaPuntos[e].key).length;
        puntos = tablaPuntos[e].valor * contador;
        break;
      case 'FULL':
        if(checkDices(dados,'F'))   
        puntos = 30;
        else puntos=0;
        break;
      case 'P':
          if(checkDices(dados,'P'))   
          puntos = 45;
          else puntos=0;
          break;
      case 'RP':
        if(checkDices(dados,'RP'))   
        puntos = 45;
        else puntos=0;
        break;
    
      default:
        console.log("defecto");
        puntos = 0;
        break;
    }
    return puntos;
  }

  return (
    <div className="container">
      <div className="button-container">
      <h3>Tiradas restantes : {numLanzamientos}</h3>
      {numComb===numTotComb && <button>Mostrar Botón</button>}
      {dados.map((item, i) => (
        <Dado
          key={i}
          value={item}
          onDadoClick={() => handleClick(i)}
        />
      ))}
      </div>
        <button className="lanzar" onClick={cargarDados} disabled={buttonDisabled}>Lanzar Dados</button>
      <div className="tabla">
        <h1>Puntos : {total}</h1>

        <Tabla value={tablaPuntos} onButtonPuntosClick={(e) => actualizarPuntos(e)} />
      </div>
    </div>
  );
}
/*
const checkFull = (diceArray) => {
  // Paso 1: Obtener un array con solo los valores de los dados (propiedad "dado")
  const diceValues = diceArray.map((a) => a.dado);

  // Paso 2: Contar las ocurrencias de cada dado en el array
  const occurrences = {};
  diceValues.forEach((dice) => {
    occurrences[dice] = (occurrences[dice] || 0) + 1;
  });

  // Paso 3: Comprobar si hay un Full (3 dados iguales y 2 dados iguales)
  const values = Object.values(occurrences);
  return values.includes(3) && values.includes(2);
};
const checkPoker = (diceArray) => {
  // Paso 1: Obtener un array con solo los valores de los dados (propiedad "dado")
  const diceValues = diceArray.map((a) => a.dado);

  // Paso 2: Contar las ocurrencias de cada dado en el array
  const occurrences = {};
  diceValues.forEach((dice) => {
    occurrences[dice] = (occurrences[dice] || 0) + 1;
  });

  // Paso 3: Comprobar si hay un Poker (4 dados iguales y 1 dados iguales)
  const values = Object.values(occurrences);
  return values.includes(4) && values.includes(1);
};*/
const checkDices = (diceArray,type) => {
  // Paso 1: Obtener un array con solo los valores de los dados (propiedad "dado")
  const diceValues = diceArray.map((a) => a.dado);

  // Paso 2: Contar las ocurrencias de cada dado en el array
  const occurrences = {};
  diceValues.forEach((dice) => {
    occurrences[dice] = (occurrences[dice] || 0) + 1;
  });

  // Paso 3: Comprobar si hay un Poker (4 dados iguales y 1 dados iguales)
  const values = Object.values(occurrences);
  switch (type) {
    case 'F':
      return values.includes(3) && values.includes(2);
    case 'P':
      return values.includes(4) && values.includes(1);
    case 'RP':
      return values.includes(5);
    default:
      return null;
  }
  
};