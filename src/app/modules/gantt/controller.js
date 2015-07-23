
'use strict';

var ganttCtrl = function($modal) {

    var gantt = this;

    gantt.modalAddGanttTask = function (gantt) {
        var modalInstance = $modal.open({
            templateUrl: 'app/modules/gantt/views/modalAddGanttTask.html',
            controller: 'modalAddGanttTaskCtrl',
            controllerAs: 'modal',
            backdrop: 'static',

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

    gantt.addTask = function() {
        var newData = {name: 'New task', tasks: [
            {name: '', color: '#f1c40f', progress: 40, from: new Date(2015, 10, 15, 8, 0, 0), to: new Date(2015, 10, 20, 18, 0, 0)}
        ]};
        gantt.data.push(newData);
    };

    function init() {
        console.log("gantt controller");
    };

    //INITIALIZING
    init()
};

angular
    .module('ganttModule')
    .controller('ganttCtrl', ganttCtrl)

