type AA = { a: string };
const _aa: AA = { a: 'hello' };

interface BB {
  a: string;
}
const _bb: BB = { a: 'hello' };

//간단하고 싶으면 type, 객체지향 프로그래밍을 원하면 interface를 써라

//unionType 쉽게생각해서 또는이라고 생각하자
function _unionAdd(x: string | number, y: string | number): string | number {
  let a: string | number;

  if (typeof x === 'string' && typeof y === 'string') {
    a = x + y;
    return a;
  }
  if (typeof x === 'number' && typeof y === 'number') {
    a = x + y;
    return a;
  }

  a = x.toString() + y.toString();
  return a;
}

_unionAdd(1, 2);
_unionAdd('1', '2');
_unionAdd(1, '2');

//이런건 없다
// type CC = string & number;
// const _cc: CC = 1;

type CC = { greet: 'hello' } & { name: 'jihong' };
const _cc: CC = { greet: 'hello', name: 'jihong' };

type DD = { greet: 'hello' } | { name: 'jihong' };
const _DD: DD = { greet: 'hello', name: 'jihong' };
const _DDD: DD = { greet: 'hello' };
const _DDDD: DD = { name: 'jihong' };

type Animals = { breath: true };
type Poyouryues = Animals & { breed: true };
type Humans = Poyouryues & { think: true };

const jihongHuman: Humans = { breath: true, breed: true, think: true };

const anotherJihongHuman: Animals & { breed: true } = {
  breath: true,
  breed: true,
};

interface InterAnimals {
  breath: true;
}

interface InterPoyouryues extends InterAnimals {
  breed: true;
}

interface InterHumans extends InterPoyouryues {
  think: true;
}

const interKihongHuman: Humans = { breath: true, breed: true, think: true };

//type 중복선언 불가 interface는 가능 (library뜯어보면 대부분 interface 왜냐면 확장이 가능함 계속 선언할때마다 추가)
interface Behaviors {
  talk: () => void;
}

interface Behaviors {
  eat: () => void;
}

interface Behaviors {
  shit: () => void;
}

const behaviors: Behaviors = {
  talk() {},
  eat() {},
  shit() {},
  sleep() {},
};

interface Behaviors {
  sleep: () => void;
}
