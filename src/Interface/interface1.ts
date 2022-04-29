function hello1(person: { name: string; age: number }): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: { name: string; age: number } = { name: 'Mark', age: 39 };

hello1(p1);

interface Person1 {
  name: string;
  age: number;
}

/*---------------------------------------------- interface 는 컴파일 타임에 나타남 */

const sameP1: Person1 = { name: 'Mark', age: 39 };

function sameHello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

sameHello1(sameP1);
