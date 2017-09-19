var Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log("completing task: " + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  if (this.completed) {
    console.log("saving task: " + this.name);
  } else {
    console.log("the task " + this.name + " its not completed");
  }
};

module.exports = Task;
