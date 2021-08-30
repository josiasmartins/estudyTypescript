/**     
 *      POO(PROGRAMAÇÃO ORIENTADO A OBJETOS)
 *          paradigma é a sua identidade. Classe descreve os serviços oferecidos 
 *          por seus objetos e quais informações eles podem armazenar
 *          um objeto é a representação do mundo real
 * 
 *      CLASSES
 *          uma classe é um molde com o qual os objetos são moldados
 *          nele passamos quais atributos um objeto deve ter e quais ações deve tomar
 * 
 *      MÉTODOS
 *          são responsavéis por definir e realizar um determinado comportamento
 * 
 *      HERANÇA
 *          nos permite herdar as heranças através da palavra reservada extends
 */
 export class Conta {
    private numeroDaConta: number;
    titular: string;
    private saldo: number;


    constructor(titular: string, saldo: number) {
        this.numeroDaConta = Math.floor(Math.random() * 1000) + 1; //gera um número aleatório
        this.titular = titular;
        this.saldo = saldo;
    }


//  método
     protected consultaSaldo(): number {
        return this.saldo;
    }
    protected adicionaSaldo(saldo: number): void {
        this.saldo + saldo;
    }

    protected sacarDoSaldo(valor: number): void {
        this.saldo -= valor;
    }

//  implementação da classe conta
const primeiraConta = new conta(1, "Thiago Adriano", 1000 ); // new: para reservada para instanciar/criar um novo objeto a partir de uma classe
}
//  herença
// class ContaPF extends Conta {}
// class ContaPJ extends Conta {}

// const pessoaFisica = new ContaPF(1, "Thiago", 100);
// const pessoaJuridica = new ContaPJ(1, "Thiago", 1000);


class ContaPF extends Conta {
    //implementação da classe conta

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }
    cpf: number;

    constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number) {
        super(numeroDaConta, titular, saldo);
        this.cpf = cpf;
    }
}

// Adicinando o cnpj na conta pj
class ContaPJ extends Conta {
    // implementação da conta da classe Conta

    // sacar(valor: number) {
    //     this.sacarDoSaldo(valor)
    // }

    sacar(valor: number) {
        if(this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

    cnpj: number;

    constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number) {
        super(numeroDaConta, titular, saldo);
        this.cnpj = cnpj
    }
}

const pessoaJuridica = new ContaPJ(123456, 1, "Thiago Adriano", 100);
