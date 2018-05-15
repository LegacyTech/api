/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de model para login do usuario / cliente
  Tabela : tbl_usuariodesktop
*/

const db = require('../config/db_config.js'); //Importa o arquivo do banco

//Função que autentica o usuario e retorna um callback
exports.autenticaMotorista = function( cpf, dtNasc, callback ){
    
    let sql = "SELECT idMotorista, CONCAT_WS(' ', nome, sobreNome) as nome, DATE_FORMAT( dtNasc , '%d/%m/%Y') as dtNasc FROM tbl_motorista WHERE cpf = ? AND DATE_FORMAT(dtNasc, '%d/%m/%Y') = ?";
    
    //Executa a query
    db.query( sql , [cpf, dtNasc] , function( error, results, fields ){

      //Verifica se houve erro e se voltou um resultado
      if( !error  && results.length == 1 ){

        callback ( {sucesso:true , msg: "Logado com sucesso", usuario : results[0]} ); //Retorna o callback

      }else{

        callback ( {sucesso:false , msg: "cpf ou data incorretos"} ); //Retorna o callback

      }

    });

}
