function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = 'hello';

if (typeof a !== 'string') {
  a;
}

declare const b: string | number;

if (typeof b !== 'string') {
  b;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

//T라고 하는 타입

type ObjectIndexable = Indexable<T>;

const f: Indexable<{}> = '';
