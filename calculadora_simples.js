const prompt = require('prompt-sync')();

console.log("Esse programa realiza um cálculo simples entre dois números usando as quatro operações básicas.");

const numUm = Number(prompt("\nInforme o primeiro valor: "));
const numDois = Number(prompt("\nInforme o segundo valor: "));

if (isNaN(numUm) || isNaN(numDois)) {
    console.log("\nPor favor, insira valores numéricos válidos.");
} else {
    const operador = Number(prompt("\n[1] Adição\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n\nInforme o número correspondente ao operador a ser utilizado: "));

    if (operador === 1) {
        const soma = numUm + numDois;
        console.log(`\nA soma de ${numUm} + ${numDois} é = ${soma}`);
    } else if (operador === 2) {
        const subtracao = numUm - numDois;
        console.log(`\nA subtração de ${numUm} - ${numDois} é = ${subtracao}`);
    } else if (operador === 3) {
        const multiplicacao = numUm * numDois;
        console.log(`\nA multiplicação de ${numUm} * ${numDois} é = ${multiplicacao}`);
    } else if (operador === 4) {
        if (numDois === 0) {
            console.log("\nErro: Não é possível dividir por zero.");
        } else {
            const divisao = numUm / numDois;
            console.log(`\nA divisão de ${numUm} / ${numDois} é = ${divisao}`);
        }
    } else {
        console.log("\nOperador inválido! Por favor, escolha um número de 1 a 4.");
    }
}