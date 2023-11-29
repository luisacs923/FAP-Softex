//Exercício de erros e tratamentos de exceção

const prompt = require('prompt-sync')(); // instalar no terminal: npm install prompt-sync

function dividir(divisor, dividendo){
    if(dividendo === 0){
        throw new Error("Divisão por 0, operação inválida.");
    } else {
        return divisor/dividendo;
    }
}

console.log("Divisão matemática:");
let valor1 = parseInt(prompt("digite o primeiro valor: "));
let valor2 = parseInt(prompt("digite o segundo valor: "));
let resultado;
try{
    resultado = dividir(valor1,valor2);
    console.log(resultado);
} catch(error){
    console.log(error.message);
}
finally {
    console.log("Lembrar que não se pode dividir nenhum número por 0!")
}

