'use strict';

angular.module('ceibo-mukaeutsu', [
    //Third party
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    //Our modules
    'ceibo-mukaeutsu.landing'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
;
