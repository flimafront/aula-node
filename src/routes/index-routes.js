const express = require('express');

//Definindo Rotas
var router = express.Router(); //Intercepta todas as rotas

//MIDDLEWARE
router.use(function(req, res, next){
    console.log('Interceptação pelo middleware ok!');
    //log
    next();
});

//Rota teste
router.get('/', function(req, res){
    res.json({'message':'Ok, rota de teste funcionando'});
});

module.exports = router;