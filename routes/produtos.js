const { Router } = require("express");
const Produto = require("../models/produto");
const router = Router();
const multer = require('multer');
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  },
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  }
})
const upload = multer({ storage })
// Fazer o CRUD

// Inserção de Produto (POST)
router.post("/produtos", upload.single('imagem'), async (req, res) => {
    try {
        // imagem:
    const file = req.file;
    // Coletar os dados do body
    console.log(file);
    const { nome, descricao, quantidade, preco, desconto, dataDesconto, categoria } = req.body;
    // Criando um novo documento do Mongo
    const produto = new Produto({ nome, descricao, quantidade, preco, desconto, dataDesconto, categoria, imagem: file.filename});
    // console.log(imagem);
    // Inserir o documento na coleção produto
    await produto.save();
    res.status(201).json(produto);
} catch (err) {
  console.log(err);
  res.status(500).json({ message: "Um erro aconteceu." });
}
});

// Listagem de todos os Produtos (GET)
router.get("/produtos", async (req, res) => {

    try {
        const produtos = await Produto.find()
        res.status(201).json(produtos);
    } catch (err) {
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Listagem de um Produto (GET)
router.get("/produtos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const produtoExistente = await Produto.findById(id);
        if(produtoExistente) {
          res.json(produtoExistente)
        } else {
          res.status(404).json({message: "Um erro aconteceu."});
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({message: "Um erro aconteceu."});
      }
    });

// Atualização de Produtos (PUT)
router.put("/produtos/:id", upload.single('imagem'), async (req, res) => {
    try {
      const { id } = req.params;
      const file = req.file;
      const { nome, descricao, quantidade, preco, desconto, dataDesconto, categoria } = req.body;

      const produtoExistente = await Produto.findByIdAndUpdate(id, { nome, descricao, quantidade, preco, desconto, dataDesconto, categoria, imagem: file.filename});
      
      if(produtoExistente){
        res.json({message: "Produto editado."})
      } else {
        res.status(404).json({message: "Produto não encontrado."});
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({message: "Um erro aconteceu."});
    }
  });

// Listagem de Produtos por nome, categoria, preço (GET)
router.get("/produto", async (req, res) => {  // Rota de GET para "/produtos"
  try {
    // Extrai os parâmetros de consulta da requisição
    const { nome, categoria, precoMin, precoMax } = req.query;

    // Define o objeto filtro com base nos parâmetros de consulta
    const filtro = {};

    // Se o parâmetro "nome" estiver definido, adiciona uma expressão regular à propriedade "nome" do objeto filtro
    if (nome) {
      filtro.nome = new RegExp(nome, "i"); // a flag "i" indica que a busca deve ser case-insensitive
    }

    // Se o parâmetro "categoria" estiver definido, adiciona a categoria à propriedade "categoria" do objeto filtro
    if (categoria) {
      filtro.categoria = categoria;
    }

    // Se os parâmetros "precoMin" e "precoMax" estiverem definidos, adiciona um objeto com as propriedades "$gte" e "$lte" à propriedade "preco" do objeto filtro
    // Isso retorna produtos com preços entre precoMin e precoMax
    if (precoMin && precoMax) {
      filtro.preco = { $gte: precoMin, $lte: precoMax };
    }
    // Se apenas o parâmetro "precoMin" estiver definido, adiciona um objeto com a propriedade "$gte" à propriedade "preco" do objeto filtro
    // Isso retorna produtos com preços maiores ou iguais a precoMin
    else if (precoMin) {
      filtro.preco = { $gte: precoMin };
    }
    // Se apenas o parâmetro "precoMax" estiver definido, adiciona um objeto com a propriedade "$lte" à propriedade "preco" do objeto filtro
    // Isso retorna produtos com preços menores ou iguais a precoMax
    else if (precoMax) {
      filtro.preco = { $lte: precoMax };
    }

    // Executa a consulta ao banco de dados com base no objeto filtro e retorna os resultados como uma resposta JSON
    const produtos = await Produto.find(filtro);
    res.json(produtos);
  } catch (error) {
    // Se ocorrer um erro, retorna uma mensagem de erro e um status HTTP 500
    console.log("Ocorreu um erro ", error);
    res.status(500).json({ message: "Ocorreu um erro ", error });
  }
});
        
// Remoção de uma Produtos (DELETE)
router.delete("/produtos/:id", async (req, res) => {
  try {
    // Checa se a tarefa existe enquanto remove
    const { id } = req.params;
    const produtoExistente = await Produto.findByIdAndRemove(id);
    if(produtoExistente) {
      res.json({message: "Produto excluído."});
    } else {
      res.status(404).json({message: "Produto não encontrado."});
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({message: "Um erro aconteceu."});
  }
});


module.exports = router;