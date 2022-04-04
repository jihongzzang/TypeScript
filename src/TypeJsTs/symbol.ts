console.log(Symbol('foo') === Symbol('foo')); // false

const sym = Symbol();

const obj = {
  [sym]: 'value', //상위에 sym을 쓰도록 key [sym]으로 지정
};

obj[sym]; //으로 접근해야함

// obj['sym']; 접근 불가능함
