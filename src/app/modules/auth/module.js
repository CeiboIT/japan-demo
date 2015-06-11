
'use strict';

angular.module('authModule', ['ngStorage'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
/*
			.state('auth', {
				abstract: true,
				url: '/access',
				controller : 'bgrdCtrl as bgrd',
        		templateUrl: 'app/modules/auth/views/accessAbstract.html',
			})
*/
			.state('app.login', {
				url: '/login',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/login.html',
			})
			.state('app.signup', {
				url: '/signup',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/signup.html',
			})
			.state('app.password', {
				url: '/password',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/password.html',
			})
			.state('app.register', {
				url: '/register',
				controller : 'authCtrl as auth',
        		templateUrl: 'app/modules/auth/views/register.html',
			})
	})
	