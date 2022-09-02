const prompt = require("prompt-sync")();


const real = prompt("Qual o valor em Reais ");
const cotacao = prompt("digite a cotação do dia ");

const dolar = real / cotacao;

console.log("O valor convertido é: " + dolar)