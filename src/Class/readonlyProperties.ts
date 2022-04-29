class Persons7 {
  public readonly name: string = 'Mark';

  //private readonly country: string = 'Korea';
  private readonly country: string;

  public constructor(private _name: string, public age: number) {
    this.country = 'Korea';
  }

  hello() {
    //this.country = 'Brazil';
    //Cannot assign to 'country' because it is a read-only property.
  }
}

const p107: Persons7 = new Persons7('Mark', 39);

//p107.name = 'JiHong';
//Cannot assign to 'name' because it is a read-only property.
