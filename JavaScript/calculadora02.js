//Atividade Calculadora 02 - Operadores

let valor1 = parseFloat(window.prompt("Digite o Valor 1:"));
let valor2 = parseFloat(window.prompt("Digite o Valor 2:"));
let operador = window.prompt("Digite o símbolo da operação desejada ( + - * /) :");
let resultado;
let sobra = 0;
switch(operador){
    case "+": 
        resultado = valor1 + valor2;
        break;
    case "-":
        resultado = valor1 - valor2;
        break;
    case "*":
        resultado = valor1 * valor2;
        break;
    case "/":
        if(valor2 === 0){
            resultado = null;
        } else {
            sobra = valor1 % valor2;
            resultado = valor1/valor2;
        }
        break;
    default:
        resultado = "Operador Incorreto!";
}

if( sobra !== 0  ){
    console.log(`O resultado é: ${resultado} e a sobra é ${sobra}`);
}   else {
    console.log(resultado);
}

