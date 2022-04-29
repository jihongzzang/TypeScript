abstract class AbstractPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
}

class MakePerson extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new MakePerson();

console.log(p);

/*
MakePerson {
  _name: 'Mark',
  __proto__: {
    constructor: ƒ MakePerson(),
    setName: ƒ setName()
  }
}
*/

p.setName('jihong');

console.log(p);

/*
MakePerson {
  _name: 'jihong',
  __proto__: {
    constructor: ƒ MakePerson(),
    setName: ƒ setName()
  }
}
*/
