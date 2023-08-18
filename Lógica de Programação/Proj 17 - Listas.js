let nome=[];
let idade=[];
let cor=[];

let contador = 0;

for(let i=0;i<=9;i++){
    let elementonome = window.prompt("Digite o nome do usuário " + (i+1) );
    nome.push(elementonome);
}
for(let i=0;i<=9;i++){
    let elementoidade = parseInt(window.prompt("Digite a idade do usuário " + (i+1)));
    idade.push(elementoidade);
}
for(let i=0;i<=9;i++){
    let elementocor = window.prompt("Digite a cor do usuário " + (i+1));
    cor.push(elementocor);
}

window.alert("A lista de nomes é: " + nome);
window.alert("A lista de idades é: " + idade);
window.alert("A lista de cores é: " + cor);

indice = parseInt(window.prompt("Digite qual a posição do usuário em que vai ser efetuada a troca de cor e idade: ")) - 1;
cor.splice(indice,1,"preto");
idade.splice(indice,1,35);

window.alert("A lista de nomes é: " + nome);
window.alert("A lista de idades é: " + idade);
window.alert("A lista de cores é: " + cor);