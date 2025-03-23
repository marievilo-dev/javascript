const prompt = require('prompt-sync')();

console.log("Esse programa mostra qual o maior valor.");
const numUm = Number(prompt("\nInsira o 1° valor: "));
const numDois = Number(prompt("\nInsira o 2° valor: "));
const numTres = Number(prompt("\nInsira o 3° valor: "));

if (numUm > numDois && numUm > numTres)
{
    console.log("\nO 1° Valor é o maior."); 
}

if (numDois > numUm && numDois > numTres)
{
    console.log("\nO 2° Valor é o maior.");
}

if (numTres > numUm && numTres > numDois)
{
    console.log("\nO 3° Valor é o maior.");
}

if (numUm == numDois && numUm != numTres)
{
    console.log("\nO 1° Valor e o 2° Valor são maiores que o 3° Valor.");
}

if (numUm == numTres && numUm != numDois)
{
    console.log("\nO 1° Valor e o 3° Valor são maiores que o 2° Valor.");
}

if (numDois == numTres && numDois != numUm)
{
    console.log("\nO 2° Valor e o 3° Valor são maiores que o 1° Valor.");
}

if (numUm == numDois && numDois == numTres) 
{
    console.log("\nTodos os números possuem o mesmo valor");
}