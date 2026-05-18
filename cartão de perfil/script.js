let cores = [
  "purple",
  "blue",
  "green",
  "red",
  "orange",
  "pink",
  "gold"
];

function mudarCor() {

  let numeroAleatorio =
    Math.floor(Math.random() * cores.length);

  let corEscolhida =
    cores[numeroAleatorio];

  document.getElementById("card").style.background =
    corEscolhida;

}