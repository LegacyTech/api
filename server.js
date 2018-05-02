/*
  Autor : Matheus Alves
  Data de modificação : 26/04/2018
  Descrição : Arquivo de start que contém as rotas
*/

//estancia as configurações do app
const app = require('./config/app_config.js');
const loginRouter = require('./routers/loginUserRouter');
const loginDesktop = require('./routers/loginDesktopRouter');
const usuario = require('./routers/usuarioRouter');
const viagem = require('./routers/viagemRouter');
const passagem = require('./routers/passagemRouter');
const endereco = require('./routers/enderecoRouter');

//Retorno Padrão
app.get("/", function( req, res ){

  res.send("Bem vindo a API Viação Asteroide");  //Retorno padrão

});

// ROTAS
app.use('/loginUser', loginRouter);
app.use('/loginDesktop', loginDesktop);
app.use('/Usuario', usuario);
app.use('/Viagem', viagem);
app.use('/Passagem', passagem);
app.use('/Endereco' , endereco);
