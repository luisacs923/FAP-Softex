//Exercício sobre Objetos

//classe com função construtora : definir template para objeto
class contaBanco{
    constructor(numConta, saldo, tipoConta, agencia){
        this.numConta = numConta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }
    
    //métodos
    buscarSaldo(){
        return this.saldo;
    }
    deposito(valordeposito){
        this.saldo += valordeposito;
    } 
    saque(valorsaque){
        this.saldo -= valorsaque;
    }
    buscarConta(){
        return this.numConta;
    }
}

//criando o objeto : chamando a classe
const minhaConta = new contaBanco("12345", 150.50, "Conta Corrente", 67890);

//para chamar os métodos
console.log("O número da Conta é: " + minhaConta.buscarConta());
console.log("O saldo atual da conta é: " + minhaConta.buscarSaldo());
minhaConta.deposito(50.50);
minhaConta.saque(51);
console.log("O saldo atual da conta é: " + minhaConta.buscarSaldo());


