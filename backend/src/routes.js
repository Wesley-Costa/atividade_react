const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController');

routes.get('/usuarios', UserController.list);
routes.post('/usuarios', UserController.create);
routes.get('/usuarios/:id', UserController.show);
routes.delete('/usuarios/:id', UserController.delete);
routes.put('/usuarios/:id', UserController.update);

module.exports = routes;