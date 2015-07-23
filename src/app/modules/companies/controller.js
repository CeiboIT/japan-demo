
'use strict';

var companiesCtrl = function(companiesService, param1, $modal) {

	var company = this;

    if (param1 !== null) {
        company.companies = param1;

        if (! company.companies.length) {
            window.location.reload();
        }
    }

    company.updateCompany = function(dataToUpdate) {
        company.updateCompany = companiesService.updateCompany(dataToUpdate)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                company.error = error;
                console.log("update no ok", company.error);
            });
    };

    company.modalRegisterCompany = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/modules/companies/views/modalRegisterCompany.html',
            controller: 'modalRegisterCompanyCtrl',
            controllerAs: 'modal',
            backdrop: 'static'
        });
    };

    company.modalRegisterWork = function (companyId) {
        var modalInstance = $modal.open({
            templateUrl: 'app/modules/works/views/modalRegisterWork.html',
            controller: 'modalRegisterWorkCtrl',
            controllerAs: 'modal',
            backdrop: 'static',
            resolve: {
                param1 : function(companiesService) {
                    return companiesService.getCompanyById(companyId)
                },
            }
        });
    };


	function init() {

	};

	//INITIALIZING
	init()

};

angular.module('companiesModule')
  .controller('companiesCtrl', companiesCtrl);
