
'use strict';

var ganttCtrl = function($modal) {

    var gantt = this;

    gantt.modalRegisterCompany = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/modules/companies/views/modalRegisterCompany.html',
            controller: 'modalRegisterCompanyCtrl',
            controllerAs: 'modal',
            backdrop: 'static'
        });
    };

    gantt.say = function(text) {
        console.log(text);
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

