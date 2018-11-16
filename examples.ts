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

let x: [string, number, boolean];
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


///////////////////////////////////////////////////////////////


/** TYPE ASSERTION */


const text: any = 'lorem ipsum bla';
(text as string).length;
<string>text.length;

const data = {
    prop1: '',
    prop2: <Error>{ message: '' }
};


///////////////////////////////////////////////////////////////


/** Re-declaration detection */

function func(test) {
    // this is variable re-declaration
    let test = 0;

    if (true) {
        // this is ok
        let test = true;
    }
}


///////////////////////////////////////////////////////////////


/** TYPE INFERENCE */

// there is a tslint rule to enforce this: no-inferrable-types
let infered = false;

let country: 'LU' | 'DE' | 'FR';
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


///////////////////////////////////////////////////////////////


/** GENERICS */

type requiredProperties = {
    age: number;
};

const obj: { name: string } & requiredProperties = {
    name: 'john',
    age: 25
};

function functionWithGenerics<P extends requiredProperties>(param1: P) {
    return param1.age;
}

functionWithGenerics<typeof obj>(obj);
