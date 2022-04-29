class Persons5 {
  public name: string = 'InitalValue';
  private _age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  public async init() {}
}

const p105: Persons5 = new Persons5(39);

console.log(p105);
