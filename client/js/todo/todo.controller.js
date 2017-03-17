angular.module('app').controller('TodoCtrl', function($scope, TodoSrv){



//$scope.lista=[]; commentato perchè usa quello scritto in ogni funzione
TodoSrv.getTodos().then(function(data){
    $scope.lista= data;
    $scope.lista.forEach(function(el){
        el.data=new Date(el.data);
    });
   

});

$scope.crea = function(){

    TodoSrv.creaTodo($scope.nuovo).then(function(data){
          $scope.nuovo= {};//pulisce la form
          return TodoSrv.getTodos()
         }).then(function(data){
               $scope.lista= data;
                $scope.lista.forEach(function(el){
                el.data=new Date(el.data);
            });

          })
       
      

}

$scope.elimina=function(id){
    TodoSrv.deleteTodo(id)
    .then(function(data){
        return TodoSrv.getTodos()
    }).then(function(data){
        $scope.lista=data;
         $scope.lista.forEach(function(el){
             el.data=new Date(el.data);
    });
    });

}

$scope.update=function(id, fatto){
    TodoSrv.updateTodo(id, fatto)
    .then(function(data){
        return TodoSrv.getTodos()
    }).then(function(data){
        $scope.lista=data;
         $scope.lista.forEach(function(el){
                el.data=new Date(el.data);
         });
    });
}



});