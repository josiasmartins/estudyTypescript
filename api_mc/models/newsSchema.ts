/**
 *      MODELS
 *          são a representação de um conjunto de informações sobre um determinado conceito
 *          todo models possui atributo, que é as informações que a referência
 */
import mongoose from "mongoose";

export const NewsSchema = new mongoose.Schema({
    titulo: { type: String},
    chapeu: { type: String},
    texto: { type: String},
    autor: { type: String},
    imagem: { type: String},
    dataPublicacao: { type: Date},
    tags: { type: String},
    link: { type: String},
    ativo: { type: Boolean}
});