var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var tasks = {};
var sequenceId = 0;

// controle do 404
function notFound(res){
    res.status(404).send('Página não existe!');
}

app.listen(8089 ,function(){
    console.log('ola express');
});

// acessando o / retorna tudo
app.get('/',function(req , res){
    res.json(tasks);
});

// GET 
app.get('/:id' , function(req, res){
    var task = tasks[req.params.id];
    if (task){
        res.status(200).json(task);
    }else {
        notFound(res);
    }
});

// POST 
app.post('/' , function(req, res){
    var newTask = {
        id: ++sequenceId,
        done: req.body.done,
        description: req.body.description
    };

    tasks[sequenceId] = newTask;
    res.status(200).json(newTask);
});

// PUT
app.put('/:id' , function(req, res){
    var task = tasks[req.params.id];
    if (task){
        task.done = req.body.done;
        task.description = req.body.description;
        res.status(200).json(task);
    }else{
        notFound(res);
    }   
});

// DELETE
app.delete('/:id' , function(req, res){
    var task = tasks[req.params.id];
    if (task){
        delete tasks[req.params.id];
        res.status(200).send('Apagou!');
    }else{
        notFound(res);
    }
});
