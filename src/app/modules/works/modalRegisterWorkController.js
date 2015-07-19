
'use strict';

var modalRegisterWorkCtrl = function(worksService, companiesService, $modalInstance, param1) {
console.log("modal register work controller");

	var modal = this;

	modal.company = param1;

    modal.workersList = ["Akio", "Makoto", "Yamato", "Itsuki", "Jin", "Toru", "Shizen"];

    modal.createWork = function(work) {
        work.status = "pending";

        var aux = work.workers;
        work.workers = [];
        work.workers.push(aux);

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
