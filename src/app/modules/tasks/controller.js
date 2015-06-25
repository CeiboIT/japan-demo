
'use strict';

var tasksCtrl = function(tasksService, worksService, param1, param2) {
console.log("tasks controller");
	var task = this;

    if (param1 !== null) {
        task.tasks = param1; // all task ids
    }

    if (param2 !== null) {
        task.alltasks = param2; // all full tasks

        // wire-style populate
        task.taskspop = [];

        for (var id in task.tasks.tasks) { // para cada id
            for (var fulltask in task.alltasks) {
                if (task.tasks.tasks[id] == task.alltasks[fulltask].$id) {
                    task.taskspop.push(task.alltasks[fulltask]);
                }
            }
        }
    }

    task.createTask = function(task) {
        task.createPromise = tasksService.createTask(task)
            .then(function(data) {
				//console.log("task: ", data);
                console.log(param1);
				if (param1.tasks) {
                    param1.tasks.push(data.id);
				} else {
					param1.tasks = [];
					param1.tasks.push(data.id);
				}
				worksService.updateWork(param1);
            }, function(error) {
                task.error = error;
                //console.log("error creating task", task.error);
            });
    };

    task.updateTask = function(dataToUpdate) {
        task.updateTask = tasksService.updateTask(dataToUpdate)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                task.error = error;
                console.log("update no ok", task.error);
            });
    };

    task.statusToDone = function(task) {
        var cleanTask = {
            'id' : task.$id,
            'name' : task.name,
            'status' : 'done'
        };

        task.updateTask = tasksService.updateTask(cleanTask)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                task.error = error;
                console.log("update no ok", task.error);
            });
    };

    task.statusToPending = function(task) {
        var cleanTask = {
            'id' : task.$id,
            'name' : task.name,
            'status' : 'pending'
        };

        task.updateTask = tasksService.updateTask(cleanTask)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                task.error = error;
                console.log("update no ok", task.error);
            });
    };

	function init() {
    	
	};

	//INITIALIZING
	init()

};

angular.module('tasksModule')
  .controller('tasksCtrl', tasksCtrl);