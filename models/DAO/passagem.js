/*
  Autor : Matheus Alves
  Data de modificação : 26/04/2018
  Descrição : Arquivo de model para passagem
  Tabela : tbl_passagem
*/

const db = require('../../config/db_config.js'); //Importa o arquivo do banco

const PADRAO_SELECT = 'SELECT \
                          v.idViagem,\
                            DATE_FORMAT(v.dtPartida, "%d/%m/%Y") as dtIda,\
                            TIME_FORMAT(v.hrPartida , "%h:%i HRS") as hrIda,\
                            TIME_FORMAT(v.hrChegada , "%h:%i HRS") as hrChegada,\
                            p.nomePonto as origem,\
                            c.nomePonto as destino,\
                            v.descricao,\
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

//Lista viagens compradas por usuario e que ainda não foram realizadas
exports.listarPorUser = function( id , ativo, callback ){

  let sql = PADRAO_SELECT.concat(
                  'INNER JOIN\
                    tbl_passagem as passagem\
                  ON\
                    passagem.idViagem = v.idViagem\
                  WHERE\
                    passagem.idCliente = ? AND passagem.ativo = ? \
                  ORDER BY\
                    dtIda\
                  DESC'
                )

  db.query( sql, [id , ativo] , function(error , results , fields){

    if( !error ){

      callback ( {'sucesso' : true , 'resultado' : results} );

    }else{

      callback ( {'sucesso' : false , _error : error} );

    }

  });

}
