class Persons {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const p101 = new Persons('Mark');

console.log(p101);

/*es5에서 클래스를 만드는 방법
var Persons = (function () {
  function Persons() {}
  return Persons;
})();
*/

class Persons2 {
  name: string = 'InitalValue';
  age!: number;

  constructor(age: number) {}
}

const p102: Persons2 = new Persons2(39);
console.log(p102);

class Persons3 {
  name: string = 'InitalValue';
  age: number;

  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p103: Persons3 = new Persons3(39);

const p104: Persons3 = new Persons3();

console.log(p103);
