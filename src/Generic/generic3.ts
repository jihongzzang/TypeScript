function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

//helloBasic<string>(39); // Error
helloBasic<string, number>('Mark', 39); // 지정된 타입을 체킹
helloBasic('Mark', 39); // T와 U를 추론함
helloBasic(36, 39); // T와 U를 추론함

/*--------------------------------------------------------------------*/

function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(['Hello', 'World']);
helloArray(['Hello', 5]);

function helloTuple<T, U>(message: [T, U]): T {
  return message[0];
}

helloTuple(['Hello', 'World']);
helloTuple(['Hello', 5]);

/*--------------------------------------------------------------------*/
