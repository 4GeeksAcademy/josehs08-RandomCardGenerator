const carta = {
  numero: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  pinta: ["Diamantes", "Corazon", "Trebol", "Picas"]
};

function generarCarta() {
  let cartas = "";
  cartas +=
    generarNumeroRandom(carta.numero) + " " + generarNumeroRandom(carta.pinta);
  return cartas;
}
function generarNumeroRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

let cartaGenerada = generarCarta();
