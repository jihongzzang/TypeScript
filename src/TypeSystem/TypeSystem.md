### TypeSystem

- 타입을 명시적으로 지정할 수 있다.
- 타입을 명시적으로 지정하지 않으면, 타입 스크립트 컴파일러가 자동으로 타입을 `추론`

```
자신의 코드에서 해당 함수를 사용하는 사용자
|
형태를 정해둔 함수
|
해당 함수를 구현하는 구현자
```

타입이란 해당 변수가 할 수 있는 일을 결정해준다.

```js
function f1(a) {
  return a;
}
```

```js
function f2(b) {
  return b * 38;
} //사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행하였음.

console.log(f2(10)); // 380
console.log(f2('Mark')); // NaN
```

- 타입스크립트의 추론에 의지하는 경우
- `c` 의 타입을 명시적으로 지정하지 않은 경우일때 `c`는 `any`로 추론
- `f3함수`의 리턴 타입은 `number`로 추론

```js
function f3(c) {
  return c * 38;
} //사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행하였음.

console.log(f3(10)); // 380
console.log(f3('Mark') + 5); // NaN도 Number
//올바른 사용법을 사용자에게 알려주지 않음
```

#### noImplicitAny 옵션을 켜면

- 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 `any` 라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도

#### number 타입으로 추론된 리턴 타입

- 매개변수의 타입은 명시적으로 지정
- 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론

```js
function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}

console.log(f4(5)); //190
console.log(f4(-5) + 5); //NaN 리턴타입은 명시적으로 지정하지 않았음
// 사용자는 사용법에 맞게 숫자형 함수를 실행했으나
// 해당 함수의 리턴 타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있다.
// 하지만 실제 undefined + 5가 실행되어 NaN이 출력된다.
```

#### strictNullChecks 옵션을 켜면

- 모든 타입에 자동으로 포함되어 있는 `null` 과 `undefined`를 제거해준다.
- 위의 예제에서 보면 명시적으로 지정하지 않은 함수의 리턴 타입은 `number` | `undefined`로 추론
- 해당 함수의 리턴 타입은 `number` | `undefined` 이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 없다.
- 컴파일 에러를 고쳐야하기 떄문에 사용자와 작성자가 의논해야함.

#### 명시적으로 리턴 타입을 지정한 코드

```js
function f5(a: number): number {
  if (a > 0) {
    return a * 38;
  }
}
```

#### noImplicitReturns 옵션을 켜면

- 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

#### 매개변수에 object 가 들어오는 경우

```js
function f6(a) {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}

console.log(f6({ name: 'Mark', age: 38 }));
// 이름은 Mark이고, 연령대는 30대 입니다.

console.log(f6('Mark'));
//이름은 undefined이고, 연령대는 NaN대 입니다.
```

```js
function f7(a: { name: string, age: number }): string {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
```

#### 나만의 타입을 만드는 방법

```js
interface PersonInterface {
  name: string;
  age: number;
}

type PersonTypeAlias = {
  name: string,
  age: number,
};

function f8(a: PersonInterface): string {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
```
