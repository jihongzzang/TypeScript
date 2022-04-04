interface DB<T> {
  add(v: T): void;
  get(): T;
}

class D<T> implements DB<T> {
  add(v: T): void {
    throw new Error('Method not implemented.');
  }
  get(): T {
    throw new Error('Method not implemented.');
  }
}

interface JSONSerialier {
  serialize(): string;
}

class LocalDB<T extends JSONSerialier> implements DB<T> {
  constructor(private localStorageKey: string) {}

  add(v: T) {
    localStorage.setItem(this.localStorageKey, v.serialize());
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface Vegitable {
  v: string;
}

interface Meat {
  m: string;
}

interface Cart<T> {
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart1: Cart<Vegitable> = {
  getItem() {
    return {
      v: '',
    };
  },
};

cart1.getItem();
