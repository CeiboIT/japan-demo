
'use strict';

var modalAddGanttTaskCtrl = function(ganttService, $modalInstance) {
console.log("modal register company controller");

    var modal = this;

    /*
    modal.createCompany = function(company) {
        company.createPromise = companiesService.createCompany(company)
            .then(function(data) {
                //console.log("company: ", data);
                $modalInstance.dismiss();
                window.location.href = '#/work/list/' + data.id;
            }, function(error) {
                company.error = error;
                //console.log("error creating company", company.error);
            });
    };
    */

    modal.cancelar = function () {
        $modalInstance.dismiss();
    };

    function init() {

    };

    //INITIALIZING
    init()

};

angular.module('ganttModule')
  .controller('modalAddGanttTaskCtrl', modalAddGanttTaskCtrl);
