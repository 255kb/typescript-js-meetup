/** COMPOSITION */


/** Intersections & */

type User = {
  name: string;
};
type Admin = User & {
  adminAccessRights: string[];
};

const SimpleUser: User = { name: 'John' };
const AdminUser: Admin = { name: 'John', adminAccessRights: ['write'] };


/** Unions | */

class Fish {
  constructor(
    public underwaterSpeed: number,
    public name: string
  ) { }
}

class Mammal {
  constructor(
    public legs: number,
    public name: string
  ) { }
}

function getCat(): Fish | Mammal {
  if (Math.random() > 0.5) {
    return new Fish(20, 'Catfish');
  } else {
    return new Mammal(4, 'Cat');
  }
}
const catfish: Fish | Mammal = getCat();
catfish.name; // <-- only suggests `name`

if (catfish instanceof Fish) {
  console.log(catfish.underwaterSpeed);
} else {
  console.log(catfish.underwaterSpeed); // <-- error
  console.log(catfish.legs);
}


/** Composition: difference between interface and type */

interface FooInterface {
  bar: number;
}

type FooType = {
  bar: string;
};

interface IBar implements FooType { } // An interface cannot implement a type, because a type can be anything

type Bar = FooInterface | FooType;

const bar: Bar = {
  bar: '1'
};
