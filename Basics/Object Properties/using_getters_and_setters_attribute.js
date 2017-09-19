'use strict';

var cat = {
  name: {first: 'Fluffy', last: 'Loco'},
  color: 'White'
};

Object.defineProperty(cat, 'fullName', {
  get: function() {
    return this.name.first + ' ' + this.name.last;
  },
  set: function(value) {
    var nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

// Setting a new value to the property
cat.fullName = 'Muffin Top';

// Getting the value of the property
console.log(cat.fullName);