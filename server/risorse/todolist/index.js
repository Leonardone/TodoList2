var express= require('express');
var router = express.Router();
var Todos= require('./todo.controller.js')

router.get('/', Todos.getTodos);
router.delete('/', Todos.deleteTodo);
module.exports= router;