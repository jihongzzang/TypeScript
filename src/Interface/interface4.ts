interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person111 implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const person111: IPerson1 = new Person111('Mark');

person111.hello();
