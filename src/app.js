//Logica para crear carta random
function generarCarta() {
  let carta = {
    numero: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    pinta: [
      "bi bi-suit-diamond-fill text-danger",
      "bi bi-suit-heart-fill text-danger",
      "bi bi-suit-club-fill",
      "bi bi-suit-spade-fill"
    ]
  };
  let cartas = {};
  cartas.numero = generarNumeroRandom(carta.numero);
  cartas.pinta = generarNumeroRandom(carta.pinta);
  return cartas;
}

function generarNumeroRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}
//

//Logica DOM
let root = document.querySelector("#root");
root.className = "container-fluid d-flex row gap-3";

//Crear div de "opciones"
let optionsDiv = document.createElement("div");
optionsDiv.className = "col-12 d-flex gap-3 justify-content-center";
root.appendChild(optionsDiv);

//Boton para crear carta nueva.
let btnNewCard = document.createElement("button");
btnNewCard.className = "btn btn-primary";
btnNewCard.textContent = "Crear nueva carta";
btnNewCard.addEventListener("click", addCartaDOM);

optionsDiv.appendChild(btnNewCard);
//

//Crear carta nueva cada 10 segundos
//

//Input cambio width y height
let inputWidth = document.createElement("input");
let inputHeight = document.createElement("input");
optionsDiv.appendChild(inputWidth);
optionsDiv.appendChild(inputHeight);
inputWidth.value = "30%";
inputHeight.value = "100%";
inputWidth.addEventListener("input", changeAllSizes);
function changeAllSizes() {
  for (let index = 1; index < root.children.length; index++) {
    root.children[index].style.width = inputWidth.value;
    root.children[index].style.height = inputHeight.value;
  }
}
//

function addCartaDOM() {
  let cartaRandom = generarCarta();

  let cardContainer = document.createElement("div");
  cardContainer.className = "d-flex flex-column bg-white p-3 rounded";
  cardContainer.style.width = inputWidth.value;
  cardContainer.style.height = inputHeight.value;

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
