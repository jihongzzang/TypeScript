const _a: number = 5;
const _b: string = 'jihong';
const _c: boolean = true;
const _d: undefined = undefined;
const _e: null = null;
const _f: any = 123;
const _g: unknown = 123;

const h: 5 = 5;
const i: true = true;
// 고정된 값 사용가능

// 이러한 타입들 외에 더 있음

// interface AddSameFunc {
//   (x: number, y: number): number;
// }
type AddSameFunc = (x: number, y: number) => number;
type Obj = { lat: number; lng: number };

function add(x: number, y: number): number {
  return x + y;
}
const addFunc: (x: number, y: number) => number = (x, y) => x + y;
const addSameFunc: AddSameFunc = (x, y) => x + y;

// function addDeep(x: number, y: number): number;
// function addDeep(x, y) {
//   return x + y;
// }

const arrString: string[] = ['a', 'b', 'c'];
const arrNumber: number[] = [1, 2, 3];
const tupleArr: [string, string, number] = ['a', 'b', 3];

const _obj: Obj = { lat: 37.5, lng: 127.5 };

let as = 123;
as = 'hello' as unknown as number;

//Error를 내뿜지 않음. '!'은 무조건 있다를 의미함.
// const head: Element = document.querySelector("#head")!;

//Error를 내뿜은 없을수도 있으니까.
const head: Element | null = document?.querySelector('#head');

if (head) {
  head.innerHTML = 'hello world';
} else {
  console.log('없어요');
}
