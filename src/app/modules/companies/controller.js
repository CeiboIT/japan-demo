
'use strict';

var companiesCtrl = function(companiesService, param1) {

	var company = this;

    company.companies = param1;

    company.createCompany = function(companyName, owner) {
        company.createPromise = companiesService.createCompany(companyName, owner)
            .then(function() {
				//console.log("company created");
            }, function(error) {
                company.error = error;
                //console.log("error creating company", company.error);
            });
    };


	function init() {

	};

	//INITIALIZING
	init()

};

angular.module('companiesModule')
  .controller('companiesCtrl', companiesCtrl);