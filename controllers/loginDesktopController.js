/*
  Autor : Matheus Alves
  Data de modificação : 17/04/2018
  Descrição : Arquivo de controller para o login do desktop
*/

const login = require('../models/loginDesktop.js');//Exporta model login

//Função que chama a model de autenticar
exports.autentica = function( email, senha, res ){

  //função da model que autentica
  login.autenticaUsuario( email , senha, function( result ){

    res.json( result ); //Retorna o json na tela

  });

}
