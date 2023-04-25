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

// Listagem de todas os Produtos (GET)

router.get("/produtos", async (req, res) => {

    try {
        const produtos = await Produto.find()
        res.status(201).json(produtos);
    } catch (err) {
        res.status(500).json({ message: "Um erro aconteceu." });
    }
});

// Listagem de uma Produtos (GET)

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

// Atualização de uma Produtos (PUT)
router.put("/produto/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, descricao, quantidade, preco, desconto, dataDesconto, categoria } = req.body;

      const produtoExistente = await Tarefa.findByIdAndUpdate(id, {
        nome,
        descricao,
        quantidade,
        preco,
        desconto,
        dataDesconto,
        categoria
      });
      
      if(produtoExistente){
        res.json({message: "Tarefa editada."})
      } else {
        res.status(404).json({message: "Tarefa não encontrada."});
      }
    } catch(err) {
      console.log(err);
      res.status(500).json({message: "Um erro aconteceu."});
    }
  });


// Remoção de uma Produtos (DELETE)

module.exports = router;