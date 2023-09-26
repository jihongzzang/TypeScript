//T를 제한할 수 있음 (extends)

//generic은 여러개를 만들 수 있다. <T extends number, K extends string, ...>

function genericAdd<T extends number>(x: T): T {
  return x;
}

genericAdd(1);

function genericAdd2<T extends (a: string) => number>(x: T): T {
  return x;
}

genericAdd2(a => +a);

function genericAdd3<T extends { a: string }>(x: T): T {
  return x;
}

genericAdd3({ a: 'hello' });

function genericAdd4<T extends number[]>(x: T): T {
  return x;
}

genericAdd4([1, 2, 3, 4]);

function genericAdd5<T extends abstract new (...args: any) => any>(x: T): T {
  return x;
}

class AbsA {
  constructor() {}
}

genericAdd5(AbsA);

// genericAdd(false, true);

// genericAdd('1', 2); (x)
// genericAdd(1, '2'); (x)

//<T extends {...}>
//<T extends any[]>
//<T extends (...args:any) => any>

//<T extends abstract new (...args:any) => any> // 생성자 (abstract 중요)

const basicOperatorFunc = (b: number = 3, c: number = 5) => {
  return Math.max(b, c);
};

const basicOperatorExFunc = (
  b: { children: string } = { children: 'jihong' }
) => {
  return b;
};

//아래 2개함수는 리액트 할때는 유용하게 사용됨
const basicOperatorEx2Func = <T = unknown>(a: T, b: T) => {
  return { a, b };
};
const basicOperatorEx3Func = <T extends unknown>(a: T, b: T) => {
  return { a, b };
};

// 이것도 가능하지만 너무 대충 쓴 것 같음 굳이써야하나 싶지만 누군가 이런식으로 사용할 수도 있으니 기억만 해두자
// const basicOperatorEx4Func = <T,>(a: T, b: T) => {
//   return { a, b };
// };

const result = basicOperatorEx3Func(1, 2);
