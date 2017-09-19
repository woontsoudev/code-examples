'use strict';

var cat = {
  name: 'Fluffy',
  color: 'White'
}

// Using the getOwnPropertyDescriptor() Object method to get the property attributes
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));