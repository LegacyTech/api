/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de login do Usuario / Cliente
  Tabela : tbl_cliente
*/

const router =  require('express').Router(); // Chama router do express
const loginController = require('../controllers/loginUserController.js'); //Estancia metodos da controller login

//Rota raiz
router.post('/', function(req, res){

    let post = req.body;
    
    //Pega valores do post
    let usuario = post.usuario;
    let senha = post.senha;

    loginController.autentica( usuario, senha, res ); //Chama a controller

});

module.exports = router;//Exporta o router para todos usarem
