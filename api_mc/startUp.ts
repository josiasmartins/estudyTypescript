import express, { Application, request, Response } from "express";
import database from "./infra/db";
import NewsController from "./controller/NewsController";

class StartUp {
    public app: Application;
    private _db: database = new database();

    constructor() {
        this.app = express();
        this._db.createConnect();
        this.routes();
    }

    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1"});
        });

        this.app.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
            return NewsController.get(req, res);
        });

        this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
            return NewsController.getById(req, res);
        });
    }
}

export default new StartUp();