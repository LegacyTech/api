/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de rotas para o login do desktop
  Tabela : tbl_usuariodesktop
*/

const router =  require('express').Router(); // Chama router do express
const loginDesktopController = require('../controllers/loginDesktopController.js');//Estancia metodos da controller login

//Rota raiz
router.post('/', function(req, res){

    let post = req.body;

    //Pega valores do post
    let email = post.email;
    let senha = post.senha;

    loginDesktopController.autentica(email, senha, res);//Chama a controller

});

module.exports = router;//Exporta o router para todos usarem
