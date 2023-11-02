const promise1 = Promise.resolve(1)
  .then(a => a + 1)
  .then(a => a + 1)
  .then(a => a.toString());

// Promise<number>, Promise<number>, Promise<number>, Promise<string>

const promise2 = Promise.resolve(2);

// Promise<number>

const promise3 = new Promise((res, rej) => {
  // Promise<unknown>
  setTimeout(res, 1000);
});

Promise.all([promise1, promise2, promise3]).then(result => {
  // { '0': string, '1': number, '2': unknown, length: 3 }
  console.log(result);
});

//T = [p1 ,p2 ,p3]

//keyof T = O | 1 | 2 | length

type Result = Awaited<Promise<Promise<Promise<number>>>>;

type Result2 = Awaited<{ then: (v: number) => number }>; // thenable
