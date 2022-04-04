function createdPromise<T>(x: T, timeout: number) {
  return new Promise((resolve: (v: T) => void, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

function createdPromise2<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

//<T> => 타입변수 함수 코드 내부에서 어디서든 사용가능함

createdPromise('string', 100).then(v => console.log(v));

createdPromise<string>('1', 100).then(v => console.log(v));

createdPromise2(10, 100).then(v => console.log(v));

function createTuple2<T1, T2>(v: T1, v2: T2): [T1, T2] {
  return [v, v2];
}

function createTuple3<T1, T2, T3>(v: T1, v2: T2, v3: T3): [T1, T2, T3] {
  return [v, v2, v3];
}

const t1 = createTuple2('user1', 1000);
const t2 = createTuple3('user2', 'user', 4000);
