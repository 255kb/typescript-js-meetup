/** COMPOSITION */


/** Intersections & */

type User = {
  name: string;
};
type Admin = User & {
  adminAccessRights: string[];
};

const SimpleUser: User = { name: 'John' };
const AdminUser: Admin = { name: 'John', adminAccessRights: [''] };


/** Unions | */
type Fish = {
  underwaterSpeed: number;
  name: string;
};
type Mammal = {
  legs: number;
  name: string;
};

function getCat() {
  return <Mammal>{
    legs: 4,
    name: 'cat'
  }
}
const Catfish: Fish | Mammal = getCat();


/** Composition: difference between interface and type */

interface FooInterface {
  bar: number;
}

type FooType = {
  bar: string;
};


/**
 * This code is invalid:
 * interface Bar implements FooType {}
 *
 * An interface cannot implement a type, because a type can be anything
 */

type Bar = FooInterface|FooType;

const bar: Bar = {
  bar: '1'
};
