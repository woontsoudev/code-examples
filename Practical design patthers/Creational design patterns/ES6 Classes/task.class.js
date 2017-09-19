class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    console.log("completing task: " + this.name);
    this.completed = true;
  }

  save() {
    if (this.completed) {
      console.log("saving task: " + this.name);
    } else {
      console.log("the task " + this.name + " its not completed");
    }
  }
}

var task1 = new Task("create a demo for contructors");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singletons");
var task4 = new Task("create a demo for prototypes");

task1.complete();
task1.save();
task2.save();
task3.save();
task4.complete();
task4.save();
