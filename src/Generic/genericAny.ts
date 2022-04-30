function helloStiring(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

function helloAny(message: any): any {
  return message;
}

helloAny('Mark');
helloAny(39);
helloAny('Mark').length;
helloAny(39).length; // 이 부분에서 문제를 일으키지 않는다ㅣ 이건 명백한 오류임

function helloGeneric<T>(message: T): T {
  return message;
}

helloGeneric('Mark');
helloGeneric(39);
helloGeneric(true);
helloGeneric('Mark').length;
//helloGeneric(39).length //이 부분은 문제를 알려줌
