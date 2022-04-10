### **CompilationContext**

- 컴파일 컨텍스트는 기본적으로 TypeScript가 해석하고 분석하여 유효한 것과 그렇지 않은 것을 결정하는 파일 그룹을 나타내는 고급 용어
- 컴파일 컨텍스트에는 파일 정보와 함께 사용 중인 컴파일러 옵션에 대한 정보가 포함

### **tsconfig Schema**

<a href="https://json.schemastore.org/tsconfig">관련 문서 보러가기</a>

```json
{
  "title": "JSON schema for the TypeScript compiler's configuration file",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "https://json.schemastore.org/tsconfig",
  "definitions": {
    "//": {...},
    "filesDefinition": {...},
    "excludeDefinition": {...},
    "includeDefinition": {...},
    "compileOnSaveDefinition": {...},
    "extendsDefinition": {...},
    "buildOptionsDefinition": {...},
    "watchOptionsDefinition": {...},
    "compilerOptionsDefinition": {...},
    "typeAcquisitionDefinition": {...},
    "referencesDefinition": {...},
    "tsNodeModuleTypes": {...},
    "tsNodeDefinition": {...}
  },
  "type": "object",
  "allOf": [...]
}
```

### **최상위 프로퍼티**

- `files`, `include`, `exclude` 어떤파일을 컴파일 할건지 결정
- `compileOptions` 어떤 설정으로 컴파일 할건지

### **complieOnSave**

- true / fase (default false)
- 누가
  - Visual Studio 2015 with TypeScript 1.8.4 이상
  - atom-typescript 플러그인

### **extends**

- 부모의 설정값들을 상속할 수 있음.
- 파일(상대) 경로명: string

### **files, include, exclude**

- 셋다 설정이 없으면, 전부다 컴파일

- `files`

  - 상대 혹은 절대 경로의 리스트 배열
  - `exclude` 보다 우선적임

- `include`

  - glob 패턴 (.gitignore)
  - include의 경우 exclude보다 덜 우선적
  - `*` 같은 걸 사용하면, .ts / .tsx / .d.ts 만 include (allowJs)

- `exclude`

  - glob 패턴
  - 설정 안하면 4가지(`node_modules`, `bower_components`, `jspm_pacakages`,`<outDir>` 을 default로 제외
  - `<outDir>`은 항상 제외

### **typeRoots, types in compileOptions**

- `@types`
  - `TypeScript2.0` 부터 사용 가능해진 내장 타입 정의 시스템
  - 아무 설정을 안하면?
    - `node_modules/@types` 라는 모든 경로를 찾아서 사용
  - `typeRoots`를 사용하면?
    - 배열 안에 들어있는 경로들 아래서만 가져온다.
  - `types`를 사용하면?
    - 배열 안의 모듈 혹은 `./node_modulse/@types/`안의 모듈 이름에서 찾아온다.
    - [] 빈 배열을 넣으면 이 시스템을 이용하지 않겠다는 것
  - `typeRoots`와 `types`를 같이 사용하지 않는다.

### **target, lib in compileOptions**

- `target`
  - 빌드의 결과물을 어떤 버전으로 할 것이냐
  - 지정을 안하면 `es3`
- `lib`
  - 기본 타입 정의 라이브러리를 어떤 것을 사용 할 것인지
  - lib를 지정하지 않았을 때
    - target 이 `es3` 이고, 디폴트로 `lib.d.ts` 를 사용
    - target 이 `es5` 이면, 디폴트로 `dom`, `es5`, `scripthost` 를 사용
    - target 이 `es6` 이면, 디폴트로 `dom`, `es6`, `dom.iterable`, `scripthost` 를 사용
  - lib 를 지정하면 그 lib 배열로만 라이브러리를 사용
    - 빈 [] => 'no definition found 문구 Error'

### **outDir, outFile, rootDir in compileOptions**

- `outDir`
  - 컴파일 후 생성되는 js파일이 생성될 폴더명
- `outFile`
  - 모든 출력을 하나의 JavaScript 파일로 번들하는 파일 지정
- `rootDir`
  - 시작하는 루트 폴더

### **strict in compileOptions**

- 무조건 작업할때 strict를 키고 작업하기

- `noImplicitAny`

  - 명시적이지 않게 `any`타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생
  - 타입스크립트가 추론에 실패한 경우, `any`가 맞으면, `any`라고 지정하라
  - 아무것도 쓰지 않으면, 에러
  - 이 오류를 해결하면, `any`라고 지정되어 있지 않은 경우는 any가 아닌 것
  - `suppressImplicitAnyIndexErros`
    - 인덱스 객체에 인덱스 시그니쳐가 없는 경우 오류를 발생하는데 이를 예외처리 함.

- `noImplicitThis`

  - 명시직이지 않게 `any`타입을 사용하여, `this` 표현식에 사용하면, 에러를 발생
  - 첫번째 매개변수 자리에 `this`를 설정, `this`에 대한 타입을 어떤 것이라도 표현하지 않으면, 오류를 발생
  - js에서는 매개변수에 `this`를 넣으면, 이미 에약된 키워드라 문법에러를 발생
  - `call` / `apply` / `bind`와 같이 `this`를 대체하여 함수 콜을 하는 용도로도 쓰임
  - `this`를 `any`로 명시적으로 지정하는 것은 합리적
  - `Class` 에서는 `this` 를 사용하면서, 해당 설정과 관련된 에러가 나지 않는다.
  - `Class` 에서는 생성자를 제외한 멤버 함수의 첫번째 매개변수도 일반 함수와 마찬가지로 `this` 사용 가능

- `strictNullChecks`

  - `null` 및 `undefined` 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나, `any`일 경우에만 할당이 가능
  - `undefined`에 `void` 할당 가능
  - 해당 설정을 적용하지 않으면 ?
    - 모든 타입은 `null` 및 `undefined` 값을 가질 수 있다.
    - string으로 타입을 지정해도 `null` 및 `undefined` 값을 할당할 수 있음.
  - 사용하려는 함수를 선언할 때부터 매개변수와 리턴 값에 정확한 타입을 지정해야한다.

- `strictFunctionTypes`

  - 함수에서 인자에서 다른 함수를 받아 갈때 함수의 타입이 맞는지
  - 반환 타입은 공변적
  - 인자 타입은 반 공변적
  - 그런데 타입스크립트에서 인자 타입은 공변적이면서, 반공변적이기 때문에 이 문제를 해결하는 옵션

- `strictPropertyInitialization`

  - 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인
  - 이 옵션을 사용하려면 `strictNullChecks` 함께 사용해야함.
  - 생성자에서 초기 값을 할당한 경우 => 정상
  - 생성자에서 할당하지 않을 경우
    - 다른 함수로 이니셜라이즈 할때 (`async` 함수)
    - 생성자에서는 `async`키워드 를 사용할 수 없다. 따라서 이니셜라이즈 함수를 따로 만들어 주자

- `strictBindCallApply`

  - `bind`, `call`, `apply` 에 대한 더 엄격한 검사
  - `bind`는 해당 함수안에서 사용할 this와 인자를 설정해주는 역할, `call` 과 `apply`는 `this`와 인자를 성정한 후, 실행까지 함

- `alwaysStrict`

  - 각 소스파일에 대해 JS의 strict모드로 코드를 분석, 엄격하게 사용을 해제
  - 컴파일 된 JS에 파일에 `use strict` 가 추가됨
