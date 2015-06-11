
'use strict';

angular.module('citiesModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.cities', {
				url: '/cities',
				controller : 'citiesCtrl as cities',
        		templateUrl: 'app/modules/cities/views/cities.html',
			})
	})