angular.module('app').config(function($stateProvider, $urlRouterProvider ){


$urlRouterProvider.when('', '/');
$urlRouterProvider.otherwise('/');
$stateProvider.state('/', {
    url:'/',
    templateUrl:'/js/todo/todo.template.html',
    controller:'TodoCtrl'
});
});