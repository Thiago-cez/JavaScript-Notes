const prompt = require("prompt-sync")();


const salary = Number(prompt("salario Atual "));

const increase = Number(prompt("Porcentagem de Aumento "));

const newSalary = salary + salary * (increase / 100);
console.log(" o novo salario é: " + newSalary);