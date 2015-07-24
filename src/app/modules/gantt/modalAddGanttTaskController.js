
'use strict';

var modalAddGanttTaskCtrl = function(ganttService, $modalInstance, data) {
console.log("modal register gantt task controller");

    var modal = this;

    modal.data = data;

    // worker selection
    modal.selectedWorker = "Select worker";
    modal.workersList = ["Akio", "Makoto", "Yamato", "Itsuki", "Jin", "Toru", "Shizen"];

    // group selection
    modal.selectedGroup = "Select group";
    modal.groupsList = [];
    var groupObjects = _.filter(data, _.iteratee('children'));
    for (var group in groupObjects) {
        modal.groupsList.push(groupObjects[group].name);
    };

    // gantt task creation
    modal.addGanttTask = function() {
        // task build
        var newData = {
            name: modal.taskName,
            worker: modal.selectedWorker,
            tasks: [{
                name: '',
                color: '#f1c40f',
                progress: 0,
                from: modal.startDate,
                to: modal.finishDate
            }]
        };
        data.push(newData);

        // add task to selected group
        for (var item in data) {
            if (data[item].name == modal.selectedGroup) {
                data[item].children.push(newData.name);
            }
        };

        modal.selectedGroup = "Select group";
        modal.taskName = "";
        modal.startDate = modal.today;
        modal.finishDate = "";
    };

    // modal close
    modal.cancelar = function() {
        $modalInstance.dismiss();
    };

    // DatePicker settings
    modal.today = new Date();
    modal.startDate = modal.today;
    modal.finishDate = "",

    modal.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy',
                      'shortDate', 'fullDate', 'dd/MM/yyyy'];
    modal.format = modal.formats[5];


    function init() {

    };

    //INITIALIZING
    init()

};

angular.module('ganttModule')
  .controller('modalAddGanttTaskCtrl', modalAddGanttTaskCtrl);
