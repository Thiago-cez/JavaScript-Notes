const Prompt = require("prompt-sync")();


const a = Number(Prompt ("Digite a Primeira nota "));
const b = Number(Prompt ("Digite a Segunda nota "));
const c = Number(Prompt ("Digite a Terceira nota "));

const mediaFinal = ( a + b + c) / 3;

console.log("A sua média é " + mediaFinal);