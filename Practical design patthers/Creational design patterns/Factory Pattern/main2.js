var Task = require('./task');
var repoFactory = require('./repoFactoryWcache');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = new Task(repoFactory.getRepo('user').get(1));
var project = new Task(repoFactory.getRepo('project').get(1));

task1.user = user;
task1.project = project;

task1.save();