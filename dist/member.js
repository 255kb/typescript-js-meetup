"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Member = /** @class */ (function () {
    function Member(age) {
        this.age = age;
    }
    Member.prototype.hasMajority = function () {
        if (this.age === null) {
            throw new Error('Age unknown');
        }
        return this.age >= 18;
    };
    return Member;
}());
exports.Member = Member;
