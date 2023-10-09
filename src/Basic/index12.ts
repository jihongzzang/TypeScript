// 공변성 반공변성

function a11(x: string): number {
  return +x;
}

a11('1');

type B11 = (x: string) => number | string;

const b11: B11 = a11;

function aa11(x: string): number | string {
  return +x;
}

type BB11 = (x: string) => number;

// const bb11: BB11 = aa11; (x)

function aaa11(x: string | number): number {
  return 0;
}

type BBB11 = (x: string) => number;

let bbb11: BBB11 = aaa11;

//매개변수는 리턴값과 반대다. 넓은타입으로는 대입 안되고 좁은타입으로만 대입 가능
//리턴값은 넓은타입으로 대입 가능함 좁은타입으로는 대입 불가

//타입 오버로딩
declare function add11(x: number, y: number): number;
declare function add11(x: number, y: number, z: number): number;
declare function add11(x: string, y: string): string;

add11(1, 2);
add11(2, 3, 4);
add11('1', '2');

interface Add11 {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const addI11: Add11 = (x: any, y: any) => x + y;

addI11(1, 2);
addI11(2, 3);
addI11('1', '2');

class A11 {
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  add(x: any, y: any) {
    return x + y;
  }
}
new A11().add(1, 2);
new A11().add('1', '2');
