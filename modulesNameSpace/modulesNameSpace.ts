/**
 *      MODULES AND NAMESPACE
 *          é uma forma de organizar nosso código
 * 
 *          NAMESPACE
 *              ele permite agrupar nosso código, deixando agrupado por nome 
 */

class ContaSalario extends Conta {}
class ContaInvestimento extends Conta {}

// namespace
namespace Banco {
    export class Banco {
        numeroDaConta: number;
        titular: string;
        saldo: number;
        // outras informações
    }
}
class ContaPF extends Banco.Conta {}
class ContaPJ extends Banco.Conta {}

namespace Banco {
    export class ContaPF extends Conta {}
}

namespace Banco {
    export class ContaPJ extends Conta {}
}

// namespace aninhamento: um namespace dentro de outro
namespace Banco {
    export namespace Investimento {
        export class ContaSalario extends Conta {}
    }
}

namespace Banco {
    export namespace Investimento {
        export class ContaInvestimento extends Conta {}
    }
}

// chamar em outro arquivo
let novaContaInvetimento  = new Banco.Investimento.ContaInvestimento();
let novaContaSalario = new Banco.Investimento.ContaSalario();

/** 
 *      MODULES
 *          ajuda a organizar o nosso código, separando a nossa classe
 *          eles utilizam a mesma palavra reservada export com alguma diferença:
 *              precisamos de um module loader e para chamar um modulo dentro
 *              outro arquivo, utilizamos a palavra reservada import 
 * 
 *              module loader: é uma biblioteca que nos permite trabalhar com módule no projeto
 *              Bibliotecas mais famosas: CommonJs e require.js
*/
// conta.ts
export class conta {
    numeroDaConta: number;
    titular: string;
    saldo: number;
    // outras informações
}

// contaInvestimento.ts
import { Conta } from './conta';
export class ContaInvestimento extends Conta {};

// contaSalario.ts
import { Conta } from './Conta'
export class contaSalario extends Conta {};

// index.ts
import { ContaInvestimento } from './ContaInvestimento';
import { ContaSalario } from './contaSalario';

let novaContaInvestimento = new ContaInvestimento();
let novaContaSalario = new ContaSalario();