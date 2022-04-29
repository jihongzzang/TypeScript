class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }

  protected printName(): void {
    console.log(this._name);
  }
}

const pa = new Parent('Mark', 39);

pa.print();

class Child extends Parent {
  //public _name = 'Mark Jr.'; OverRide

  public gender = 'male';

  constructor(age: number) {
    super('Mark Jr.', age); //위치 중요
    this.printName();
  }
}

const ch = new Child(5);

ch.print();

// '이름은 Mark Jr. 이고, 나이는 5 입니다.'
// 'Mark Jr.' 5
