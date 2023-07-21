import Dado from './Dado.js'
import Tabla from './Tabla.js'
import { useState } from 'react';

const RESULTADOS = ["A", "7", "8", "J", "Q", "K"];
const lanzarDado = () => (RESULTADOS[Math.floor(Math.random() * 6)]);
let numLanzamientos = 3;

export default function Tablero() {
  /* dados estado */
  const [dados, setDados] = useState([
    { dado: null, estado: false },
    { dado: null, estado: false },
    { dado: null, estado: false },
    { dado: null, estado: false },
    { dado: null, estado: false },
  ]);

  const [tablaPuntos, setTablaPuntos] = useState(
    [{
      dados: [
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
        { dado: null, estado: false },
      ],
      botonBloquedo: false,
      descripcion: 'Número de Ases',
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
      botonBloquedo: false,
      descripcion: 'Número de Reyes',
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
      botonBloquedo: false,
      descripcion: 'Número de Damas',
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
      botonBloquedo: false,
      descripcion: 'Número de Jotas',
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
      botonBloquedo: false,
      descripcion: 'Número de Rojos',
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
      botonBloquedo: false,
      descripcion: 'Número de Negros',
      puntos: 0,
      key: 'N',
      valor: 1,
    },
    ]
  );
  /* lanzamos los dados, para aquellos dados no bloqueados*/
  function cargarDados(e) {
    numLanzamientos--;
    const nextDados = dados.slice();
    nextDados.map((item) => (
      !item.estado ? item.dado = lanzarDado() : null
    ));
    
    if (numLanzamientos===0){
      e.target.disabled=true;
    }
    setDados(nextDados);
  }
  /* funcion que cambia de estado Bloqueado/desbloqueado un dado*/
  function handleClick(i) {
    if  (numLanzamientos===0){
      return;
      
    }
    const nextDados = dados.slice();
    nextDados[i].estado = !dados[i].estado;
    setDados(nextDados);
    /* console.log(nextDados[i].estado)*/
  }

  return (
    <>
      <h2>Tiradas restantes : {numLanzamientos}</h2>
      {dados.map((item, i) => (
        <Dado
          key={i}
          value={item}
          onDadoClick={() => handleClick(i)}
        />
      ))}
      <button onClick={cargarDados}>Lanzar Dados</button>
      <Tabla value={tablaPuntos}/>
    </>
  );
}
      /*<Dado value={dados[0]}  onDadoClick={()=>handleClick(0)}/>
<Dado value={dados[1]} onDadoClick={()=>handleClick(1)}/>
<Dado value={dados[2]}  onDadoClick={()=>handleClick(2)}/>
<Dado value={dados[3]}  onDadoClick={()=>handleClick(3)}/>
<Dado value={dados[4]}  onDadoClick={()=>handleClick(4)}/>*/