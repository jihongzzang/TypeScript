### Reference Type

#### [object](object.ts)

- 원시형 타입이 아닌것을 나타내고 싶을때 사용하는 타입
- not number,string,boolean, bigint, symbol, null or undefined

```js
create by object litreal

const person1 = { name: 'Mark', age: 39 };

person1 is not "object" type
person1 is "{name: string, age: number}" type
```

```js
create by object Object.create
Object => 전역 내장 객체

const person2 = Object.create({ name: 'Mark', age: 39 });
```

#### [array](array.ts)

- 원래 자바스크립트에서 array는 객체

```js
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

#### [tuple](tuple.ts)

- 배열인데 타입이 한가지가 아닌 경우
- 마찬가지로 객체이다.
- 꺼내 사용할때 주의가 필요하다
- 배열을 Destructuting 하면 타입이 제대로 얻어진다.

```js
let x: [string, number];

x = ['hello', 39];

x = ['10', 'Mark']; //Error
```

#### [any](any.ts)

- 어떤 타입이어도 상관없는 타입
- 이걸 최대한 쓰지 않는게 핵심
- 왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
- 그래서 컴파일 옵션중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
- any는 계속해서 개체를 통해 전파된다.
- 결국, 모든 편의는 타입 안정성을 잃는 대가로 온다는것을 기억하자
- 타입 안전성은 TS를 사용하는 주요 동기중 하나이며 필요하지 않은 경우에는 any를 사용하지 않도록 해야한다.

#### [unknown](unknown.ts)

- 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다.
- 이러한 값은 동적 컨텐츠(예: 사용자로부터, 또는 API의 모든 값을 의도적으로 수락하기를 원할 수 있음)
- 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공할때 unknown을 사용하자
- typeof 검사, 비교 검사 또는 고급 타입 가드를 수행하여 보다 구체적인 변수로 좁힐 수 있다.
- TS 3.0부터 지원
- any와 짝으로 any 보다 Type-safe한 타입
  - any와 같이 아무거나 할당 가능
  - 컴파일러가 타입을 추론할 수 있게 타입의 유형을 좁혀줌
  - 타입을 확정해주지 않으면 다른곳에 할당할 수 없고 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일 수 있다.
  - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용 가능

### [never](never.ts)

- 리턴에 사용
- never 타입은 모든 타입의 subType 이며, 모든 타입에 할당 할 수 있다.
- 하지만 never에는 그 어떤 것도 할당 할수 없다.
- any 조차도 never에게 할당 할 수 없다.
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용한다.

### [void](void.ts)

- 어떤 타입도 가지지 않는 빈 상태를 의미한다.
- 값은 없고 타입만 있다.
- 소문자이다
- 일반적으로 값을 반환하지 않는 함수의 리턴타입으로 사용
- 할당이 가능한 값은 undefined 이다.
