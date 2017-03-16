angular.module('app').config(function($stateProvider, $urlRouterProvider ){


$urlRouterProvider.when('/', '/ciao');
$urlRouterProvider.otherwise('/');
$stateProvider.state('/ciao', {
    url:'/ciao',
    templateUrl:'/js/todo/todo.template.html',
    controller:'TodoCtrl'
});
});