//cadastro com os seguintes dados: nome, salário, idade, se possui diploma.
//Identificar os tipos de cada variavel

//Var nome : string
//Var salario : number
//Var idade: number
//Var diploma: boolean


alert("Digite os seus dados cadastrais:");
const nome = window.prompt("Digite seu nome:");
const salario = parseFloat(window.prompt("Digite o valor do seu salário:"));
const idade = parseInt(window.prompt("Digite sua idade:"));
const diploma = confirm("Possui diploma?");

