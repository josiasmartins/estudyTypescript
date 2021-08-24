/**
 *  TYPE ASSERTIONS
 *      pode alterar o type de uma variável, sem que o compilador envia uma exception
 * 
 */


/**
 *  NEVER
 *      indica que algo nunca deve acontecer
 *      o type NEVER não pode receber um valor
 */
// funções com exception
function verificandoTipo(x: string | number): boolean {
    if(typeof x === "string") {
        return true;
    } else if(typeof x === "number") {
        return false
    }
    return fail("Esse método não aceita esse tipo de type!");
}

function fail(message: string): never {throw new Error(message); }

verificandoTipo("teste String");
verificandoTipo(10);
let ativo = true;
verificandoTipo(ativo);

// funções sem retorno
function ugrade(): never {
    while(true) {
        console.log("Carregando processos");
    }
}



/**
 *  VOID
 *    Ele não terá nenhum retorno
 *    o type VOID pode receber valor null, que indica ausência de um objeto, ou undefined, que indica a ausência que qualquer valor
 * 
 */
function log(): void {
    console.log('Sem retorno');
}


/**
 *  FUNCTION
 *      tipando funções
 */
// function calc(x: number, y: number): string {
//     return `resultado: ${x + y}`;
// }

// let resultado: number;
// resultado = calc(10, 15);
// console.log(resultado)



/**
 *  ANY 
 *      qualquer valor
 * 
 */
let variavelAny: any = "variavel";
variavelAny = 34;
variavelAny = true;


/**
 *      UNION
 *          O union nos permite combinar mais de um tipo;
 *          Ele usa barra vertical(|) para passar os tipos que ele deve aceitar
 *          (tipo1 | tipo2)
 */
// let exemploVariavel: (string | number);
// exemploVariavel = 123;
// console.log(exemploVariavel);
// exemploVariavel = "abc";
// console.log(exemploVariavel); 

// // três tipos de dados
// let exemploVariavel2: (string | number | boolean);
// exemploVariavel2 = 123;
// console.log(exemploVariavel2);
// exemploVariavel2 = "agbi";
// console.log(exemploVariavel2);
// exemploVariavel2 = false;
// console.log(exemploVariavel2);

//podemos, também utilizar um array no UNION
// var arr: (number[] | string[]);
// var i: number;
// arr = [1, 2 ,3];

// for(i=0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr = ["a", "b", "c", "d"]

// for(i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//como parametros da função
function deleteTeste(usuario: string | string[]) {
    if(typeof usuario == "string") {                    //typeof é um tipo de guarda(type guard). Utilizado quando precisamos verificar o tipo de um objeto dentro de bloco condicional
        console.log(usuario, "deletado");               //instance
    } else {
        var i;
        for(i=0; i < usuario.length; i++) {
            console.log(usuario[i], "deletado");
        } 
    }
}

// let x: string | number | boolean = 13;
// console.log(typeof(x));

// interface Z {x(): string}

// class A implements Z {
//     x(): string {
//         throw new Error("Method not implemented.");
//     }
//     class B implements Z {
//         x(): string {
//             throw new Error("Method not implemented.");
//         }
//     }
//     function exemploComInstanceof(parametro: Z) {
//         if(parametro instanceof A) {                     //instanceof é tipo de guarda, mas ele espera um tipo boolean; diferente do typeof() que espera um number
//             console.log("Sou a classe A");
//         } else if(parametro instanceof B) {
//             console.log("Sou a classe B");
//         }
//     }

//     exemploComInstanceof(new A());
// }


/**
 *      ENUM
 *          O enum nos permite declarar um conjunto de valores/constantes predefinidas
 *          Existe três formas de trabalhar com ele: Number; String e Heterogeneus
 *          o enum tipo number não necessita de um valor inícial, mas o tipo string sim
 */
// export enum DiaDaSemana {
//     Segunda = 1,
//     Terça = 2,
//     Quarta = 3,
//     Quinta = 4,
//     Sexta = 6,
//     Sabado = 6,
//     Domingo = 7
// }
// ele precisa de um valor inícial, depois ele incrementa mais +1. Se não tiver, ele começa do zero e vai incrementando+1
// export enum DiaDaSemana {
//     Segunda = 18,
//     Terca, 
//     Quarta,
//     Quinta, 
//     Sexta,
//     Sabado,
//     Domingo
// }
// Acessando o valor do enum
// let dia = DiaDaSemana[19];
// let diaNumero = DiaDaSemana[dia];
// let diaString = DiaDaSemana["Segunda"]

