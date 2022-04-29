interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male',
};

p81.gender = 'female';

//readonly 속성은 바꿀수 없다. 바꿀수 없는 값이라면 쓰는 습관을 들이자
//타입스크립트의 목적은 코드의 의도를 담아서 의사표시를 하는데 중요한 역할을 한다.
