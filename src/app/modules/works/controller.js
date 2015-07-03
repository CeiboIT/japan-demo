
'use strict';

var worksCtrl = function(worksService, companiesService, param1, param2, $modal) {
console.log("works controller");
	var work = this;

    if (param1 !== null) {
        work.works = param1; // all work ids
    }

    if (param2 !== null) {
        work.allworks = param2; // all full works

        // wire-style populate
        work.workspop = [];

        for (var id in work.works.works) { // para cada id
            for (var fullwork in work.allworks) {
                if (work.works.works[id] == work.allworks[fullwork].$id) {
                    work.workspop.push(work.allworks[fullwork]);
                }
            }
        }
    }

    work.options = {
        types: '(cities)',
        watchEnter: true,
        //country: 'ar'
    };

    work.details;

    work.updateWork = function(dataToUpdate) {
        work.updateWork = worksService.updateWork(dataToUpdate)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                work.error = error;
                console.log("update no ok", work.error);
            });
    };

    work.modalRegisterTask = function (workId) {
        var modalInstance = $modal.open({
            templateUrl: 'app/modules/tasks/views/modalRegisterTask.html',
            controller: 'modalRegisterTaskCtrl',
            controllerAs: 'modal',
            backdrop: 'static',
            resolve: {
                param1 : function(worksService) {
                    return worksService.getWorkById(workId)
                },
            }
        });
    };

	function init() {
    	
	};

	//INITIALIZING
	init()

};

angular.module('worksModule')
  .controller('worksCtrl', worksCtrl);