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
