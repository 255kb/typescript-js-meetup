/** BASIC TYPES */


/** Primitives */

const myName: string = 'Georges';
const myAge: number = 40;
const subscribed: boolean = true;

/** Literals (string, numbers) */
const stringLiteral: 'string1' | 'string2' = 'string1';
const numberLiteral: 25 | 56 = 25;


/** Arrays */

const list: Array<string> = ['one', 'two'];
const list2: string[] = ['one', 'two'];
// /!\ Mistake: [string] means an array with exactly one string!
const list3: [string] = ['one', 'two'];


/** Tuples */

let x: [string, number, boolean] = ['test', 1, false];
x[2];


/** Enums */

enum Things {
  Thing1 = 1,
  Thing2 = 2,
  Thing3 = 3
}
Things.Thing1;

// Enum: be careful of human error 🤓
enum Status {
  Enabled = 'enabled',
  Disabled = 'enabled', // Oops 🤬
}
console.log(Status.Enabled === Status.Disabled); // true 🧐



/** Object: anything different from string, number, boolean, symbol, null, undefined */
let anObject: object;
anObject = '';


/** Any */

const whatever: any = true;
(whatever === 'a string'); // compiler not complaining


/** Never */

function neverReturning(): never {
  throw new Error();
}


/** Optional properties and parameters, default parameter */
type Car = {
  doors: number;
  wheels: number;
  customColor?: string;
};

function createCar(doors: number, wheels: number = 4, customColor?: string) { }
createCar(2);
createCar(2, 6);
createCar(2, 4, 'red');
