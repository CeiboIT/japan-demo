
'use strict';

angular.module('authModule', ['ngStorage'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('app.auth', {
				abstract: true,
				url: '/access',
				controller : 'bgrdCtrl as bgrd',
        		templateUrl: 'app/modules/auth/views/accessAbstract.origin.html'
			})

			.state('app.auth[login]', {
				url: '/login',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/login.html'
			})
			.state('app.auth[signup]', {
				url: '/signup',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/signup.html'
			})
			.state('app.auth[password]', {
				url: '/password',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/password.html'
			})
			.state('app.auth[register]', {
				url: '/register',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/register.html'
			})
	});
