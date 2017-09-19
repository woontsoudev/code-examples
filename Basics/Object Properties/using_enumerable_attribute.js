'use strict';

var cat = {
  name: {first: 'Fluffy', last: 'Loco'},
  color: 'White'
}

Object.defineProperty(cat, 'name', {enumerable: false})

// You can't loop in to properties with attribute enumerable setted to false
for(var propertyName in cat) {
  console.log(propertyName + ': ' + cat[propertyName]);
}

// If you see the object keys the name property its no showed
console.log('Object.keys: ', Object.keys(cat));

// This attribute also affect the JSON serialization
console.log(JSON.stringify(cat));