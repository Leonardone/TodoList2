var path= require('path');
module.exports=function(app, express){
     //passi alla funzione variabili che vengono da altri file non path che invece è qui sul file


     //rotta per le todolist
    app.use('/api/todolist', require('./../risorse/todolist'));
    //abbiamo aggiunto api per differenziare le rotte tra server e client

};