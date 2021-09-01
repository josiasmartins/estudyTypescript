/**
 *      PROMISE
 *          é uma promesa
 *          sua ideia principal é representar fluxos assíncronos de forma sequencial, e favorece o tratamento de exceções
 */
import { Result } from "../infra/result";

export interface INewsService {
    get(id: string);

    getAll(page: number, qtd: number): Promise<Result>;
}