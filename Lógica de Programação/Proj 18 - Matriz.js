let animais = [
    [], // ==> animais[0] 
    [], // ==> animais[1]
    []  // ==> animais[2]
];

const NUMERO_ANIMAIS = 3;

for(let j = 0; j < NUMERO_ANIMAIS; j++){
    let infonome = window.prompt(`Qual o nome do animal ${j + 1}?`);
    animais[0].push(infonome);
    let infoespecie = window.prompt(`Qual a espécie do animal ${j + 1}?`);
    animais[1].push(infoespecie);
    let infoidade = parseInt(window.prompt(`Qual a idade do animal ${j + 1}?`));
    animais[2].push(infoidade);
}


console.table(animais);

