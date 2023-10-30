type MyRecord<T extends keyof any, S> = {
  [Key in T]: S;
};

const record: MyRecord<string, number> = { a: 3, b: 5, c: 7 };

type VariableType = string | null | undefined | boolean | number;

type MyNonNullable<T> = T extends null | undefined ? never : T;

type VariableTypeExcludNull = MyNonNullable<VariableType>;

function zip(
  x: number,
  y: string,
  z: boolean
): {
  x: number;
  y: string;
  z: boolean;
} {
  return { x, y, z };
}

type MyParameter<T extends (...args: any) => any> = T extends (
  ...args: infer S
) => any
  ? S
  : never;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer S
  ? S
  : never;

// infer 는 extends만 쓸수있음

type Params = MyParameter<typeof zip>; //tuple

type Returns = MyReturnType<typeof zip>; //tuple

type ParamsFirst = Params[0]; // number

type ParamsSecond = Params[1]; // string

type ParamsThird = Params[2]; // boolean

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

type MyInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

class MyConstrucor {
  a: string;
  b: string;
  c: number;

  constructor(a: string, b: string, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const myCon = new MyConstrucor('hi', 'hello', 10);
//class 는 타입으로 바로 사용이 가능하다. 정확하게는 인스턴스

type MyCon = MyConstructorParameters<typeof MyConstrucor>; //type of Class

type MyInstance = MyInstanceType<typeof MyConstrucor>;

const hhhh = 'Hello';

type uuuu = Uppercase<typeof hhhh>;

type llll = Lowercase<typeof hhhh>;

type caaa = Capitalize<typeof hhhh>;

type uccc = Uncapitalize<typeof hhhh>;
