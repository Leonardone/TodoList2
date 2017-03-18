angular.module('app', ['ui.router', 'ngMaterial']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('green')
    .warnPalette('red')
    .backgroundPalette('grey');
});