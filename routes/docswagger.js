//  SWAGGER - POST - Adicionar produto
/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: API para adicionar produtos
 * /produtos:
 *   post:
 *     summary: Criar um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       200:
 *         description: Novo produto adicionado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Error no servidor
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *           description: o nome do produto
 *         descricao:
 *           type: string
 *           description: detalhes do produto
 *         quantidade:
 *           type: number
 *           description: quantidade de produtos
 *         desconto:
 *           type: number
 *           description: Valor do desconto
 *         dataDesconto:
 *           type: date
 *           format: date-time
 *           description: A data limite do desconto
 *         categoria:
 *           type: string
 *           description: categoria do produto
 *         imagem:
 *           type: string
 *           description: imagem do produto
 *         id:
 *           type: string
 *           description: Id gerado automaticamente pelo Banco de Dados
 *       example:
 *           _id: 6446caa08bb586f594f49848,
 *           nome: Tênis,
 *           descricao: Para corrida,
 *           quantidade: 1,
 *           preco: 299,
 *           desconto: 0.1,
 *           dataDesconto: 2023-05-01T00:00:00.000Z,
 *           categoria: Esporte,
 *           imagem: dGVzdGU=,
 *           __v": 0
 */

//  SWAGGER - GET - Listagem de todos os produtos
/**
 * 
 * @swagger
 * tags:
 *   name: Produtos
 *   description: The books managing API
 * /Produtos:
 *   get:
 *     summary: Listar todos os produtos
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               nome:
 *                  type: string
 *                  description: o nome do produto
 *               example:
 *                   _id: 6446caa08bb586f594f49848,
 *                   nome: Tênis,
 *                   descricao: Para corrida,
 *                   quantidade: 1,
 *                   preco: 299,
 *                   desconto: 0.1,
 *                   dataDesconto: 2023-05-01T00:00:00.000Z,
 *                   categoria: Esporte,
 *                   imagem: dGVzdGU=,
 *                   __v": 0
 *     responses:
 *       200:
 *         description: Lista de produtos.
 *         content:
 *           application/json:
 *            schema:
 *             type: array
 *             items:
 *               nome:
 *                  type: string
 *                  description: o nome do produto
 *               example:
 *                   _id: 6446caa08bb586f594f49848,
 *                   nome: Tênis,
 *                   descricao: Para corrida,
 *                   quantidade: 1,
 *                   preco: 299,
 *                   desconto: 0.1,
 *                   dataDesconto: 2023-05-01T00:00:00.000Z,
 *                   categoria: Esporte,
 *                   imagem: dGVzdGU=,
 *                   __v": 0
 *       500:
 *         description: Ocorreu algum erro
 *
 */


//  SWAGGER - PUT - atualizar produto
/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID.
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto a ser atualizado.
 *       - in: body
 *         name: body
 *         required: true
 *         description: Dados do produto a serem atualizados.
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               description: O nome do produto.
 *             descricao:
 *               type: string
 *               description: Detalhes do produto.
 *             quantidade:
 *               type: integer
 *               description: Quantidade de produtos.
 *             desconto:
 *               type: number
 *               description: Valor do desconto.
 *             dataDesconto:
 *               type: string
 *               format: date-time
 *               description: A data limite do desconto.
 *             categoria:
 *               type: string
 *               description: Categoria do produto.
 *             imagem:
 *               type: string
 *               description: Imagem do produto.
 *           example:
 *             nome: Tênis
 *             descricao: Corrida
 *             quantidade: 1
 *             desconto: 0.1
 *             dataDesconto: 2023-05-01T00:00:00.000Z
 *             categoria: Esporte
 *             imagem: dGVzdGU=
 *     responses:
 *       '200':
 *         description: Produto atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *       '404':
 *         description: Produto não encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro.
 *       '500':
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de erro.
 */





//  SWAGGER - GET - Listar um determinado produto
/**
 * @swagger
 *   description: Rota para listar um determinado produto.
 * /produtos/{id}:
 *   get:
 *     summary: Listar produto
 *     tags: [Produtos]
 *     parameters:
 *         name: id
 *         in: path
 *         description: ID do produto a ser listado
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                  type: string
 *                  description: o nome do produto
 *               descricao:
 *                  type: string
 *                  description: detalhes do produto
 *               quantidade:
 *                  type: number
 *                  description: quantidade de produtos
 *               desconto:
 *                  type: number
 *                  description: Valor do desconto
 *               dataDesconto:
 *                  type: date
 *                  format: date-time
 *                  description: A data limite do desconto
 *               categoria:
 *                  type: string
 *                  description: categoria do produto
 *               imagem:
 *                  type: string
 *                  description: imagem do produto
 *               id:
 *                  type: string
 *                  description: Id gerado automaticamente pelo Banco de Dados
 *             example:
 *               - nome: Tênis,
 *               - descricao: Corrida,
 *               - quantidade: 1,
 *               - desconto: 0.1,
 *               - dataDesconto: 2023-05-01T00:00:00.000Z,
 *               - categoria: Esporte,
 *               - imagem: dGVzdGU=,
 *               - _id: 6446caa08bb586f594f49848
 *     responses:
 *       200:
 *         description: Produto listado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Um problema foi encontrado.
 */

//  SWAGGER - GET - Listar produtos a partir de nome
/**
 * @swagger
 *   description: Rota para listar um determinado produto.
 * /produtos/{nome, categoria, precoMin && precoMax}:
 *   get:
 *     summary: Listar produto por nome, categoria ou preço mínimo/máximo
 *     tags: [Produtos]
 *     parameters:
 *         name: nome, categoria, precoMin && precoMax
 *         in: path
 *         description: Lista o produto por nome, categoria ou preço mínimo e máximo
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                  type: string
 *                  description: o nome do produto
 *               descricao:
 *                  type: string
 *                  description: detalhes do produto
 *               quantidade:
 *                  type: number
 *                  description: quantidade de produtos
 *               desconto:
 *                  type: number
 *                  description: Valor do desconto
 *               dataDesconto:
 *                  type: date
 *                  format: date-time
 *                  description: A data limite do desconto
 *               categoria:
 *                  type: string
 *                  description: categoria do produto
 *               imagem:
 *                  type: string
 *                  description: imagem do produto
 *               id:
 *                  type: string
 *                  description: Id gerado automaticamente pelo Banco de Dados
 *             example:
 *               - nome: Tênis,
 *               - descricao: Corrida,
 *               - quantidade: 1,
 *               - desconto: 0.1,
 *               - dataDesconto: 2023-05-01T00:00:00.000Z,
 *               - categoria: Esporte,
 *               - imagem: dGVzdGU=,
 *               - _id: 6446caa08bb586f594f49848
 *     responses:
 *       200:
 *         description: Produto listado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Um problema foi encontrado.
 */

//  SWAGGER - DELETE - Exclui produto
/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: API para deletar produtos
 * /produtos{id}:
 *   delete:
 *     summary: Deletar um produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       200:
 *         description: Produto deletado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       500:
 *         description: Error no servidor
 *         example:
 *               - nome: Tênis,
 *               - descricao: Corrida,
 *               - quantidade: 1,
 *               - desconto: 0.1,
 *               - dataDesconto: 2023-05-01T00:00:00.000Z,
 *               - categoria: Esporte,
 *               - imagem: dGVzdGU=,
 *               - _id: 6446caa08bb586f594f49848
 *
 */


