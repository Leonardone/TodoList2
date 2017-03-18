angular.module('app').controller('TodoCtrl', function($scope, TodoSrv, $state, $location){



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
            if($state.current.name=='/form'){
                //  this.currentNavItem = "home";
                // $scope.selectedItem='';
                $state.go('/');

               
                // $location.path('/');
                // var el=angular.element(document.querySelector('#home'));
                // el.addClass('md-active');
                //  var el2=angular.element(document.querySelector('#home'));
                // el2.removeClass('md-unselected');

            }
            
            

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