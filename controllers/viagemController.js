/*
  Autor : Matheus Alves
  Data de modificação : 19/04/2018
  Descrição : Arquivo de controller para viagem
*/
const viagem = require('../models/DAO/viagem.js'); //Exporta a model viagem

//Função que chama a model de select
exports.listar = function ( res ){

  //Chama a model de select
  viagem.listar( function( result ){

    res.json( result); //Imprime o resultado

  });

}
