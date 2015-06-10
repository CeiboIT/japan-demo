
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

	.directive('panelstatHeader', function () {
	    return {
	        restrict: 'E',
	        scope: {
	            color: '@',
	            number: '@',
	            loading: '=loading', //esto esta asi porque con @ no andaba
	            titulo: '@',
	            icon: '@',
	            percentage: '@'
	        },
	        template: '<div class="panel panel-default panel-stat2" ng-class="(number >0 && !loading) ? color : \'bg-light\'">'
	                    + '<div class="panel-body">'
	                        + '<span class="stat-icon" ng-if="icon!=null">'
	                            + '<i class="fa" ng-class="icon" ng-hide="loading"></i>'
	                            + '<i class="fa fa-spin fa-spinner" ng-show="loading"></i>'
	                        + '</span>'
	                        + '<div ng-class="{\'pull-right text-right\':icon!=null}">'
	                            + '<div class="value" ng-show="!loading">{{ number || "&nbsp;" }}{{percentage!=null ? \'%\':\'\'}}</div>'
	                            + '<div class="title" ng-show="!loading">{{titulo}}</div>'
	                        + '</div>'
	                    + '</div>'
	                + '</div>'
	    };
	})