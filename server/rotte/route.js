var path= require('path');
var bodyparser= require('body-parser');
module.exports=function(app, express){
     //passi alla funzione variabili che vengono da altri file non path che invece è qui sul file



    app.use(bodyparser.json());

    app.use('/jquery', express.static(path.join(__dirname, "..", "..", "node_modules","jquery", "jquery")));
    app.use('/bootstrap', express.static(path.join(__dirname, "..", "..", "node_modules","bootstrap", "dist")));
    app.use('/angular', express.static(path.join(__dirname, "..", "..", "node_modules", "angular")));
    app.use('/angular-ui-router', express.static(path.join(__dirname, "..", "..", "node_modules", "angular-ui-router")));

    app.use('/js', express.static(path.join(__dirname, "..", "..", "client", "js")));
    app.use('/css', express.static(path.join(__dirname, "..", "..", "client", "css")));
    //rotta index
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"))
    })
     //rotta per le todolist
    app.use('/api/todolist', require('./../risorse/todolist'));
    //abbiamo aggiunto api per differenziare le rotte tra server e client

};