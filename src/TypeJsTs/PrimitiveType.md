### Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 원시형의 내장 함수를 사용가능 한것은 자바스크립트 처리방식 덕분

### Types in Primitive

- `Boolean`
- `Number`
- `String`
- `Null`
- `Undefined`
- `Symbol` (ES 2015)

```js
let name = 'mark';
name.toString();
```

### Features

> litreal 값으로 Primitive타입의 서브 타입을 나타낼 수 있음

```js
true;

('hello');

3.14;

null;

undefined;
```

> 래퍼 객체로 만들 수 있다

```js
new Boolean(false);
//type of new Boolean(false): 'object'

new String("world);
//type of new String('world'): 'object'

new Number(42);
//type of new Number(42): 'object'
```

### Type Casing

- TypeScript의 핵심 원시 타입은 모두 소문자.

```js
//잘못된 코드
function reverse(s: String): String{
  return ...
}

//올바른 코드
function reverse(s: string): string{
  return ...
}
```
