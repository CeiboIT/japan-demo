
'use strict';

angular.module('worksModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.works', {
				url: '/works',
				controller : 'worksCtrl as works',
        		templateUrl: 'app/modules/works/views/works.html',
			})
	})
	