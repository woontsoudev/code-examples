'use strict';

function Animal(voice) {
  this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
  console.log(this.voice);
}

function Cat(name, color) {
  Animal.call(this, 'Meeooow'); // this call the constructor of Animal and you can pass te paramethers
  this.name = name;
  this.color = color;
}

// Assign the Animal prototype to Cat prototype
Cat.prototype = Object.create(Animal.prototype);

// And deffine the contructor to be a Cat object
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'White');

// The fluffy prototype is Cat
console.log(fluffy);

// And the Cat prototype is animal
console.log(fluffy.__proto__.__proto__);