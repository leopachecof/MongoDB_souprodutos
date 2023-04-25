const { model, Schema } = require("mongoose");

//(nome, descrição, quantidade, preço, desconto, dataDesconto, categoria, imagem do produto);
const Produto = model(
    "produto",
    new Schema({ //validação do documento
        nome: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        quantidade: {
            type: Number,
            required: true,
        },
        preco: {
            type: Number,
            required: true,
        },
        desconto: {
            type: Number,
            required: true,
        },
        dataDesconto: {
            type: Date,
            required: true,
        },
        categoria: {
            type: String,
            required: true,
        },
        imagem: {
            type: String,
            required: true,
        },
    })
);
module.exports = Produto;