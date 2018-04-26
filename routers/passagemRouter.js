/*
  Autor : Matheus Alves
  Data de modificação : 26/04/2018
  Descrição : Arquivo de rotas para as Passagens
  Tabela : tbl_passagem
*/

const router =  require('express').Router(); // Chama router do express
const viagemController = require('../controllers/passagemController.js'); //Estancia metodos da controller usuario

router.post('/PorUser' , function( req , res ){

  let id = req.body.id;
  let ativo = req.body.ativo;

  viagemController.listarPorUser( id , ativo , res )

});

module.exports = router;
