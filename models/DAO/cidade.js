/*
  Autor : Matheus Alves
  Data de modificação : 26/04/2018
  Descrição : Arquivo de model para cidade
  Tabela : tbl_cidade
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

//Lista todos os registros
exports.listar = function( callback ){

  db.query('SELECT * FROM tbl_cidade' , function( error , results, fields ){

    if( !error ){

      callback ( {sucesso : true , resultado : results} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}

//Lista os registros com codEstado especifico
exports.listarPorEstado = function( estado , callback ){

  db.query('SELECT * FROM tbl_cidade WHERE codEstado = ?' , [estado] ,function( error , results, fields ){

    if( !error ){

      callback ( {sucesso : true , resultado : results} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}
