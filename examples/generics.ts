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
