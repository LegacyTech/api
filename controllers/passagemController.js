/*
  Autor : Matheus Alves
  Data de modificação : 29/05/2018
  Descrição : Arquivo de controller para a passagem
*/

const passagem = require('../models/DAO/passagem.js');//Exporta model passagem

exports.listarPorUser = function( id , ativo, res ){

  passagem.listarPorUser( id , ativo, function( result ){
    res.json( result );
  });

}

exports.comprarPassagem = function( passagem , res ){

  passagem.listarPorUser( 1 , 1 , function( result ){
    res.json( result );
  });

}
