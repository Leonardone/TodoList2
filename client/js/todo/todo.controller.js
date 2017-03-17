angular.module('app').controller('TodoCtrl', function($scope, TodoSrv){



$scope.lista=[];
TodoSrv.getTodos().then(function(data){
    $scope.lista= data;
   

});

$scope.crea = function(){

    TodoSrv.creaTodo($scope.nuovo).then(function(data){
          $scope.nuovo= {};//pulisce la form
          return TodoSrv.getTodos()
         }).then(function(data){
               $scope.lista= data;

          })
       
      

}

$scope.elimina=function(id){
    TodoSrv.deleteTodo(id)
    .then(function(data){
        return TodoSrv.getTodos()
    }).then(function(data){
        $scope.lista=data;
    });

}

$scope.update=function(id, fatto){
    TodoSrv.updateTodo(id, fatto)
    .then(function(data){
        return TodoSrv.getTodos()
    }).then(function(data){
        $scope.lista=data;
    });
}



});