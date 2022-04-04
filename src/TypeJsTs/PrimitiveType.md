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

### Data Type

#### [Number](number.ts)

- JavaScript와 같이, TypeScript 의 모든 숫자는 부동 소수점 값 입니다.
- TypeScript는 16진수 및 10진수 리터럴 외에도,
- ES 2015에 도입된 2진수 및 8진수를 지원
- NaN
- 1_000_000과 같은 표기 가능

#### [String](string.ts)

- 다른 프로그래밍 언어에서와 마찬가지로이 텍스트 형식을 참조하기 위해 `string` 형식을 사용.
- JavaScript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 `"` or `'`를 사용.

> #### TemplateString
>
> - 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
> - 이 문자열은 backquote 기호에 둘러쌓여 있다.
> - 포함된 표현식은 `${expr}` 와 같은 형태로 사용합니다.

#### [Symbol](symbol.ts)

- ECMAScript 2015에 추가된 값
- `new Symbol`로 사용이 불가능함
- `Symbol`을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다.
- 원시타입의 값을 담아서 사용
- 고유하고 수정 불가능한 값으로 만들어준다.
- 접근을 제어하는 쓰는 경우가 많았다.

```js
console.log(Symbol('foo') === Symbol('foo')); // false
```

#### [Undefined & Null](null.ts)

- TypeScript에서, `undefined`와 `null`은 실제로 각각 `undefined` 및 `null` 이라는 타입을 가진다.
- Void와 마찬가지로, 그 자체로는 그다지 유용하지 않다.
- 둘다 소문자만 존재
- 설정을 하지 않으면 모든 다른 타입들의 서브타입으로 존재한다.
- number에 null 또는 undefined를 할당 할 수 있다는 의미.
- compile 옵션에서 `--strictNullChecks` 사용한다면, `null`과 `undefined`는 void나 나 자신에게만 할당이 가능함
- 바로 상위에 해당 내용에서 `null`, `undefined` 를 할당하려면, union type을 이용해야 한다.

```js
let name: string = null;
let age: number = undefined;

// strictNullChecks => true
// Type 'null' is not assignable to type 'undefined'.
let name: string = null; // (X)

// null => null || void, undefined => undefined || void
// Type 'null' is not assignalbe to type 'undefined'
let u: undefined = null; // (X)

let v: void = undefined; // (O)

let union: string | null | undefined = 'str';
```

> #### null in JavaScript
>
> - `null` 이라는 값으로 할당된 것을 `null`이라고 한다.
> - 무언가가 있는데, 사용할 준비가 덜 된 상태
> - `null` 이라는 타입은 `null` 이라는 값만 가질 수 있다.
>   런타임에서 `typeof` 연산자를 이용하면 `object`다.
