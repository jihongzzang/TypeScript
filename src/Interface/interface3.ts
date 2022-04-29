interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

p41.hello();

const p42: Person4 = {
  name: 'Mark',
  age: 39,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

p42.hello();

const p43: Person4 = {
  name: 'Mark',
  age: 39,
  hello(this: Person4): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

p43.hello();

// const p44: Person4 = {
//   name: 'Mark',
//   age: 39,
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };
