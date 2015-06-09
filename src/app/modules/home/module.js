
'use strict';

angular.module('homeModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.init.home', {
				//parent: 'landing',
				url: '/',
				controller : 'homeCtrl as home',
        		templateUrl: 'app/modules/home/views/home.html',
			})
	})
	
	//.directive('name', fuction() { ... return {...} ... })
	//.directive('name', fuction() { ... return {...} ... })

