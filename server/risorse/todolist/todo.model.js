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
    },
    
     data:{
         type:Date,
         default:Date.now
    }


});


//aggiunge la data prima di salvare
// todosSchema.pre('save', function(next){
//     if(!this.data){
//      this.data=new Date();
//     }
  
//     next();
// });

module.exports= mongoose.model('Todos', todosSchema);