/**
 *      ASYNC E AWAIT
 *          ASYNC
 *              serve para deixar a função assíncrona e não deve bloquear o segmento principal do nosso código
 * 
 *          AWAIT
 *              a palavra await é utilizado dentro do async. Faz o fluxo da função assíncrona não seja interrompido, esperando um retorno da função
 */

import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";

export class NewsService implements INewsService {

    async get(_id: string) {
        let result = await NewsRepository.findById(_id);
        return result;
    }

    async getAll(page: number, qtd: number): Promise<Result> {
        let result = new Result();
        result.Page = page;
        result.Qtd = qtd;
        result.Total = await NewsRepository.count({});
        result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        return result;
    }
}