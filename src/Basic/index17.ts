function aBind(this: Window | typeof obj, param: string) {
  console.log(this);
}

const objBind = { name: 'jihong' };

const bBind = aBind.bind(objBind);

// bBind(); //jihong;

// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any
//   ? U
//   : unknown;

// type OmitThisParameter<T> = unknown extends ThisParameterType<T>
//   ? T
//   : T extends (...args: infer A) => infer R
//   ? (...args: A) => R
//   : T;

type ThisParameter = ThisParameterType<typeof aBind>;
type NoThisParameter = OmitThisParameter<typeof aBind>;

// ex bind

// use This

const jiHong = {
  name: 'jihong',

  sayHello(this: { name: string }) {
    console.log(`hi ${this.name}`);
  },
};

const sayHello = jiHong.sayHello;

const sayHi = jiHong.sayHello.bind({ name: 'jihong Ju' });

sayHi();

// use Not This

function addBind(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
) {
  return a + b + c + d + e + f;
}

const add1 = addBind.bind(null);

const add2 = addBind.bind(null, 1);

const add3 = addBind.bind(null, 1, 2);

const add4 = addBind.bind(null, 1, 2, 3);

const add5 = addBind.bind(null, 1, 2, 3, 4);

const add6 = addBind.bind(null, 1, 2, 3, 4, 5);

const flatExam = [1, 2, 3, [1, 2], [[1], [2]]].flat();
const flatExam2 = [1, 2, 3, [1, 2]].flat();

type AAAA = { name: string; age: number };

type NNNN = AAAA['1' extends number ? 'age' : 'name']; // string

type SSSS = AAAA[1 extends number ? 'age' : 'name']; // number

const flatExam3 = [1, 2, 3, [1, 2], [[1], [2]]].flat(2);

// flat<A, D extends number = 1>(
//         this: A,
//         depth?: D
//     ): FlatArray<A, D>[]

//FlatArray<(number[] | number[][] | number[][][]), 2>[]

//FlatArray<(number | number[] | number[][]), 1>[]

//FlatArray<(number | number[]), 0>[]

//FlatArray<(number), -1>[]

//number[]

type IsNever<T> = [T] extends [never] ? true : false;

type IsNever2<T> = T extends never ? true : false;

type A1 = IsNever<never>; // true
type B1 = IsNever2<never>; //never

// 타입 매개변수와 union이 만나 분배 법칙이 실현

type A2 = IsNever<boolean>;

interface V0 {
  value: any;
}

const returnV0 = <T extends V0>(): T => {
  return { value: 'test' }; // 에러
};

function onlyBoolean<T extends boolean>(arg: T = false): T {
  return arg; //never도 있음
}

type Union<T> = T extends { a: infer U; b: infer U } ? U : never;

type Result1 = Union<{ a: 1 | 2; b: 2 | 3 }>;

type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

type Result22 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;

function double<T extends [T] extends [string] ? string : number>(
  x: T
): [T] extends [string] ? string : number {
  // 가장 마지막에 평가되는 동작을 고치기
  return x;
}

double('hi');
double(123);
