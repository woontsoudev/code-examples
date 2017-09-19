var Task = require('./task');
var taskRepo = require('./task.service');
var userRepo = require('./user.service');
var projectRepo = require('./task.service');

var task1 = new Task(taskRepo.get(1));
var user = new Task(userRepo.get(1));
var project = new Task(projectRepo.get(1));

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();