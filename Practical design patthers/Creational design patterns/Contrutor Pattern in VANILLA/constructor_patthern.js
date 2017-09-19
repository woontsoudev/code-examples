'use strict';

/*
  When you use the 'new' keyword to create new objects, javascript does some thinks:
  1. Creates a brand new object
  2. Links to an object prototype
  3. Binds 'this' to the new object scope
  4. Implicitly returns this
*/

var Task = function(name) {
  this.name = name;
  this.completed = false;
};

// Add the methods to prototype to share its funtionity
Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  if(this.completed) {
    console.log('saving task: ' + this.name);
  } else {
    console.log('the task ' + this.name + ' its not completed');
  }
  
};

var task1 = new Task('create a demo for contructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task1.save();
task2.save();
task3.save();
task4.save();