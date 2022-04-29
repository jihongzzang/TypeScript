class ClassName {
  private static instance: ClassName | null = null;

  public static getInstance(): ClassName {
    // ClassName 으로 부터 만든 object 가 있으면 그걸 리턴
    // ClassName 으로 부터 만든 object 가 있으면 만든다.

    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor() {}
}

const aClassName = ClassName.getInstance();
const bClassName = ClassName.getInstance();

console.log(aClassName);
console.log(bClassName);

console.log(aClassName === bClassName); //true
