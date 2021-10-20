/**
 * As partes que estão comentadas foram feitas nos momentos que ocorria uma grande alteração
 * no código, como partes que foram colocadas em outros arquivos, ou até partes que foram apagadas do código
 * 
 * Obs: Todos os passos de forma minuciosa foram seguidos assim como foi mostrado na aula.
*/

const express = require('express')
const routes = express.Router()
// const knex = require('knex')
// const crypto = require('crypto')
// const connection = require('./database/connection')
const UserController = require('./controller/UserController');

routes.get('/users', UserController.list);
routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;

//------------------------------------------------------
// routes.post('/users', async (req, res) => {
//     const id = crypto.randomBytes(4).toString('hex')
//     const {nome, email, idade, empresa} = req.body
//     await connection('users').insert({
//         id,
//         nome,
//         email,
//         idade,
//         empresa
//     });
//     console.log(id)
//     res.json();
// })

// routes.get('/users', async (req, res) => {
//     const users = await connection('users').select('*');
//     res.json(users);
// })

// routes.get('/users', (req, res) => {
//     const params = req.query;
//     console.log(params)
//     res.json(params)
// })

// routes.post('/users/:id', (req, res) => {
//     const params = req.params;
//     console.log(params)
//     res.json(params)
// })

// routes.post('/users', (req, res) => {
//     const params = req.body;
//     console.log(params)
//     res.json(params)
// })

//---------------------------------------------------
/**
 * Query: Selct * from users;
 * uery Builders: table('user').select(*).where()
 */

/**
 * GET: buscar/listar uma informação no backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação
 * DELETE: deletar uma informação do backend
 */

//  app.get('/users', (req, res) => {
//     res.json({
//         nome: 'wesley',
//         empresa: 'uesb'
//     })
// })

// app.post('/users', (req, res) => {
//     res.json({
//         nome: 'Wesley',
//         empresa: 'UESB',
//         requisicao: 'p'
//     })
// }) 

// app.put('/users', (req, res) => {
//     res.json({
//         nome: 'Wesley',
//         empresa: 'UESB',
//     })
// }) 

/**
 * Parâmentros
 * Query: parametros nomeados enviados na rota
 * Route params: parametros para identificar um recurso
 * Request body: corpo da requisição
 */

// http://localhost:3001/users?nome=wesley&idade=21