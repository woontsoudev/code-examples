(function() {
  var app = angular.module("taskManager");

  app.factory("Task", function() {
    var Task = function(data) {
      this.name = data.name;
      this.completed = data.completed;
    };

    Task.prototype.complete = function() {
      console.log("completing task: " + this.name);
      this.completed = true;
    };

    Task.prototype.save = function() {
      if (this.completed) {
        console.log("saving task: " + this.name);
      } else {
        console.log("can't save the task " + this.name + " its not completed");
      }
    };

    return Task;
  });
}());
