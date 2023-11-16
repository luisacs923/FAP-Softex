//Atividade 2 - Calculadora de média

alert("Vamos calcular a média das notas, para isso digite cada nota a seguir!");
const nota1 = parseFloat(window.prompt("Digite a Nota 1:"));
const nota2 = parseFloat(window.prompt("Digite a Nota 2:"));
const nota3 = parseFloat(window.prompt("Digite a Nota 3:"));

const media = (nota1 + nota2 + nota3)/3;

console.log(`A média das notas é ${media}.`);