var express= require('express');
var router = express.Router();
var Todos= require('./todo.controller.js');


//crea il todo//
router.post('/', Todos.createTodo);


//prendi tutti i todos
router.get('/', Todos.getTodos);




//cancella un todo
router.delete('/:id([0-9a-f]{24})', Todos.deleteTodo);



module.exports= router;