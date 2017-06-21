// framework express
var express = require('express');
// modulo body-parser, middleware para analisar o JSON
var bodyParser = require('body-parser');

// constantes de endereços URL
const urlClientes = "cliente"; 
const urlVendas   = "venda";
const urlFilmes   = "filme";

// cria o express e usa o parser como json
var app = express();
app.use(bodyParser.json());

// controle do 404
function notFound(res){
    res.status(404).send('Página não existe!');
}

// escuta a porta 8089 
app.listen(8089 ,function(){
    console.log('Trabalho final DM104 - INATEL');
});

// acessando o / retorna um status , poderia ser o WSDL
app.get('/',function(req , res){
    res.status(200).send('Trabalho final DM104 - INATEL');
});


// --- funcoes do / --- //
app.get('/' + urlClientes ,function(req , res){
    retorna cliente
});

app.get('/' + urlVendas ,function(req , res){
    retorna vendas
});

app.get('/' + urlFilmes ,function(req , res){
    retorna vendas
});



// --- funcoes do GET por id --- //
app.get('/'+urlVendas+'/:id' , function(req, res){
    
    retorna venda em especifico
});

app.get('/'+urlFilmes+'/:id' , function(req, res){
    
    retorna filme em especifico
});

app.get('/'+urlClientes+'/:id' , function(req, res){
    
    retorna cliente em especifico
});



// --- funcoes do POST --- //
app.post('/' + urlVendas , function(req, res){    
     faz o post da venda com itens
});

app.post('/' + urlFilmes , function(req, res){    
     faz o post de filme
});

app.post('/' + urlClientes , function(req, res){    
     faz o post do cliente
});



// --- funcoes do PUT --- //
app.put('/'+urlVendas+'/:id' , function(req, res){
    // atualiza venda com itens
});

app.put('/'+urlClientes+'/:id' , function(req, res){
    // atualiza cliente
});

app.put('/'+urlFilmes+'/:id' , function(req, res){
    // atualiza filme
});



// --- funcoes do DELETE --- //
app.delete('/'+urlVendas+'/:id' , function(req, res){
    deleta a venda com itens
});

app.delete('/'+urlFilmes+'/:id' , function(req, res){
    deleta o filme
});

app.delete('/'+urlClientes+'/:id' , function(req, res){
    deleta o cliente
});
