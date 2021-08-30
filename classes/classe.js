"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Conta = void 0;
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
var Conta = /** @class */ (function () {
    function Conta() {
    }
    return Conta;
}());
exports.Conta = Conta;
constructor(numeroDaConta, number, titular, string, saldo, number);
{
    this.numeroDaConta = numeroDaConta;
    this.titular = titular;
    this.saldo = saldo;
}
//  método
consultaSaldo();
string;
{
    return "O seu saldo atual \u00E9: " + this.saldo;
}
adicionaSaldo(saldo, number);
void {
    "this": .saldo + slado
};
sacarDoSaldo(valor, number);
void {
    "this": .saldo -= visualViewport
};
//  implementação da classe conta
var primeiraConta = new conta(1, "Thiago Adriano", 1000); // new: para reservada para instanciar/criar um novo objeto a partir de uma classe
//  herença
// class ContaPF extends Conta {}
// class ContaPJ extends Conta {}
// const pessoaFisica = new ContaPF(1, "Thiago", 100);
// const pessoaJuridica = new ContaPJ(1, "Thiago", 1000);
var ContaPF = /** @class */ (function (_super) {
    __extends(ContaPF, _super);
    function ContaPF(cpf, numeroDaConta, titular, saldo) {
        var _this = _super.call(this, numeroDaConta, titular, saldo) || this;
        _this.cpf = cpf;
        return _this;
    }
    return ContaPF;
}(Conta));
// Adicinando o nnpj na conta pj
var ContaPJ = /** @class */ (function (_super) {
    __extends(ContaPJ, _super);
    function ContaPJ(cnpj, numeroDaConta, titular, saldo) {
        var _this = _super.call(this, numeroDaConta, titular, saldo) || this;
        _this.cnpj = cnpj;
        return _this;
    }
    return ContaPJ;
}(Conta));
var pessoaJuridica = new ContaPJ(123456, 1, "Thiago Adriano", 100);
