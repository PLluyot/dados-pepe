import { useState , useEffect } from 'react';
import Dado from './Dado.js'

const RESULTADOS = ["A", "7", "8", "J", "Q", "K"];
/*const dados = [
  ['A', false],
  ['8', false],
  [null, false],
  [null, false],
  [null, false]
];*/
function lanzarDado() {
  const num = Math.floor(Math.random() * 6);
  return RESULTADOS[num];
};

function lanzarDados({ dados, setDados }) {
  const nuevosDados = dados.map((dado,i) => {
    if (!dado.estado) {
      console.log(`Lanzando dado ${i}`);
      return {
        ...dado,
        dado: lanzarDado(),
        estado: true,
      };
    } else {
      return dado;
    }
  });

  setDados(nuevosDados);
}

export default function Tablero() {

  const datos = [
    {dado:null, estado:false},
    {dado:null, estado:false},
    {dado:null, estado:false},
    {dado:null, estado:false},
    {dado:null, estado:false},
  ];
  
  const [dados, setDados] = useState(datos);

  useEffect(() => {
    // Actualizar el estado de los dados después de llamar a lanzarDados
    setDados(dados);
  }, [dados]);

  return (
    <>
      {dados.map((item, i) => (
       Dado(item,i)
    ))}
    <button className="Lanzar" onClick={()=>lanzarDados({dados, setDados})}>Lanzar dados</button>
    </>
  );
}