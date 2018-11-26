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
    underwaterSpeed?: number;
    name: string;
};
type Mammal = {
    legs: number;
    name: string;
};

type Animal = Fish | Mammal;

const Catfish: Animal = { name: 'catfish', underwaterSpeed: 10 };
