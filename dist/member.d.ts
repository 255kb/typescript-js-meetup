interface User {
    age: number | null;
}
export declare class Member implements User {
    age: number | null;
    constructor(age: number | null);
    hasMajority(): boolean;
}
export {};
