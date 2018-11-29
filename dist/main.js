"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = require("./member");
const member1 = new member_1.Member(17);
const member2 = new member_1.Member(19);
const member3 = new member_1.Member(null);
console.log('Member1: ', member1.hasMajority());
console.log('Member2: ', member2.hasMajority());
console.log('Member3: ', member3.hasMajority());
