class Pessoa{
    constructor(Nome, Idade, Altura){
        this.nome = Nome;
        this.idade = Idade;
        this.altura = Altura;
    }
    andar(){
        console.log(`A Pessoa ${this.nome} está andando!`);
    }
    falar(mensagem){
        console.log(`A Pessoa ${this.nome} falou: ${mensagem}`);
    }
    comer(){
        console.log(`A Pessoa ${this.nome} comeu!`)
    }
}

class Mouse{
    constructor(Modelo, Marca, Conexao){
        this.modelo = Modelo;
        this.marca = Marca;
        this.conexao = Conexao;
    }
    clicar(){
        console.log("O mouse clicou corretamente!");
    }
    conectar(){
        this.conexao = true;
        console.log("O mouse foi conectado!")
    }
    desconectar(){
        this.conexao = false;
        console.log("O mouse foi desconectado");
    }
}

class Produto{
    constructor(Nome, Estoque, Vendas){
        this.nome = Nome;
        this.estoque = Estoque;
        this.vendas = Vendas;
    }
    consulta(){
        console.log(`Atualmente existem ${this.estoque} ${this.nome} no estoque.`)
    }
    venda(quantidade){
        if(this.estoque < quantidade){
            console.log("Estoque insuficiente!")
        } else{
            this.estoque -= quantidade;
            this.vendas += quantidade;
        }
    }
    abastecer(quantidade){
        this.estoque += quantidade;
    }
}

class Conta{
    constructor(Cliente, Numero, Saldo){
        this.cliente = Cliente;
        this.numero = Numero;
        this.saldo = Saldo;
    }
    extrato(){
        console.log(`O saldo da conta ${this.numero} é de R$ ${this.saldo}`);
    }
    saque(valor){
        this.saldo -= valor;
        if(this.saldo < 0){
            console.log("Saldo negativo, cheque especial utilizado!")
        }
    }
    deposito(valor){
        this.saldo += valor;
    }
}

const Juliana = new Pessoa("Juliana dos Santos", 35, 1.65);
Juliana.falar("Oi, eu sou a Juliana!");

const nway = new Mouse("Vertical", "Nway", false);
nway.conectar();

const camiseta = new Produto("T-shirt Branca", 2, 0);
camiseta.venda(5);
camiseta.abastecer(10);
camiseta.venda(5);
camiseta.consulta();

const poupanca = new Conta("Juliana dos Santos", 12345, 35.20);
poupanca.saque(30);
poupanca.extrato();
