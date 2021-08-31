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
 *          CONSTRUCTOR
 *              usado para acessar o valor e atribuir o valor do seus parâmetros aos nosso atributos
 * 
 *      MÉTODOS
 *          são responsavéis por definir e realizar um determinado comportamento
 * 
 *      HERANÇA
 *          nos permite herdar as heranças através da palavra reservada extends
 * 
 */
// export class Conta {
//     numeroDaConta: number;
//     titular: string;
//     private saldo: number;
// }

// constructor(numeroDaConta: number, titular: string, saldo: number) {
//     this.numeroDaConta = numeroDaConta;
//     this.titular = titular;
//     this.saldo = saldo;
// }

// //  método
// consultaSaldo(): string {
//     return `O seu saldo atual é: ${this.saldo}`;
// }
// adicionaSaldo(saldo: number): void {
//     this.saldo + slado;
// }

// sacarDoSaldo(valor: number): void {
//     this.saldo -= visualViewport;
// }

// //  implementação da classe conta
// const primeiraConta = new conta(1, "Thiago Adriano", 1000 ); // new: para reservada para instanciar/criar um novo objeto a partir de uma classe

// //  herença
// // class ContaPF extends Conta {}
// // class ContaPJ extends Conta {}

// // const pessoaFisica = new ContaPF(1, "Thiago", 100);
// // const pessoaJuridica = new ContaPJ(1, "Thiago", 1000);


// class ContaPF extends Conta {
//     cpf: number;

//     constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number) {
//         super(numeroDaConta, titular, saldo);
//         this.cpf = cpf;
//     }
// }

// // Adicinando o nnpj na conta pj
// class ContaPJ extends Conta {
//     cnpj: number;

//     constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number) {
//         super(numeroDaConta, titular, saldo);
//         this.cnpj = cnpj
//     }
// }

// const pessoaJuridica = new ContaPJ(123456, 1, "Thiago Adriano", 100);


/**
 *      FOREACH
 *          foreach é uma simplificação do operador for para trabalhar com coleções de dados
 *          ele permite acessar cada elemento individualmente iterando sobre toda a coleção
 */
// var language = ["c#", "java", "javascript", "typescript"];

// language.forEach(element => {
//     console.log(element);
// });

/**
 *      FOR
 *          Semelhante ao while, repete o bloco de código enquanto for verdadeira
 *          a diferença é que passamos um volor inícial e final para o loop    
 */
// var languages = ["c#", "java", "javascript", "typescript"];
// for(let i = 0; i < languages.length; i++) {
//     console.log(languages[i]);
// }


/**
 *      WHILE
 *          A estrutura de condição while
 *          ele repete uma condição enquanto ele for verdadeira
 *      
 *      DO-WHILE
 *          a diferente entre os dois é que o do-while vai repiter pelo uma vez
 *          mesmo sendo falso
 */
// let condicao = true;

// while(condicao) {
//     console.log("Carregando...");
// }

//  do-while
// let condicao1 = true;
// {
//     console.log("load...")
// }
// while(condicao1);


/**
 *      SWITCH 
 *          A instrução if é indicado para pequenos trechos. 
 *          o switch é indicado para trecho maior de código
 *          podemos validar mais de uma condição dentro switch
 */      
// let perfil = 'admin';

// switch(perfil) {
//     case "superuser":
//         console.log("Super Usuário");
//         break;
//     case "maneger":
//          console.log("Gerente");
//          break;
//     case "admin":
//         console.log("Administrador");
//         break;
//     case "user":
//         console.log("Usuário comum");
//         break;
//     default:
//         console.log("sem perfil");
//         break;
// }



/**
 *      NULLISH COALESCING
 *          Nullish Coalescing permite verificar se os valores são null ou undefined
 *          utilizando os operadores ??
 */
// let perfil = "admin";
// let perfil = null;
// console.log(perfil ?? 'Usuário comum')
// console.log(perfil ?? 'Usuário comum')

/**
 *      ESTRUTURA DE CONTROLE DE REPETIÇÃO
 *          Podemos pensar em estrutura de controle como um bloco que análisa as variáveis e escolhe uma direção para seguir com bases nos parâmetros predefinidos
 *          processo básico para tomada de decisões.
 * 
 *          IF-ELSE
 *              trabalha com valores booleanos
 *          
 *              
 */
// let conditional = false;

// if(conditional) {
//     console.log("a variável está com um valor true");
// } else {
//     console.log("a variável está com o valor false")
// }

// // IF-ELSE-IF
// let perfil = 'admin';

// if(perfil == "superuser") {
//     console.log("super usuário");
// } else if(perfil == "admin") {
//     console.log("Administrador");
// } else {
//     console.log("usuário comum");
// }

// // OPERADOR TERNÁRIO: avalia uma expressão booleana e retorna o resultado de uma das duas expressões
// let perfil = "admin";
// console.log(perfil == "superuser" ? "Super usuário": perfil == "admin" ? "Administrador": "Usuário comum");

// console.log(perfil == "superuser" ? "Super usuário": perfil == "admin" ? "administrador": "")




/**
 *  TYPE ASSERTIONS
 *      pode alterar o type de uma variável, sem que o compilador envia uma exception
 * 
 */
// function typeAssertions(codigoAny: any) {
//     let codigoNumber: number = <number>codigoAny;
//     return codigoNumber * 10;
// }
// typeAssertions(10);


// /**
//  *  NEVER
//  *      indica que algo nunca deve acontecer
//  *      o type NEVER não pode receber um valor
//  */
// // funções com exception
// function verificandoTipo(x: string | number): boolean {
//     if(typeof x === "string") {
//         return true;
//     } else if(typeof x === "number") {
//         return false
//     }
//     return fail("Esse método não aceita esse tipo de type!");
// }

// function fail(message: string): never {throw new Error(message); }

// verificandoTipo("teste String");
// verificandoTipo(10);
// let ativo = true;
// verificandoTipo(ativo);

// // funções sem retorno
// function ugrade(): never {
//     while(true) {
//         console.log("Carregando processos");
//     }
// }



/**
 *  VOID
 *    Ele não terá nenhum retorno
 *    o type VOID pode receber valor null, que indica ausência de um objeto, ou undefined, que indica a ausência que qualquer valor
 * 
 */
// function log(): void {
//     console.log('Sem retorno');
// }


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
// let variavelAny: any = "variavel";
// variavelAny = 34;
// variavelAny = true;


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
// function deleteTeste(usuario: string | string[]) {
//     if(typeof usuario == "string") {                    //typeof é um tipo de guarda(type guard). Utilizado quando precisamos verificar o tipo de um objeto dentro de bloco condicional
//         console.log(usuario, "deletado");               //instance
//     } else {
//         var i;
//         for(i=0; i < usuario.length; i++) {
//             console.log(usuario[i], "deletado");
//         } 
//     }
// }

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
// let octal: number = 0o745;
// let binary: number = 0b1111;
// let decimal: number = 34;
// let hex: number = 0xf34d;

// let octal2 = 0o745;
// let binary2 = 0b1111;
// let decimal2 = 34;
// let hex2 = 0xf34d;



/**    BOOLEAN         */
// let ativo: boolean;
// ativo: false;
// ativo: true;

// let ativo1: boolean = true

// var languages: Array<string> = [];
// languages.push("Typescript");
// languages.push(3)