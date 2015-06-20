
'use strict';

var worksCtrl = function(worksService, companiesService, param1) {
console.log("works controller");
	var work = this;

    work.works = param1.works;

    work.options = {
        types: '(cities)',
        watchEnter: true,
        //country: 'ar'
    };

    work.details;

    work.createWork = function(work) {
        work.createPromise = worksService.createWork(work)
            .then(function(data) {
				//console.log("work: ", data);
				if (param1.works) {
					param1.works.push(data.id);
				} else {
					param1.works = [];
					param1.works.push(data.id);
				}
				companiesService.updateCompany(param1);
            }, function(error) {
                work.error = error;
                //console.log("error creating work", work.error);
            });
    };

    work.updateWork = function(dataToUpdate) {
        work.updateWork = worksService.updateWork(dataToUpdate)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                work.error = error;
                console.log("update no ok", work.error);
            });
    };

	function init() {
    	
	};

	//INITIALIZING
	init()

};

angular.module('worksModule')
  .controller('worksCtrl', worksCtrl);