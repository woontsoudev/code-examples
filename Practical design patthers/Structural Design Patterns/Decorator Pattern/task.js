var Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function (strg) {
    console.log('this is the strg: ', strg);
    console.log('saving task: ' + this.name);
};

var myTask = new Task('Legacy Task');

myTask.complete();
myTask.save();

var urgentTask = new Task('urgen Task');

urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log('notifying people');
};

urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this, 'my string rata');
};

urgentTask.complete();
urgentTask.save();