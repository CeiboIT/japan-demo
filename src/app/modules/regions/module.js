
'use strict';

angular.module('regionsModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.regions', {
				url: '/regions',
				controller : 'regionsCtrl as regions',
        		templateUrl: 'app/modules/regions/views/regions.html',
			})
	})
	