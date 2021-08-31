/**
 *      DECORATOR
 *          nos permitem decorar dinamicamente as caracteristicas de uma classe
 *          um decorator é definido pelo caractere @ mais o seu nome
 */
function analisaSaldo(target: any, key: any, descriptor: any) {
    // implementa
}

class Conta {
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    @analisaSaldo
    consultaSaldo(): string {
        return `o seu saldo atual é: ${this.saldo}`;
    }
}

// decorator de propriedade; pode ser definido por uma função com dois parâmetros: target e propertyKey;
function validaTitular(target: any, propertyKey: any) {
    // implementa
}

class Accont {
    numeroDaConta: number;
    @validaTitulor;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    /**outros métodos */
}

// decorator de parâmetro: deve ser declarado antes da declaração de um parâmetro e recebe três parâmetros.
function log(ctor: any) {
    console.log(ctor)
}

@log
class Conta2 {}

/**
 *      DECORATOR FACTORY
 *          usado quando precisamos passar um determinado valor para o decorador para
 *          que ele tome uma ação, como escrever esse valor em um arquivo .txt
 *          ou enviar um evento mensagem para uma API;
 * 
 *          SIXTAXE
 *              a mesma do que decorator de classe; diferenciando que recebe um valor através de um parâmetro
 */
function analisaConta(tipoConta: Any) {
    return (_target: any) => {
        console.log(`${tipoConta} - ${_target}`);
    }
}

@analisaConta('PJ')

class Conta3 {}

/**
 *      MÚLTIPLOS DECORATORS
 *      
 */
function analisaConta(tipoConta: string) {
    return (_target: any) => {
        console.log(`${tipoConta} - ${_target}`);
    }
}

function log(ctor: any) {}
function validaRegra(ctor: any) {}

@log
@validaRegra
@analisaConta('PJ')
class conta {}




