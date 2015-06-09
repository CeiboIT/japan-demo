
'use strict';

angular.module('landingModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app', {
				abstract: true,
				controller : 'landingCtrl as landing',
        		templateUrl: 'app/modules/landing/views/landing.html',
			})

			.state('app.init', {
				abstract: true,
				template:'<div ui-view=""></div>'
			})

	})

	//.directive('name', fuction() { ... return {...} ... })
	//.directive('name', fuction() { ... return {...} ... })

