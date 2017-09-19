'use strict';

var cat = {
  name: {first: 'Fluffy', last: 'Loco'},
  color: 'White'
};

// You can't change any attibute of objects properties if the configurable attribute is setted to false
Object.defineProperty(cat, 'name', {configurable: false});

// You can't do this:
Object.defineProperty(cat, 'name', {writable: false});
Object.defineProperty(cat, 'name', {enumerable: false});

// Also you can't redefine the configurable attribute
Object.defineProperty(cat, 'name', {configurable: false});

// You can't delete a property if the configurable attribute is setted to false
delete cat.name;
