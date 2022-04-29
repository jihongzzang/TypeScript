class Persons6 {
  // name: string;
  // age: number;

  public constructor(private _name: string, public age: number) {
    // this.name = name;s
    // this.age = age;
  }

  get name() {
    return this._name + ' Ju';
  } //getter

  set name(n: string) {
    this._name = n;
  } //setter
}

const p106: Persons6 = new Persons6('Mark', 39);

//p106._name; //get
//p106._name = 'Anna'; //set

//p106.name; //getter
//p106.name = 'jihong'; //setter
