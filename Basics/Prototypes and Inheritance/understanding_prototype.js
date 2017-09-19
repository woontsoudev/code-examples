'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

// All the Cat intances points to the same cat prototype
Cat.prototype.age = 4;

var fluffy = new Cat('Flufy', 'White');
var muffin = new Cat('Muffin', 'Brown');

// The instances properties overwrite the prototype properties
fluffy.age = 5;

// This logs '5' because the instance property its overwritting the prototype property
console.log(fluffy.age);

// Its prototype remains the same '4'
console.log(fluffy.__proto__.age);

// If you comment 'fluffy.age = 5' the property 'age' desappears from its properties
console.log(fluffy.hasOwnProperty('age'));

// Also desappears from its keys
console.log(Object.keys(fluffy));

// You can create a new prototype object for Cat
Cat.prototype = {
  age: 7
}

// If you create a new Cat, it inherit the last prototype defined
var snowbell = new Cat('Snowbell', 'White');

// This logs 7 because points to a new prototype
console.log(snowbell.__proto__.age);

// Objects have multiple levels of inherit
// snowbell is a new instance from cat and has its own prototype
console.log(snowbell.__proto__);

// The cat prototype are chained to snowbell prototype 
console.log(snowbell.__proto__.__proto__);

// All objects inherit from object, but object not have prototype
console.log(snowbell.__proto__.__proto__.__proto__);