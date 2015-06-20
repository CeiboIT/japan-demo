'use strict';

angular
  .module('jpndemo', [
	// third party modules
	'ngAnimate',
	'ngCookies',
	'ngTouch',
	'ngSanitize',
	'ngResource',
	'ngStorage',
	'ui.router',
	'ui.bootstrap',
	'ngMaterial',
	'firebase',
	'fireQuery',
	'ngAutocomplete',
	// our modules
	'config',
	'ceibo.ui.material.side-menu',
	'landingModule',
	'homeModule',
	'citiesModule',
	'regionsModule',
	'tasksModule',
	'worksModule',
	'authModule',
	'companiesModule'
  ])

  .constant('fireRef', 'https://japan-demo.firebaseio.com/')

  .run(function ($state, $rootScope) {
    $rootScope.$state = $state;
  })
