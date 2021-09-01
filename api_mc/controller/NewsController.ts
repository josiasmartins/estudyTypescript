/**
 *      TRY E CATCH
 *          tratamento de exceções
 *      
 *          TRY
 *              consegue recuperar os erros que ocore no código
 *          CATCH
 *              faz o tratamento de erros que ocorreram e retorna uma exception que pode ser tratada e retornada no response
 */

import { NewsService } from "../services/newsService";
import { Request, Response } from "express";

class NewsController {
    private _service: NewsService;

    constructor() {
        this._service = new NewsService();
    }

    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            let result = await this._service.getAll(page, qtd);
            response.status(200).json({ result });
        }   
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            let result = await this._service.get(_id);
            response.status(200).json({ result });
        }  
        catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
}

export default new NewsController();