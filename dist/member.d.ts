interface Human {
    age: number | null;
}
export declare class Member implements Human {
    age: number | null;
    constructor(age: number | null);
    hasMajority(): boolean;
}
export {};
