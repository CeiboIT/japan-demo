
'use strict';

angular.module('ganttModule', [
    'gantt',
    'gantt.movable',
    'gantt.drawtask',
    'gantt.tooltips',
    'gantt.bounds',
    'gantt.progress',
    'gantt.table',
    'gantt.tree',
    'gantt.groups',
    'gantt.resizeSensor',
    'gantt.sortable',
    'rzModule',
    'mp.colorPicker',
])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.gantt', {
                url: '/gantt',
                controller : 'ganttCtrl as gantt',
                templateUrl: 'app/modules/gantt/views/gantt.html'
            })
    })
