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
	"ngMaterial",
	// our modules
	'landingModule',
	'homeModule',
	'citiesModule',
	'regionsModule',
	'tasksModule',
	'worksModule',

  ])

  .constant('fireRef', 'https://japan-demo.firebaseio.com/')

  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
  })
