/** BASIC TYPES */


/** Primitives */

const myName: string = 'Georges';
const myAge: number = 40;


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
