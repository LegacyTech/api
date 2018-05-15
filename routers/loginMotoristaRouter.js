/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de rotas para o login do desktop
  Tabela : tbl_usuariodesktop
*/

const router =  require('express').Router(); // Chama router do express
const loginMotoristaController = require('../controllers/loginMotoristaController.js');//Estancia metodos da controller login

//Rota raiz
router.post('/', function(req, res){

    let post = req.body;

    //Pega valores do post
    let cpf = post.cpf;
    let dtNasc = post.dtNasc;

    loginMotoristaController.autentica(cpf, dtNasc, res);//Chama a controller

});

module.exports = router;//Exporta o router para todos usarem
