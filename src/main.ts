import { Member } from './member';

const member1: Member = new Member(17);
const member2: Member = new Member(19);
const member3: Member = new Member(null);

console.log('Member1: ', member1.hasMajority());
console.log('Member2: ', member2.hasMajority());
console.log('Member3: ', member3.hasMajority());
