/*
  Autor : Matheus Alves
  Data de modificação : 02/05/2018
  Descrição : Arquivo de controller para os enderecos
*/

const estado = require('../models/DAO/estado.js');//Exporta model estado
const cidade = require('../models/DAO/cidade.js');//Exporta model cidade

//Função que chama a model de cidades
exports.listarCidades = function( res ){

  //função da model que lista cidades
  cidade.listar( function( result ){

    res.json( result ); //Retorna o json na tela

  });

}

//Função que chama a model de cidades por estados
exports.listarCidadesPorEstado = function( estado , res ){

  //função da model que lista CidadePorEstado
  cidade.listarPorEstado( estado , function( result ){

    res.json( result );//Retorna o json na tela

  });

}

//Função que chama a model de estado
exports.listarEstados = function( res ){

  //função da model que lista cidades
  estado.listar( function( result ){

    res.json( result ); //Retorna o json na tela

  });

}
