const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const LoginController = require('./controllers/LoginController');
const EnqueteController = require('./controllers/EnqueteController');

const routes = express.Router();

routes.post('/login',LoginController.create);

routes.get('/pessoas',PessoaController.index);
routes.post('/pessoas',PessoaController.create);
routes.put('/pessoas/:id',PessoaController.updatePessoa);

routes.get('/enquetes',EnqueteController.index);
routes.post('/enquetes',EnqueteController.create);




module.exports = routes;