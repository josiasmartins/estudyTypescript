"use strict";
/**
 *      TRY E CATCH
 *          tratamento de exceções
 *
 *          TRY
 *              consegue recuperar os erros que ocore no código
 *          CATCH
 *              faz o tratamento de erros que ocorreram e retorna uma exception que pode ser tratada e retornada no response
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
class NewsController {
    constructor() {
        this._service = new newsService_1.NewsService();
    }
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = request.params.page ? parseInt(request.params.page) : 1;
                const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
                let result = yield this._service.getAll(page, qtd);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = request.params.id;
                let result = yield this._service.get(_id);
                response.status(200).json({ result });
            }
            catch (error) {
                response.status(500).json({ error: error.message || error.toString() });
            }
        });
    }
}
exports.default = new NewsController();