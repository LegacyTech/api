/*
  Autor : Matheus Alves
  Data de modificação : 19/04/2018
  Descrição : Arquivo de model para viagem
  Tabela : tbl_viagem
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

exports.listar = function( callback ){

  let sql = 'SELECT \
            	v.idViagem,\
                v.dtPartida as dtIda,\
                v.hrPartida as hrIda,\
                p.nomePonto as origem,\
                c.nomePonto as destino,\
                v.valor as preco\
            FROM \
            	tbl_viagem as v\
            INNER JOIN\
            	tbl_partida as p\
            ON\
            	v.idPontoPartida = p.idPontoPartida\
            INNER JOIN\
            	tbl_chegada as c\
            ON\
            	v.idPontoChegada = c.idPontoChegada';

  //Executa a query
  db.query( sql , function( error , results, fields ){

    //Verifica se retornou algo
    if( !error && results.length > 0 ){

      callback ( {resultado : results} );

    }else{

      callback ( {sucesso : false , _error : error} );

    }

  });

}
