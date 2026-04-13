function tirarCarta() {

const cartas = [
"O Louco",
"A Sacerdotisa",
"A Imperatriz",
"O Imperador",
"O Sol",
"A Lua",
"A Estrela"
];

let sorteio = Math.floor(Math.random() * cartas.length);

document.getElementById("resultado").innerText =
"Sua carta de hoje é: " + cartas[sorteio];

}