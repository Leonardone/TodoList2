var mongoose =require ('mongoose');
mongoose.connect("mongodb://admin:admin@ds133340.mlab.com:33340/todolist", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connesso al dataBEIS")
    }
});