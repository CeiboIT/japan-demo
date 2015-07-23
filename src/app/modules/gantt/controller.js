
'use strict';

var ganttCtrl = function($modal) {

    var gantt = this;

    gantt.modalAddGanttTask = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/modules/gantt/views/modalAddGanttTask.html',
            controller: 'modalAddGanttTaskCtrl',
            controllerAs: 'modal',
            backdrop: 'static',
            resolve: {
                data: function() {
                    return gantt.data;
                }
            }
        });
    };

    gantt.data = [
        {name: 'Wall', children: ['Prepare the mixture', 'Laying bricks']},
            {name: 'Prepare the mixture', tasks: [
                {name: '', color: '#2ecc71', from: new Date(2015, 9, 17, 8, 0, 0), to: new Date(2015, 9, 19, 7, 0, 0), progress: 5}
            ]},
            {name: 'Laying bricks', tasks: [
                {name: '', color: '#2ecc71', from: new Date(2015, 9, 19, 8, 0, 0), to: new Date(2015, 9, 22, 7, 0, 0), progress: 70}
            ]},
        {name: 'Spouts', children: ['Gas', 'Water']},
            {name: 'Gas', tooltips: false, tasks: [
                {name: '', color: '#3498db', from: new Date(2015, 9, 22, 8, 0, 0), to: new Date(2015, 9, 25, 15, 0, 0), progress: 25}
            ]},
            {name: 'Water', tasks: [
                {name: '', color: '#3498db', from: new Date(2015, 9, 25, 16, 0, 0), to: new Date(2015, 10, 1, 15, 0, 0), progress: 10}
            ]},
        {name: 'Painting', children: ['Sand', 'Buy paint', 'Painting']},
            {name: 'Sand', tooltips: false, tasks: [
                {name: '', color: '#e74c3c', from: new Date(2015, 10, 1, 16, 0, 0), to: new Date(2015, 10, 5, 7, 0, 0), progress: 25}
            ]},
            {name: 'Buy paint', tasks: [
                {name: '', color: '#e74c3c', from: new Date(2015, 10, 5, 8, 0, 0), to: new Date(2015, 10, 7, 15, 0, 0), progress: 10}
            ]},
            {name: 'Painting', tasks: [
                {name: '', color: '#e74c3c', from: new Date(2015, 10, 7, 16, 0, 0), to: new Date(2015, 10, 14, 15, 0, 0), progress: 10}
            ]},
    ];

    gantt.options = {
        // gantt
        width: 30,
        headers: ['month', 'week', 'day'], // 'second', 'minute', 'hour', 'day','week', 'month', 'quarter', 'year'
        fromDate: null, // new Date(2015, 9, 25, 16, 0, 0)
        toDate: null, // new Date(2015, 9, 25, 16, 0, 0)
        currentDate: 'column', // 'none', 'line', 'column'
        currentDateValue: new Date(), // new Date(2015, 9, 25, 16, 0, 0)
        columnMagnet: '1 day', // 'column', '1 second', '1 minute', '5 minutes', '15 minutes', '1 hour', '1 day', '5 days'
        labelsEnabled: {
            "value": true, // true, false
            "true": "Showing side",
            "false": "Hiding side",
        },
        allowSideResizing: false, // true, false
        editGraph: {
            "value": false, // true, false
            "true": "Can edit graph",
            "false": "Can't edit graph"
        },
        // gantt-table
        columns: ['from', 'to'],
        columnsHeaders: {'model.name' : 'Name', 'from': 'From', 'to': 'To'},
        columnsClasses: {'model.name' : 'gantt-column-name', 'from': 'gantt-column-from', 'to': 'gantt-column-to'},
        columnsFormatters: {
            'from': function(from) {
                return from !== undefined ? from.format('ll') : undefined; // 'lll'
            },
            'to': function(to) {
                return to !== undefined ? to.format('ll') : undefined; // 'lll'
            }
        },
        columnsContents: null,
        columnsHeaderContents: {
            'model.name': '<i class="fa fa-align-justify"></i> {{getHeader()}}',
            'from': '<i class="fa fa-calendar"></i> {{getHeader()}}',
            'to': '<i class="fa fa-calendar"></i> {{getHeader()}}'
        },
    };

    gantt.saveGanttData = function() {
        console.log("SAVED!");
        console.log(gantt.data);
    }

    function init() {
        console.log("gantt controller");
    };

    //INITIALIZING
    init()
};

angular
    .module('ganttModule')
    .controller('ganttCtrl', ganttCtrl)

