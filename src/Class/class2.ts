interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {
  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return `${requirement}....`;
  }

  loveKimchi() {
    console.log('love~ kimchi~');
  }
}

abstract class Korean implements Person {
  public abstract jumin: number;

  constructor(public name: string) {}

  say(msg: string) {
    console.log(msg);
  }

  abstract loveKimchi(): void;
}

//abstract를 사용해서 추가로 더 붙일 수 있음

class KoreanProgrammer2 extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    super(name);
  }

  say(message: string): void {
    console.log(message);
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return `${requirement}....`;
  }

  loveKimchi(): void {
    throw new Error('Method not implemented.');
  }
}

// 추상클래스는 인스턴스를 만들 수 없고 추상클래스는 상속을 받아서 하위클래스에서 추상클래스를 구현하고 그 하위클래스를 인터스턴스화 할 수 있음.

const jihong = new KoreanProgrammer('jihong');
const jay = new KoreanProgrammer2('jihong', 2222);
