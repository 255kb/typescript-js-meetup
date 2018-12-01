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


// best type --> number[]
let best = [0, 25, 58, null];


// infered string literal
function inferedStringLiteral() {
  if (Math.random() > 0.5) {
    return 'hello';
  } else {
    return 'world';
  }
}


// contextual type
window.onmouseover = function (mouseEvent) {
  mouseEvent.clientX;
  mouseEvent.anything; // <-- Error
}


/** TYPE COMPATIBILITY */

interface Animal {
  type: string;
  legs: number;
}

class Bird {
  type: string;
  legs: number;
}

let seagul: Animal;
seagul = new Bird();// <-- ok because interface and class are compatible even if Bird does not implements Animal




interface Named {
  name: string;
}

let person: Named;
let employee1 = { name: 'Steven', lastname: 'seagul' };
person = employee1; // <-- ok because Named properties are all in employee1 infered type


enum Enum1 {
  Red,
  Green
}
enum Enum2 {
  Low,
  Medium, 
  High
}

let a = Enum1.Red;
a = Enum2.Low;// <-- error Enum1.Red not assignable to Enum2.Low
