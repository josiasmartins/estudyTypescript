// let pessoa: {
//     nome: string;
//     idade: number;
//     email: string;
//     telefone: number;
// }


// compátiveis, posi esse tem a mesma propriedade
// let pessoa: {nome: string; idade: number; email: string; telefone: number}
// pessoa = {nome: "Maria", idade: 49, email: "josias@gmail.com", telefone: 12334}

// exemplo: duplicando as propriedades
// let pessoa: {nome: string; idade: number; email: string; telefone: number;};
// //let pessoa2: {nome: string; idade: number; emai: string; telefone: number};
// let pessoa2: typeof pessoa 

/**
 *      INTERFACE
 *          é a essência de um tipo de objeto literal
 *          ele é um conjunto de métodos e propriedades que descrevem um objeto, mas não inícializa e nem implementa
 */
interface Pessoa {
    nome: string;
    idade: number;
    email: string;
    telefone?: number;
}

let pessoa: Pessoa;
let pessoa2: Pessoa;

// mais complexos com tipos simples
interface PessoaJuridica extends Pessoa {
    conta: number;
    cnpj: number;
    abrirConta?(): boolean;
}

// interfaces podem ser definidos por string, constantes, números ou literáis
// const exemp1 = 'string';
// const exemp2= Symbol();

// interface meuExemplo {
//     [exemp1]: string;
//     [exemp2]: boolean;
// }

// interface; implementação por classe
interface Tributavel {
    CalculadoraTributo(): number;
}

// implements: palavra reservada usado para implementar 
class Conta {}

class ContaPJ extends Conta implements Tributavel {

    CalculaTributo(): number {
        // implementa o valor para o calculo
    }
}

class ContaPF extends Conta implements Tributavel {

    CalculaTributo(): number {
        // implementa o cálculo tributário para a ContaPF
    }
}