angular.module('app').service('TodoSrv', function($http){
    const PORT=3000;

    var getTodos= function(){


      return  $http({
            method: 'GET',
            url: 'http://localhost:'+PORT+'/api/todolist'
        })
            .then(function(res){
               
                return res.data;
        })
            .catch(function(err){
                return err;
            });
    }

    var creaTodo= function(nuovo){
        console.log(nuovo);
        return $http({
            method: 'POST',
            url:'http://localhost:'+PORT+'/api/todolist',
            data: nuovo //si riferisce al nuovo di sopra, quindi senza virgolette
        }).then(function(res){
            
            return res.data;
        }).catch(function(err){
            return err;
        })
    }

    var deleteTodo = function(id){
        return $http({
            method:"DELETE",
            url:'http://localhost:'+PORT+'/api/todolist/'+id,
        }).then(function(res){
            return res.data;
        }).catch(function(err){
            return err;
        });
    }



    return{

        getTodos: getTodos,
        creaTodo: creaTodo,
        deleteTodo: deleteTodo
        
    }
});