/*
  Autor : Matheus Alves
  Data de modificação : 23/04/2018
  Descrição : Arquivo de model para viagem
  Tabela : tbl_viagem
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco
const PADRAO_SELECT = 'SELECT \
                          v.idViagem,\
                            DATE_FORMAT(v.dtPartida, "%d/%m/%Y") as dtIda,\
                            TIME_FORMAT(v.hrPartida , "%h:%i HRS") as hrIda,\
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
                          v.idPontoChegada = c.idPontoChegada '; //Pode virar uma view do db

//Lista todas as viagens
exports.listar = function( callback ){

  let sql = PADRAO_SELECT.concat(
            'WHERE\
                    v.finalizada = 0\
      			 ORDER BY\
      				v.dtPartida asc,\
              v.hrPartida asc\
      			 LIMIT 10');

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

//Procura e lista viagens com uma palavra passe
exports.procurar = function( destino , callback ){

  destino = "%".concat( destino , "%" );

  let sql = PADRAO_SELECT.concat(
          'WHERE\
          	c.nomePonto LIKE ?  AND v.finalizada = 0\
      		 ORDER BY\
      				v.dtPartida asc,\
              v.hrPartida asc');

  //Executa a query
  db.query( sql , [destino], function( error , results , fields ){

    //Verifica se há erros
    if( !error ){

      callback ( {resultado : results} ); //Retorna o callback

    }else{

      callback ( {sucesso : false , _error : error} ); //Retorna o callback

    }

  });

}

//Procura e lista viagens com um id
exports.procurarPorID = function( id , callback ){

  let sql = PADRAO_SELECT.concat(
          'WHERE\
          	v.idViagem = ?\
      		 ORDER BY\
      				v.dtPartida asc,\
              v.hrPartida asc');

  //Executa a query
  db.query( sql , [id], function( error , results , fields ){

    //Verifica se há erros
    if( !error ){

      callback ( {resultado : results} ); //Retorna o callback

    }else{

      callback ( {sucesso : false , _error : error} ); //Retorna o callback

    }

  });

}
