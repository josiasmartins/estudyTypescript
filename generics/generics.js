"use strict";
// nesse exemplo o T é uma string
var dias = ['pessoa1', 'pessoa2', 'pessoa3'];
// nesse exemplo T é um number
var dias2 = [5, 25, 28];
// function funcaoGenerica<T> () {}
// agora podemos passar qualquer tipo para a função
// function funcaoGenerica<string> () {};
// function funcaoGenerica<number> () {};
// function funcaoGenerica<boolean> () {};
// melhorando a função
function funcaoGenerica(value) {
    return value;
}
// console.log(funcaoGenerica<Number>(1));
// console.log(funcaoGenerica<String>('ibag'));
// console.log(funcaoGenerica<Boolean>(true));
// passando mais de um parâmetro
function fun(args1, args2, args3) {
    return args3;
}
console.log(fun('ibag', 1, true));
// classe genérica
var classeGenerica = /** @class */ (function () {
    function classeGenerica() {
        this.arr = [];
    }
    classeGenerica.prototype.adicionaValor = function (item) {
        this.arr.push(item);
    };
    classeGenerica.prototype.retornaValores = function () {
        return this.arr;
    };
    return classeGenerica;
}());
// let classeGenerica1 = new classeGenerica<number>();
// classeGenerica1.adicionaValor(4);
// console.log(classeGenerica1.retornaValores());
// let classeGenerica2 = new classeGenerica<string>();
// classeGenerica2.adicionaValor('iron man');
// console.log(classeGenerica2.retornaValores());
// criando uma interface genérica
// interface interfaceGenerica<T> implements InterfaceGenerica<T> {
//     // outros métodos
//     removeItem(item: T) {
//         let index = this.arr.indexOf(item);
//         if(index > -1) 
//             this.Array.splice(index, 1)
//     }
// }
var classeGenerica1 = new classeGenerica();
classeGenerica1.adicionaValor(1);
classeGenerica1.adicionaValor(2);
classeGenerica1.adicionaValor(3);
console.log(classeGenerica1.retornaValores());
var classeGenerica2 = new classeGenerica();
classeGenerica2.adicionaValor('iron man');
classeGenerica2.adicionaValor('spider man');
console.log(classeGenerica2.retornaValores());
// classeGenerica2.removeItem('iron man');
// console.log(classeGenerica2.retornaValores());
