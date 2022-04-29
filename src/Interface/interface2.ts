interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello1({ name: 'Mark' }); //에러
hello1({ name: 'Anna', age: 39 });

interface Person2 {
  name: string;
  age?: number; //있을수도 있고 없을수도 있는 형태라면 ?를 사용
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({ name: 'Mark' });
hello2({ name: 'Anna', age: 39 });

/*-----------------------------------------------------*/

interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; //indexable optional type 어떤 이름의 프로퍼티가 와도 괜찮아!
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = { name: 'Mark', age: 39 };

const p32: Person3 = { name: 'Anna', systers: ['Sung', 'Chan'] };

const p33: Person3 = { name: 'Kile', father: p31, mother: p32 };

hello3(p31);
hello3(p32);
hello3(p33);
