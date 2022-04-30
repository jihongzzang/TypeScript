class PersonClass {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

new PersonClass('Mark');

class PersonClass2<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new PersonClass2('Mark', 39);
new PersonClass2<string, number>('Jihong', 39);

class PersonExtends<T extends string | number> {
  //T는 string 과 number 만 가능하다
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Mark');
new PersonExtends(9);
//new PersonExtends(true); //불리언 타입을 string 이나 number에 할당 할 수 없다
