// class ClassBasic {
//   a: string;
//   b?: number;

//   private d: number = 2; // 실제 코드에서는 퍼블릭으로 바뀐다. 하지만 접근해도 컴파일 과정에서 어차피 에러가 날거임
//   #c: number = 1; // protected가 안됨

//   constructor(a: string, b?: number) {
//     this.a = a;
//     this.b = b;
//   }

//   method() {
//     console.log(this.a, this.b, this.#c, this.d);
//   }
// }

// const cla = new ClassBasic('123');

// type CClassBasic = ClassBasic;

// const clb: ClassBasic = new ClassBasic('123', 123);

// const clc: typeof ClassBasic = ClassBasic;

// Class자체의 타입은 ClassBasic Class이름은 인스턴스를 가르킴.

interface IBasicA {
  readonly hello: string;
  world: string;
}

//interface 구현

class IBasicB implements IBasicA {
  readonly hello: string = 'Hello'; // 외부에서 적븐 불가
  world: string = 'World';
  public: string = 'user';

  method() {
    console.log(this.hello);
    console.log(this.world);
    console.log(this.public);
  }
}

class IBasicC extends IBasicB {
  method() {
    //console.log(this.hello); // private 는 상속받은 애들까지도 접근 불가 (x)
    console.log(this.world); // protected 는 상속받은 애들까지는 접근 가능
    console.log(this.public);
  }
}

//외부에서 hello, world 접근 안됨
// new IBasicC().hello; (x)
// new IBasicC().world; (x)

new IBasicC().public;

//              public    protected     private

//클래스내          o           o            o
//인스턴스          o           x            x
//상속내부          o           o            x

abstract class abstractBasicA {
  private readonly hello: string = 'Hello'; // 외부에서 적븐 불가
  world: string = 'World';
  public: string = 'user';

  abstract method(): void;

  method2() {
    return 3;
  }
}

class nonAbstractB extends abstractBasicA {
  method() {
    console.log(this.world);
    console.log(this.public);
  }
}

new nonAbstractB().world;
new nonAbstractB().public;
