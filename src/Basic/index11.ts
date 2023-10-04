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

const filteredArray2 = [1, '2', 3, '4', 5].filter(
  value => typeof value === 'string'
);

//이건 두 필터타입 중 무조건 위에 거
