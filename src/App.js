const RESULTADOS = ["A", "7", "8", "J", "Q", "K"];
const dados = [
  ['A', false],
  ['8', false],
  [null, false],
  [null, false],
  [null, false]
];
const dados2 = [
  {dado:'A', estado:false},
  {dado:'K', estado:true},
  {dado:null, estado:false},
  {dado:null, estado:false},
  {dado:null, estado:false},
];

function lanzarDado() {
  const num = Math.floor(Math.random() * 6);
  return RESULTADOS[num];
};

function lanzarDados(){
  console.log("ENTRA:");
 /* for (let i = 0; i < 5; i++) {
    const [d, bloqueado] = dados[i];
    dados[i][0]=lanzarDado();
    console.log(dados[i][0]);
  }*/
  for (let i = 0; i < dados2.length; i++) {
    if (!dados2[i].estado)
    dados2[i].dado = lanzarDado();
  }
}

export default function Tablero() {

  lanzarDados();

  return (
    <>
      <h1>{dados2[0].dado}</h1>
      <h1>{dados2[1].dado}</h1>
      <h1>{dados2[2].dado}</h1>
      <h1>{dados2[3].dado}</h1>
      <h1>{dados2[4].dado}</h1>
    </>
  );
}