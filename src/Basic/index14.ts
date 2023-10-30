interface Profile {
  name: string;
  age: number;
  married: boolean;
}

interface NewProfile {
  name: string;
  age: number;
}

const jj: Profile = {
  name: 'jj',
  age: 29,
  married: false,
};

// const newjj: NewProfile = {
//   name: 'zerocho',
//   age: 29,
// };

// Partial은 모든 타입을 optionalType으로 만들어줌

// const newjPartial: Partial<Profile> = {
//   name: 'jj',
//   age: 29,
// };

type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

const newJPartial: MyPartial<Profile> = {
  name: 'jj',
  age: 29,
};

//Pick은 하나빼고 나머지
// const newJPick: Pick<Profile, 'name' | 'age'> = {
//   name: 'jj',
//   age: 29,
// };

//Omit은 하나만 빼버릴때
// const newJOmit: Omit<Profile, 'married'> = {
//   name: 'jj',
//   age: 29,
// };

type MyPick<T, S extends keyof T> = { [key in S]: T[key] };

type Animall = 'Cat' | 'Dog' | 'Human';
type Mammall = Exclude<Animall, 'Human'>; //'Cat' | 'Dog';
type CatAndDog = Extract<Animall, 'Cat' | 'Dog'>; //'Cat' | 'Dog';
type Humann = Extract<Animall, 'Human'>; //'Human'
type MakeNever = Extract<Animall, 'hi'>; // 'never'

type MyOmit<T, S extends keyof any> = MyPick<T, Exclude<keyof T, S>>;

const newJPick: MyPick<Profile, 'name' | 'age'> = {
  name: 'jj',
  age: 29,
};

const newJOmit: MyOmit<Profile, 'married'> = {
  name: 'jj',
  age: 29,
};

// const newJRequired: Required<Profile> = {
//   name: 'jj',
//   married: false,
// }; // age 없다고 에러남

type MyRequired<T> = {
  [key in keyof T]-?: T[key]; // -? 옵셔널 빼버림
};

type MyReadonly<T> = {
  readonly [key in keyof T]-?: T[key]; // -? 옵셔널 빼버림
}; // readonly 앞에 - 붙이면 readonly 빼버리는 것도 가능함

const newJRequired: MyRequired<Profile> = {
  name: 'jj',
  married: false,
}; // age 없다고 에러

newJRequired.name = 'kk';

const newJReadonly: MyReadonly<Profile> = {
  name: 'jj',
  married: false,
  age: 29,
};

newJReadonly.age = 30; // 수정 못한다.
