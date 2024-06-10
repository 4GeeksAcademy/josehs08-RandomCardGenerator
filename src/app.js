let carta = {
  numero: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  pinta: ["Diamantes", "Corazon", "Trebol", "Picas"]
};

function generarCarta() {
  let cartas = {};
  cartas.numero = generarNumeroRandom(carta.numero);
  cartas.pinta = generarNumeroRandom(carta.pinta);
  return cartas;
}
function generarNumeroRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function addCartaDOM() {
  let cartaRandom = generarCarta();

  let contenedor = document.createElement("div");
  contenedor.className = "d-flex flex-column bg-white p-3 w-25";

  let numeroCarta = document.createElement("p");
  numeroCarta.className = "text-center display-1";
  numeroCarta.textContent = cartaRandom.numero;

  let pintaCartaArriba = document.createElement("i");
  pintaCartaArriba.className =
    "fa-solid fa-heart fa-2xl text-danger text-start";

  let pintaCartaAbajo = document.createElement("i");
  pintaCartaAbajo.className = "fa-solid fa-heart fa-2xl text-danger text-end";

  contenedor.appendChild(pintaCartaArriba);
  contenedor.appendChild(numeroCarta);
  contenedor.appendChild(pintaCartaAbajo);

  const currentDiv = document.querySelector("#div1");
  document.body.insertBefore(contenedor, currentDiv);
}
