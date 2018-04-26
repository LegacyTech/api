/*
  Autor : Matheus Alves
  Data de modificação : 26/04/2018
  Descrição : Arquivo de controller para a passagem
*/

const passagem = require('../models/DAO/passagem.js');//Exporta model passagem

exports.listarPorUser = function( id , ativo, res ){

  passagem.listarPorUser( id , ativo, function( result ){
    res.json( result );
  });

}
