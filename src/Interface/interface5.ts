interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: 'Jihong',
  city: 'Seoul',
  age: 29,
};

// HTMLDivElement 이거의 인터페이스도 상속받았음
