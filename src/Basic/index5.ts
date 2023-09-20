interface ObjTemperal {
  a: string;
}

const objTemperal2 = { a: 'hello', b: 'world' };

const objTemperal: ObjTemperal = objTemperal2;

//const objTemperal: ObjTemperal = { a: 'hello', b: 'world' };
//잉여 속성검사

function voidA(): void {
  // return 1; (x)
  // return null; (o)
  // return undefined; (o)
  // return; (od)
}

const voidB = voidA();

//void 타입은 리턴값, 매개변수, 메서드
//매게변수가 or 메서드가 보이드면 리턴값이 존재해도됨 (리턴값이 뭐든간에 사용하지 않겠다.)

interface HumanBehavior {
  talk: () => void;
}

const humanBehavior: HumanBehavior = {
  talk() {
    //return 'abc'; (o)
    //return ; (o)
  },
};

function paramCallFunc(callback: () => void): void {}

paramCallFunc(() => {
  return '3';
});

//declare만 써서 타입만 만들수 있어요!!
// declare function forEachFunc(
//   arr: number[],
//   callback: (el: number) => undefined
// ): void;

//declare는 외부에서 만들어진 타입을 선언할시에 그럼 우리가 평소에 라이브러리 쓰는거 이런거 모두 다 영향
declare function forEachFunc(
  arr: number[],
  callback: (el: number) => void
): void;

//callback을 void로 쓰면 error가 안남 실제로 리턴값이 뭐든 상관없다.

// declare function forEachFunc(
//   arr: number[],
//   callback: (el: number) => number
// ): void;

let target: number[] = [];

forEachFunc([1, 2, 3], el => {
  target.push(el);
});

forEachFunc([1, 2, 3], el => target.push(el));

interface AnoVoid {
  talk: () => void;
}

const anoVoid: AnoVoid = {
  talk() {
    return 3;
  },
};

const bVoid = anoVoid.talk();
const numberVoid = anoVoid.talk() as unknown as number;

//unknown 은 타입을 모르겠을때
const unknown: unknown = anoVoid.talk();

(unknown as AnoVoid).talk();

// unknown은 try catch 에서 catch (e) 에서 많이볼수있다.

try {
} catch (error: unknown) {
  console.log((error as Error).message);
}

//타입가드 => 쉽게생각해서 타입이 뭐일때 이거 뭐일때 이거이다.
function numOrStr(a: number | string): string {
  if (typeof a === 'string') {
    return a;
  }
  return a.toFixed(1);
}

function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    return a.concat(2);
  }
  return a.toFixed(1);
}

//class그 자체가 타입에 올 수 있따.
class A {
  aaa() {}
}

class B {
  bbb() {}
}

function aOrbFunc(param: A | B): void {
  if (param instanceof A) {
    param.aaa();
  } else {
    param.bbb();
  }
}

const aOrbArrow: (param: A | B) => void = param => {
  if (param instanceof A) {
    param.aaa();
  } else {
    param.bbb();
  }
};

// aOrbFunc(A); (x)
// aOrbArrow(A); (x)

aOrbFunc(new A());
aOrbArrow(new A());

type BBB = { type: 'b'; bbb: string };
type CCC = { type: 'c'; ccc: string };
type DDD = { type: 'd'; ddd: string };

function typeCheck(a: BBB | CCC | DDD) {
  if ('bbb' in a) {
    a.type;
  } else if ('ccc' in a) {
    a.type;
  } else {
    a.type;
  }
  // if (a.type === 'b') {
  //   a.bbb;
  // } else if (a.type === 'c') {
  //   a.ccc;
  // } else {
  //   a.ddd;
  // }
}

interface Cat {
  meow: number;
}

interface Dog {
  bow: number;
}

//타입을 구분해주는 커스텀 함수를 직접 만들 수 있다.

//return 값에 is가 들어가있으면 customTypeGuard
function isDog(a: Cat | Dog): a is Dog {
  //타입 판별을 만들 수 있음
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

function pet(a: Cat | Dog) {
  if (isDog(a)) {
    console.log(a.bow);
  }
  if ('meow' in cat) {
    console.log(cat.meow);
  }
}

const cat: Cat | Dog = { meow: 3 };

if (isDog(cat)) {
  console.log(cat.meow);
}
