(function() {
    var app = angular.module('taskManager', []);

    var taskController = function($scope, Task) {
        var ctrl = this;
        ctrl.tasks = [
            new Task({name: 'task 1'}),
            new Task({
                name: 'task 2', 
                completed: true
            })
        ];
    };

    app.controller('taskCtrl', taskController);
}())