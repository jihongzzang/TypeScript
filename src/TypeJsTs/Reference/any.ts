function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString(); //어떤것이든 할 수 있다.

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; // 타입오류가 없다 d까지 any가 전파

function leakingAny(obj: any) {
  const a: number = obj.num;
  console.log(a);
  const b = a + 1;
  console.log(b);
  return b;
}

const c = leakingAny({ num: 0 });
//c 타입이 any로 나옴
c.indexOf('0');
