
'use strict';

var modalAddGanttTaskCtrl = function(ganttService, $modalInstance, data) {
console.log("modal register company controller");

    var modal = this;

    modal.data = data;


    modal.addGanttTask = function() {
        var newData = {name: modal.taskName, tasks: [
            {name: '', color: '#f1c40f', progress: 40, from: modal.startDate, to: modal.finishDate}
        ]};
        data.push(newData);
        modal.taskName = "";
        modal.startDate = "";
        modal.finishDate = "";
    };

    modal.cancelar = function() {
        $modalInstance.dismiss();
    };

    // DatePicker settings
    modal.today = new Date();
    modal.startDate = new Date();
    modal.finishDate = "",

    modal.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy',
                      'shortDate', 'fullDate', 'dd/MM/yyyy'];
    modal.format = modal.formats[5];
    // Fin Datepicker settings


    function init() {

    };

    //INITIALIZING
    init()

};

angular.module('ganttModule')
  .controller('modalAddGanttTaskCtrl', modalAddGanttTaskCtrl);
