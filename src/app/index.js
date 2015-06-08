'use strict';

angular.module('ceibo-mukaeutsu', [
    //Third party
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    //Our modules
    'landing',
    'locationsModule'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    //$urlRouterProvider.otherwise('/');

    $stateProvider
      .state('landing', {
        url: '/landing',
        abstract: true,
        template: '<div ui-view></div>'
      })

      .state('landing.init', {
        url: '/init',
        template: 'app/modules/landing/landing.html',
        controller : 'landingController as landing'
      })
  })

  .constant('fireRef', 'https://japan-demo.firebaseio.com/')
;
