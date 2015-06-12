
'use strict';

angular.module('authModule', ['ngStorage'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('auth', {
				abstract: true,
				url: '/access',
				controller : 'bgrdCtrl as bgrd',
        templateUrl: 'app/modules/auth/views/accessAbstract.origin.html'
			})

			.state('auth.login', {
				url: '/login',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/login.html'
			})
			.state('auth.signup', {
				url: '/signup',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/signup.html'
			})
			.state('auth.password', {
				url: '/password',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/password.html'
			})
			.state('auth.register', {
				url: '/register',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/register.html'
			})
	});
