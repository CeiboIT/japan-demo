
'use strict';

angular
  .module('jpndemo', [
    //Third party
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    //Our modules
    'landing',
    'locationsModule'
  ])

  .constant('fireRef', 'https://japan-demo.firebaseio.com/')

  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
  })