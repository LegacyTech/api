/*
  Autor : Matheus Alves
  Data de modificação : 05/05/2018
  Descrição : Arquivo de rotas para o endereco ( cidade e estado)
  Tabela : tbl_cidade e tbl_estado
*/

const router =  require('express').Router(); // Chama router do express
const enderecoController = require('../controllers/enderecoController.js');//Estancia metodos da controller endereco

//Rota que lista todas as cidades
router.get('/Cidade', function(req, res){

    enderecoController.listarCidades(res);//Chama a controller

});

//Rota que lista cidades de um estados
router.get('/CidadePorEstado' , function(req , res){

  let estado = req.query.estado; //Deve ser um INT

  enderecoController.listarCidadesPorEstado( estado , res);

});

//Rota que lista todos os estados
router.get('/Estado', function(req, res){

  enderecoController.listarEstados(res);//Chama a controller

});



module.exports = router;//Exporta o router para todos usarem
