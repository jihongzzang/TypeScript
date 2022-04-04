## TypeScript Types vs JavaScript Types

<br/>

### Static / Dynamic

- Ts => Static Types ### set during development
- Js => Dynamic Types => resolved at runtime

```js
function add(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!');
  }
  return n1 + n2;
}

const result = add(39, 28);
```

```js
function add(n1: number, n2: number) {
  return n1 + n2;
}

const result = add(39, 28);
```

> 데이터 단위로 작업이 가능해야한다.

### DataType

#### Js 기본 자료형

- `Boolean`
- `Number`
- `String`
- `Null`
- `Undefined`
- `Symbol`
- `Array : object 형태`

#### other (프로그래밍을 돕고 안정성을 더해주는 타입)

- `Any` | `Void` | `Never` | `Unknown`
- `Enum`
- `Tuple: object 형태`
