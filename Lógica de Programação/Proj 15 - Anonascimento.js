let nomecompleto = window.prompt("Qual o seu nome?");
let anovalido = false;
while(anovalido == false){
    try{
        let anonascimento = ParseInt(window.prompt("Qual o ano do seu nascimento?")); 
        if(isNaN(anonascimento) == false){
            if(anonascimento > 1921 && anonascimento <= 2022){
                anovalido=true;
                let idade = 2023 - anonascimento;
                window.alert("O usuário " + nomecompleto + " tem " + idade + " anos!");
            } else {
                window.alert("Você digitou um ano inválido!");
            }
        } else {
            throw new Error("Valor digitado não é um número válido!")
        }
    } catch(error){
        window.alert(error);
        window.alert("Valor inválido, digite novamente!");
    }
}
    
