// type TAtype<T> = {};
// class CAtype<T> {}

//제네릭 위치 기억하기

//제네릭 => 코드를 작성할때는 무슨타입이 들어갈지는 모르겠는데 함수가 실행될때는 무슨 타입인지 확실히 알아!

interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];

  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];

  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}

[1, 2, 3].forEach(item => {
  console.log(item);
});

['1', '2', '3'].forEach(item => {
  console.log(item);
});

[true, false, true].forEach(item => {
  console.log(item);
});

['123', 123, true].forEach(item => {
  console.log(item);
});

const genericNumArr: Array<number> = [1, 2, 3];

genericNumArr.forEach(value => {
  console.log(value);
});

function addGeneric2<T>(x: T, y: T): T {
  return x;
}

addGeneric2<number>(1, 2);

addGeneric2('1', '2');

addGeneric2(true, false);

const stringsArr = ['1', '2', '3'].map(item => item.toString());

const numbersArr = [1, 2, 3].map(item => item + 1);

const filteredArr = [1, 2, 3, 4, 5].filter(value => value * 2);

const filteredArray = ['1', '2', '3', '4', '5'].filter(value => value == '1');

const predicate = (value: string | number): value is string =>
  typeof value === 'string';

const filteredArray2 = [1, '2', 3, '4', 5].filter(predicate);

const filteredArray3 = [1, '2'].filter<string>(predicate);

//이건 두 필터타입 중 무조건 위에 거

// 타입 만들기

interface Arr<T> {
  forEach(callback: (item: T) => void): void;
  map<S>(callback: (value: T) => S): S[];
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

const generatedArrA: Arr<number> = [1, 2, 3];
const generatedArrB: Arr<string> = ['1', '2', '3'];
const generatedArrC: Arr<string | number> = [1, '2', 3, '4', 5];

generatedArrA.forEach(item => {
  item.toFixed(1);
});

generatedArrA.forEach(item => {
  console.log(item);
  return '3';
});

generatedArrB.forEach(item => {
  item.charAt(3);
});

generatedArrB.forEach(item => {
  console.log(item);
  return '3';
});

generatedArrA.map(v => v + 1);
generatedArrA.map(v => v.toString());
generatedArrA.map(v => v % 2 === 0);

generatedArrB.map(v => +v);

const generatedAFilter = generatedArrA.filter((v): v is number => v % 2 === 0);
const generatedCFilter = generatedArrC.filter(
  (v): v is string => typeof v === 'string'
);

const predicateAnother = (v: string | number): v is number =>
  typeof v === 'number';

const generatedCFilterAnother = generatedArrC.filter(predicateAnother);
