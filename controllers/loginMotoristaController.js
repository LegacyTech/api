/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de controller para o login do desktop
*/

const login = require('../models/loginMotorista.js');//Exporta model login

//Função que chama a model de autenticar
exports.autentica = function( cpf, dtNasc, res ){

  //função da model que autentica
  login.autenticaMotorista( cpf , dtNasc, function( result ){

    res.json( result ); //Retorna o json na tela

  });

}
