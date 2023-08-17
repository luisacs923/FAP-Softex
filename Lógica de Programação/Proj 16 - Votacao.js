const candidatos={
    candidato_x:889,
    candidato_y:847,
    candidato_z:515,
    branco:0
}
let votar = true;
let contadorx=0;
let contadory=0;
let contadorz=0;
let contadorbranco=0;
let contadornulo=0;
while(votar){
    window.alert("Escolha bem o seu voto!\n Candidato X : 889 \n Candidato Y : 847 \n Candidato Z : 515 \n Branco : 0");
    let voto = parseInt(window.prompt("Digite seu voto:"));
    if(isNaN(voto)==false){
        if(voto === candidatos.candidato_x){
            contadorx++;
        } else if(voto === candidatos.candidato_y){
            contadory++;
        } else if(voto === candidatos.candidato_z){
            contadorz++;
        } else if(voto === candidatos.branco){
            contadorbranco++;
        } else {
            contadornulo++;
        }
        votar = confirm("Deseja continuar a votação?");
    } else {
        window.alert("Voto inválido, digite novamente!")
    }
}
let vencedor;
let nomeCandidato;
if(contadorx > contadory && contadorx > contadorz){
    vencedor = candidatos.candidato_x;
    nomeCandidato = "Candidato X";
} else if(contadory > contadorx && contadory > contadorz){
    vencedor = candidatos.candidato_y;
    nomeCandidato = "Candidato Y";
} else {
    vencedor = candidatos.candidato_z;
    nomeCandidato = "Candidato Z";
}

window.alert("Votação encerrada. O vencedor é o " + nomeCandidato + "!!!");
window.alert("O candidato de número " + candidatos.candidato_x + " recebeu " + contadorx + " votos.");
window.alert("O candidato de número " + candidatos.candidato_y + " recebeu " + contadory + " votos.");
window.alert("O candidato de número " + candidatos.candidato_z + " recebeu " + contadorz + " votos.");
window.alert("Votos brancos: " + contadorbranco + ".");
window.alert("Votos nulos: " + contadornulo + ".");
