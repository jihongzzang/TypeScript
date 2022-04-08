function f5(a: number): number | undefined {
  if (a > 0) {
    return a * 38;
  }
  return undefined;
}

function f7(a: { name: string; age: number }): string {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}

console.log('============================');

interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;

type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-jihong'));
getPersonById('id-jihong');
//Argument of type 'string' is not assignable to parameter of type 'PersonID'. Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.ts

console.log('============================');

let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1;
// Type 'number' is not assignable to type '1'.

let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2;

//Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 25 more.t

let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3;

//Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;

//any기 때문에 변칙적인 상황임

let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5;

//Type 'number' is not assignable to type 'never'.

class Animal {}
class Dog extends Animal {
  eat() {}
}

//sub6 타입은 sup6의 서브 타입이다.

let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6;

//Property 'eat' is missing in type 'Animal' but required in type 'Dog'.

//primitive Type
let sub7: string = '';
let sup7: string | number = sub7;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: { a: string; b: number } = { a: '', b: 1 };
let sup8: { a: string | number; b: number } = sub8;

//array
let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
let sup9: Array<{ a: string | number; b: number }> = sub9;

class Person {}
class Developer extends Person {
  coding();
}
class StartupDeveloper extends Developer {
  burning();
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// Developer => Developer 에다가 StartupDeveloper => Developer를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer();
});
