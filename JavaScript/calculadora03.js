//Atividade de Funções - Exemplos de Calculadoras

function calculadora (){
    console.log("Digite os valores, e depois a operação desejada (+ - * /):");
    let valor1 = parseFloat(window.prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(window.prompt("Digite o segundo valor:"));
    let operador = window.prompt("Digite o operador:");
    let resultado;
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
                resultado = valor1/valor2;
            }
            break;
        default:
            resultado = "Operador Incorreto!";
    }
    return resultado;
}

function calculadora2(valor1,valor2,operador){
    let resultado;
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
                resultado = valor1/valor2;
            }
            break;
        default:
            resultado = "Operador Incorreto!";
    }
    return resultado;
}

let resultado = (valor1,valor2,operador) => {

    return "O resultado é " + eval(`${valor1} ${operador} ${valor2}`);

}