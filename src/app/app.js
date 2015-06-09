'use strict';

angular
  .module('jpndemo', [
	// third party modules
	'ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router', 
	'ui.bootstrap', 
	// our modules
	'landingModule',
	'homeModule',
  ])

  .constant('fireRef', 'https://japan-demo.firebaseio.com/')

  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
  })
