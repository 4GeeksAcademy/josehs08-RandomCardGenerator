let carta = {
  numero: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  pinta: [
    "bi bi-suit-diamond-fill text-danger",
    "bi bi-suit-heart-fill text-danger",
    "bi bi-suit-club-fill",
    "bi bi-suit-spade-fill"
  ]
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

let root = document.querySelector("#root");
root.className = "container-fluid d-flex ";

function addCartaDOM() {
  let cartaRandom = generarCarta();

  let cardContainer = document.createElement("div");
  cardContainer.className = "d-flex flex-column bg-white p-3 rounded";
  cardContainer.style.width = "30%";

  let numeroCarta = document.createElement("p");
  numeroCarta.className = "text-center display-1";
  numeroCarta.textContent = cartaRandom.numero;

  let pintaCartaArriba = document.createElement("i");
  let pintaCartaAbajo = document.createElement("i");
  pintaCartaArriba.className = `${cartaRandom.pinta} text-start`;
  pintaCartaAbajo.className = `${cartaRandom.pinta} text-end`;

  cardContainer.appendChild(pintaCartaArriba);
  cardContainer.appendChild(numeroCarta);
  cardContainer.appendChild(pintaCartaAbajo);

  root.appendChild(cardContainer);
}

addCartaDOM();
