
'use strict';

var modalRegisterWorkCtrl = function(worksService, companiesService, $modalInstance, company) {
console.log("modal register work controller");

	var modal = this;

	modal.company = company;

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