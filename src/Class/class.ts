// class Cart {
//   constructor(user) {
//     this.user = user;
//     this.store = {};
//   }

//   put(id, project) {
//     this.store[id] = product;
//   }

//   get(id) {
//     return this.store[id];
//   }
// }

// const cartJohn = new Cart({ name: 'john' });
// const cartJay = new Cart({ name: 'jay' });

interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class CartTs {
  protected user: User;
  private store: object;
  //속성
  //public 으로 공용으로 접근할 수 있음 기본값이 public임
  //private 함수내부에서만 접근을 재한 할 수 있음
  //protected 역시 접근이 제한하지만 상속을 받은 하위 클래스 내부에서 접근이 가능함

  constructor(user: User) {
    this.store = {};
  }
  //생성자함수

  // constructor(public user: User, private store: object = {}) {}
  //생성자의 매개변수에서 바로 속성지정 가능 user: User => protected user: User

  public put(id: string, product: Product) {
    this.store[id] = product;
  }
  //메서드

  public get(id: string) {
    return this.store[id];
  }
  //메서드
}

class PromotionCart extends CartTs {
  addPromotion() {
    this.user;
  }
}

const cartJihong = new CartTs({ name: 'jihong' });
const cartJoon = new CartTs({ name: 'joon' });
const cart2 = new PromotionCart({ name: 'john' });
