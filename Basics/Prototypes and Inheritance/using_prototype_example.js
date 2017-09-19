'use strict';

var arr = new Array('red', 'blue', 'green');

// If you pass the prototype of the object to define a new property, all the objects created from this object inherit the new property
Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length -1];
  }
})

var lastColor = arr.last;

console.log('Last color: ', lastColor);

// the brackets its just a shorthant for new Array()
var arr2 = ['one', 'two', 'three'];

var lastNumber = arr2.last;

console.log('Last number: ', lastNumber);