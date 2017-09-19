'use strict';

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log('Meeooow');
  }
}

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy);

fluffy.speak();