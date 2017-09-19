'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var fluffy = new Cat('Fluffy', 'White');

console.log(fluffy);
console.log(fluffy.name);
console.log(fluffy.color);