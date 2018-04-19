/*
  Autor : Matheus Alves
  Data de modificação : 19/04/2018
  Descrição : Arquivo de rotas para as Viagenss
  Tabela : tbl_viagem
*/

const router =  require('express').Router(); // Chama router do express
const viagemController = require('../controllers/viagemController.js'); //Estancia metodos da controller usuario

//Rota raiz, que lista todas as viagens em aberto
router.get('/', function( req , res ){

  viagemController.listar( res );

});

module.exports = router; //Exporta o router
