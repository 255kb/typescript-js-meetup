/** TYPE INFERENCE */

// there is a tslint rule to enforce this: no-inferrable-types
let infered = false;

let country: 'LU' | 'DE' | 'FR' = 'DE';
if (country === 'DE') {
  country;
} else {
  country;
}

// infered an array of an union of 2 objects types
const animals = [
  {
    legs: 4,
    fly: false,
    name: 'cat'
  },
  {
    legs: 2,
    fly: true,
    name: 'bird',
    weight: 25
  }
];
