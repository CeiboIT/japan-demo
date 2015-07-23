
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

    // DatePicker settings

    modal.opened1 = false;
    modal.opened2 = false;

    modal.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        initDate: new Date('01-01-1900')
    };

    modal.today = function() {
        modal.dt = new Date();
    };

    modal.clear = function () {
        modal.dt = null;
    };

    modal.toggleMin = function() {
        modal.minDate = modal.minDate ? null : new Date();
    };
    modal.toggleMin();

    modal.open = function($event, dt) {
        if (dt == 1) {
            $event.preventDefault();
            $event.stopPropagation();

            modal.opened1 = true;
            modal.opened2 = false;
        }
        if (dt == 2) {
            $event.preventDefault();
            $event.stopPropagation();

            modal.opened2 = true;
            modal.opened1 = false;
        };
    };

    modal.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,

    };

    modal.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy',
                      'shortDate', 'fullDate', 'dd/MM/yyyy'];
    modal.format = modal.formats[5];

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    modal.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    modal.getDayClass = function(date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i=0;i<modal.events.length;i++){
                var currentDay = new Date(modal.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return modal.events[i].status;
                }
            }
        }
        return '';
    };

    modal.compareDates = function(dt1, dt2) {
        var dt1 = new Date(dt1);
        var dt2 = new Date(dt2);
        var dt1_dia = dt1.getDate();
        var dt1_mes = dt1.getMonth() + 1;
        var dt1_anio = dt1.getFullYear();
        var dt2_dia = dt2.getDate();
        var dt2_mes = dt2.getMonth() + 1;
        var dt2_anio = dt2.getFullYear();

        if (dt1_anio > dt2_anio) {
            modal.dt2 = null;
        };

        if (dt1_mes > dt2_mes && dt1_anio >= dt2_anio) {
            modal.dt2 = null;
        };

        if (dt1_dia > dt2_dia && dt1_mes >= dt2_mes && dt1_anio >= dt2_anio) {
            modal.dt2 = null;
        };
    }
    // Fin Datepicker settings


    function init() {

    };

    //INITIALIZING
    init()

};

angular.module('ganttModule')
  .controller('modalAddGanttTaskCtrl', modalAddGanttTaskCtrl);
