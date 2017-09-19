var Task = function (name) {
    this.name = 'pros name: ' + name;
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

var UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log('Notifiying people');
}

UrgentTask.prototype.save = function () {
    this.notify;
    console.log('Do special staff before saving');
    Task.prototype.save.call(this, 'some param from notify');
}

var ut = new UrgentTask('This is a urgent', 1);

ut.complete();
ut.save('my string new bitch: ');
console.log(ut.__proto__);