// ENum tipo string: precisa iniciar com um valor
// export enum DiaDaSemana {
//     Segunda = "Segunda-feira",
//     Teça = "Terça-feira",
//     Quarta = "Quarta-feira",
//     Quinta = "Quinta-feira",
//     Sexta = "Sexta-feira",
//     Sabado = "Sabádo",
//     domingo = "Domingo"
// }
// // para acessar valores do enum do tipo string, temos duas formas;
// console.log(DiaDaSemana.Sexta);
// console.log(DiaDaSemana['Sabado']);

// // Os enums Heterogeneous aceita os dois tipos de valores: string e números
// export enum Heterogeneous {
//     Segunda = 'Segunda-feira',
//     Terca = 1,
//     Quarta,
//     Quinta, 
//     Sexta, 
//     Sabado, 
//     Domingo = 18
// }
// // acessando o valor do Heterogeneous do enum
// console.log(Heterogeneous.Segunda);
// console.log(Heterogeneous['Segunda']);k

// console.log(Heterogeneous['Terca']);
// console.log(Heterogeneous[1]);

// console.log(Heterogeneous['Quarta']);
// console.log(Heterogeneous['Sexta']);
// console.log(Heterogeneous['Quinta']);
// console.log(Heterogeneous['Sabado']);
// console.log(Heterogeneous['Domingo']);






/**
 *      TUPLES
 *          É uma estrutura de dados que representam uma estrutura de dados simples semelhante a um array.
 *          dirente do Array, ele trabalha com diferentes tipos de dados.
 */
// let list: readonly [nome:string, idade: number, email: string] = ["Bill Gates", 65, "bill"];

// let list2: readonly [string, number] = ["Maria", 1];
// list.push("stevi", 2);
// console.log(list[0]);
// console.log(list[1]);



/**    READONLYARRAY    */
// ReadonlArray<t>: é um array que permite somente leitura
// let numerosDaMega: Readonly<number[]> = [8, 5, 5, 11, 4, 28]; 
// numerosDaMega[0] = 12; //error!
// numerosDaMega.push(23); //error
// numerosDaMega.pop(); 
// numerosDaMega.length = 100;

// export function parseAsync<T> (
//     data: Readonly<T> | ReadonlyArray<T> | Readable,
//     opts?: json2csv.Options<T>,
//     transformOpts?: TransFormOptions
// ): Promise<string>;

/**          ARRAY        */
// let numeros: number[] = [1, 2, 3];
// let textos: string[] = ["exemplo1", "exemplo 2", "exemplo 3"];

// let numeros2: Array<number> = [1, 2, 3];
// let textos2: Array<string> = ["exemplo 1", "exemplo 2", "exemplo 3"];
// numeros2.push(4);         // Usado para adicionar um novo elemento(push())
// textos2.push("agb")

// console.log(numeros2);
// console.log(textos2);


/**     STRING   */
//   string armazena valores do tipo texto.Crase(``) usada para concatenar
//   length: mostra o tamanho;
//   IndexOf: permite encontrar a posição de um caractere
// let cor: string = 'verdade';
// cor = 'azul';

// let nome: string = 'Anders Hejlsberg';
// let idade: number = 58;
// let sentence: string = `Olá, meu nome é ${ nome }, eu tenho ${idade} anos`;
// console.log(sentence.length)    //o length mostra o tamanho da string;
// console.log(sentence.indexOf('nome'))





/**      NUMBER      */
let octal: number = 0o745;
let binary: number = 0b1111;
let decimal: number = 34;
let hex: number = 0xf34d;

let octal2 = 0o745;
let binary2 = 0b1111;
let decimal2 = 34;
let hex2 = 0xf34d;



/**    BOOLEAN         */
// let ativo: boolean;
// ativo: false;
// ativo: true;

// let ativo1: boolean = true

// var languages: Array<string> = [];
// languages.push("Typescript");
// languages.push(3)