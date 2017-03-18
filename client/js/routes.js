angular.module('app').config(function($stateProvider, $urlRouterProvider ){


$urlRouterProvider.when('', '/');
$urlRouterProvider.otherwise('/');
$stateProvider
.state('/', {
    url:'/',
    templateUrl:'/js/todo/todo.template.html',
    controller:'TodoCtrl'
})
.state('/material',{
    url:'/material',
    templateUrl:'/js/todo/material.template.html',
    controller:'MaterialCtrl'

})
.state('/form',{
    url:'/form',
    templateUrl:'/js/todo/form.html',
    controller:'TodoCtrl'
})
});