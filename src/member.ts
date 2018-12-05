interface User {
  age: number | null;
}

export class Member implements User {
  public age: number | null;

  constructor(age: number | null) {
    this.age = age;
  }

  public hasMajority() {
    if (this.age === null) {
      throw new Error('Age unknown');
    }

    return this.age >= 18;
  }
}
