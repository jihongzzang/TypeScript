class Persons8 {
  private static CITY = 'Seoul';
  // public static hello() {
  //   console.log('안녕하세요', Persons8.CITY);
  // }
  public hello() {
    console.log('안녕하세요', Persons8.CITY);
  }
  public change() {
    Persons8.CITY = 'LA';
  }
}

const p108 = new Persons8();
p108.hello(); // '안녕하세요' 'Seoul'
const p109 = new Persons8();
p109.hello(); // '안녕하세요' 'Seoul'
p108.change();
p109.hello(); // '안녕하세요' 'La'
