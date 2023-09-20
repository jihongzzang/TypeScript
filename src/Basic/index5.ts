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
