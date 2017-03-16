var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var todosSchema= new Schema({
    titolo:{
        type: String,
        required: [true, "inserisci il titolo"]
    },
    descrizione:{
        type: String,
        required: [true, "inserisci la descrizione"]
    },
    fatto:{
        type:Boolean,
        default:false
    }

});

module.exports= mongoose.model('Todos', todosSchema);