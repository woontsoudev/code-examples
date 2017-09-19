'use strict';

///////////////////////////////////////
//  CASE 1: If the property value is a sigle value (string, number boolean)
///////////////////////////////////////

var cat = {
  name: 'Fluffy',
  color: 'White'
}

// Here you set the writable attribute to false
Object.defineProperty(cat, 'name', {writable: false});

console.log('Cat Descriptor: ', Object.getOwnPropertyDescriptor(cat, 'name'));

// If you tried to change the value of 'name' property of cat you will get an error
// cat.name = 'Scratchy';

///////////////////////////////////////
//  CASE 2: If the property value is an Object
///////////////////////////////////////

var dog = {
  name: {first: 'Scott', last: 'Loco'},
  color: 'Yellow'
}

Object.defineProperty(dog, 'name', {writable: false});
console.log('Dog Descriptor: ', Object.getOwnPropertyDescriptor(dog, 'name'));

// You can change the properties of the name object value, but you can't change the property name.

// You can do this
dog.name.first = 'Ruffo';

//But you can't do this
dog.name = 'some string';

// You can change that using Object.freeze(cat.name)