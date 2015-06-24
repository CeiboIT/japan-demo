
'use strict';

var companiesCtrl = function(companiesService, param1) {

	var company = this;

    if (param1 !== null) {
        company.companies = param1;
    }

    company.createCompany = function(company) {
        company.createPromise = companiesService.createCompany(company)
            .then(function() {
				//console.log("company created");
            }, function(error) {
                company.error = error;
                //console.log("error creating company", company.error);
            });
    };

    company.updateCompany = function(dataToUpdate) {
        company.updateCompany = companiesService.updateCompany(dataToUpdate)
            .then (function() {
                console.log("update ok");
            }, function(error) {
                company.error = error;
                console.log("update no ok", company.error);
            });
    };


	function init() {

	};

	//INITIALIZING
	init()

};

angular.module('companiesModule')
  .controller('companiesCtrl', companiesCtrl);