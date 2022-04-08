### 타입 별칭 (별명)

- `Interface`랑 비슷하다.
- `Primitive`, `Union Type`, `Tuple`, `Function`
- 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있다.
- 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는 것은 아님(중요)

#### Aliasing Primitive

```js
type MystringType = string;
const str = 'world';

let myStr: MystringType = 'hello';
myStr = str;
```

#### Aliasing Primitive

```js
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringorNumber = 0;
another = 'Anna';
```

- 유니온 타입은 A 도 가능하고 B 도 가능한 타입
- 길게 써야하는 코드들을 짧게 쓸 수 있다.

#### Aliasing Tuple

```js
let person: [string, number] = ['Mark', 35];
type PersonTuple = [string, number];
let another: PersonTuple = ['Anna', 24];
```

- 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.

#### #### Aliasing funtion

```js
type EatType = (food: string) => void;
```

#### Alias vs Interface

- 타입이 그 타입으로서 목적이나 존재가치가 명확하면 `Interface`
- 다른 대상을 가르키거나 별명으로서 쓴다면 `Alias`
