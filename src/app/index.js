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
	'angularFileUpload',
	'ngFileUpload',
	// our modules
	'config',
	'ceibo.ui.material.side-menu',
	'lixil.ui.cover-photo',
	'lixil.ui.list-photo',
	'landingModule',
	'homeModule',
	'companiesModule',
	'worksModule',
	'tasksModule',
	'authModule',
  ])

	.constant('fireRef', 'https://japan-demo.firebaseio.com/')

	.run(function ($state, $rootScope) {
		$rootScope.$state = $state;
	})

	.config(function ($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	})