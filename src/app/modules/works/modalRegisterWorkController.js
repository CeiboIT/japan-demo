
'use strict';

var modalRegisterWorkCtrl = function(worksService, companiesService, $modalInstance, param1) {
console.log("modal register work controller");

	var modal = this;

	modal.company = param1;

    modal.createWork = function(work) {
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
				$modalInstance.dismiss();
				window.location.reload();
            }, function(error) {
                work.error = error;
                //console.log("error creating work", work.error);
            });
    };

    modal.cancelar = function () {
        $modalInstance.dismiss();
    };

	function init() {
    	
	};

	//INITIALIZING
	init()

};

angular.module('worksModule')
  .controller('modalRegisterWorkCtrl', modalRegisterWorkCtrl);