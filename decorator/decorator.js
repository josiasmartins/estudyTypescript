"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 *      DECORATOR
 *          nos permitem decorar dinamicamente as caracteristicas de uma classe
 *          um decorator é definido pelo caractere @ mais o seu nome
 */
function analisaSaldo(target, key, descriptor) {
    // implementa
}
var Conta = /** @class */ (function () {
    function Conta(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    Conta.prototype.consultaSaldo = function () {
        return "o seu saldo atual \u00E9: " + this.saldo;
    };
    __decorate([
        analisaSaldo
    ], Conta.prototype, "consultaSaldo", null);
    return Conta;
}());
// decorator de propriedade; pode ser definido por uma função com dois parâmetros: target e propertyKey;
function validaTitular(target, propertyKey) {
    // implementa
}
var Accont = /** @class */ (function () {
    function Accont() {
    }
    return Accont;
}());
