
'use strict';

angular.module('authModule', ['fireServiceModule'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('app.auth', {
				abstract: true,
				url: '/access',
        		templateUrl: 'app/modules/auth/views/accessAbstract.origin.html'
			})

			.state('app.auth[login]', {
				url: '/login',
				controller : 'authCtrl as login',
        		templateUrl: 'app/modules/auth/views/login.html'
			})
			.state('app.auth[register]', {
				url: '/register',
				controller : 'authCtrl as register',
        		templateUrl: 'app/modules/auth/views/register.html'
			})
	});
