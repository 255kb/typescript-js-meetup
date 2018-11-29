"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Member {
    constructor(age) {
        this.age = age;
    }
    hasMajority() {
        if (this.age === null) {
            throw new Error('Age unknown');
        }
        return this.age >= 18;
    }
}
exports.Member = Member;
