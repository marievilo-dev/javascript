const prompt = require('prompt-sync')();

console.log("Esse programa realiza o cálculo do IRRF (Imposto de Renda Retido na Fonte)");

console.log("\nInforme a sua renda bruta mensal (considerando 13º salário): R$");

const brutoMensal = Number(prompt("Informe sua renda bruta mensal: R$"));
const brutoAnual = brutoMensal * 13; // Calcula o valor anual considerando o 13º salário.

console.log(`\nA sua renda bruta anual é de R$${brutoAnual.toFixed(2)}`);

if (brutoAnual <= 26963.20)
{
    console.log("\nConsiderando a renda bruta, a alíquota não é aplicada.");
    console.log(`A sua renda líquida mensal é de R$${brutoMensal.toFixed(2)}`);
    console.log(`A sua renda líquida anual é de R$${brutoAnual.toFixed(2)}`);
} 

else if (brutoAnual >= 26963.21 && brutoAnual <= 33919.80)
{
    const aliquota = 0.075;
    const impostoMensal = brutoMensal * aliquota;
    const impostoAnual = brutoAnual * aliquota;
    const liquidoMensal = brutoMensal - impostoMensal;
    const liquidoAnual = brutoAnual - impostoAnual;

    console.log("\nConsiderando a renda bruta, o valor aplicado da alíquota é de 7,5%.");
    console.log(`\nO imposto mensal é de R$${impostoMensal.toFixed(2)}`);
    console.log(`O imposto anual é de R$${impostoAnual.toFixed(2)}`);
    console.log(`A sua renda líquida mensal é de R$${liquidoMensal.toFixed(2)}`);
    console.log(`A sua renda líquida anual é de R$${liquidoAnual.toFixed(2)}`);
} 

else if (brutoAnual >= 33919.81 && brutoAnual <= 45012.60)
{
    const aliquota = 0.15;
    const impostoMensal = brutoMensal * aliquota;
    const impostoAnual = brutoAnual * aliquota;
    const liquidoMensal = brutoMensal - impostoMensal;
    const liquidoAnual = brutoAnual - impostoAnual;

    console.log("\nConsiderando a renda bruta, o valor aplicado da alíquota é de 15%.");
    console.log(`\nO imposto mensal é de R$${impostoMensal.toFixed(2)}`);
    console.log(`O imposto anual é de R$${impostoAnual.toFixed(2)}`);
    console.log(`A sua renda líquida mensal é de R$${liquidoMensal.toFixed(2)}`);
    console.log(`A sua renda líquida anual é de R$${liquidoAnual.toFixed(2)}`);
} 

else if (brutoAnual >= 45012.61 && brutoAnual <= 55976.16)
{
    const aliquota = 0.225;
    const impostoMensal = brutoMensal * aliquota;
    const impostoAnual = brutoAnual * aliquota;
    const liquidoMensal = brutoMensal - impostoMensal;
    const liquidoAnual = brutoAnual - impostoAnual;

    console.log("\nConsiderando a renda bruta, o valor aplicado da alíquota é de 22,5%.");
    console.log(`\nO imposto mensal é de R$${impostoMensal.toFixed(2)}`);
    console.log(`O imposto anual é de R$${impostoAnual.toFixed(2)}`);
    console.log(`A sua renda líquida mensal é de R$${liquidoMensal.toFixed(2)}`);
    console.log(`A sua renda líquida anual é de R$${liquidoAnual.toFixed(2)}`);
} 

else
{
    const aliquota = 0.275;
    const impostoMensal = brutoMensal * aliquota;
    const impostoAnual = brutoAnual * aliquota;
    const liquidoMensal = brutoMensal - impostoMensal;
    const liquidoAnual = brutoAnual - impostoAnual;

    console.log("\nConsiderando a renda bruta, o valor aplicado da alíquota é de 27,5%.");
    console.log(`\nO imposto mensal é de R$${impostoMensal.toFixed(2)}`);
    console.log(`O imposto anual é de R$${impostoAnual.toFixed(2)}`);
    console.log(`A sua renda líquida mensal é de R$${liquidoMensal.toFixed(2)}`);
    console.log(`A sua renda líquida anual é de R$${liquidoAnual.toFixed(2)}`);
}
