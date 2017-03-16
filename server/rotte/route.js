var path= require('path');
var bodyparser= require('body-parser');
module.exports=function(app, express){
     //passi alla funzione variabili che vengono da altri file non path che invece è qui sul file



    app.use(bodyparser.json());
     //rotta per le todolist
    app.use('/api/todolist', require('./../risorse/todolist'));
    //abbiamo aggiunto api per differenziare le rotte tra server e client

};