/**
 *      GENERICS
 *          permite criar um componente que pode funcionar em vários tipos
 *          os tipos genéricos só podem ser criados com interfaces ou classes
 *          para usar a função generics, basta colocar as chaves<T>
 */
interface Array<T> {
    /**
     *  Determines wether an array includes a certain element, returning true or false as apropriate
     *  @param searchElement The Elementto search for
     *  @param fromIndex The position in this array at which to begin searching for searchElement
     */
    includes(searchElement: T, fromIndex?: number): boolean;
}

// nesse exemplo o T é uma string
const dias: Array<string> = ['pessoa1', 'pessoa2', 'pessoa3'];

// nesse exemplo T é um number
const dias2: Array<number> = [5, 25, 28];

// function funcaoGenerica<T> () {}

// agora podemos passar qualquer tipo para a função
// function funcaoGenerica<string> () {};
// function funcaoGenerica<number> () {};
// function funcaoGenerica<boolean> () {};

// melhorando a função
function funcaoGenerica<T>(value: T): T {
    return value;
}
// console.log(funcaoGenerica<Number>(1));
// console.log(funcaoGenerica<String>('ibag'));
// console.log(funcaoGenerica<Boolean>(true));

// passando mais de um parâmetro
function fun<T, U, V>(args1: T, args2: U, args3: V): V {
    return args3;
}
console.log(fun<string, number, boolean>('ibag', 1, true))

// classe genérica
class classeGenerica<T> {
    private arr: Array<T> = [];

    adicionaValor(item: T) {
        this.arr.push(item);
    }

    retornaValores() {
        return this.arr;
    }
}

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

let classeGenerica1 = new classeGenerica<Number>();
classeGenerica1.adicionaValor(1);
classeGenerica1.adicionaValor(2);
classeGenerica1.adicionaValor(3);
console.log(classeGenerica1.retornaValores());

let classeGenerica2 = new classeGenerica<string>();
classeGenerica2.adicionaValor('iron man');
classeGenerica2.adicionaValor('spider man');
console.log(classeGenerica2.retornaValores());

// classeGenerica2.removeItem('iron man');
// console.log(classeGenerica2.retornaValores());