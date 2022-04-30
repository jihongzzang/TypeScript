interface IPerson200 {
  name: string;
  age: number;
}

const person200: IPerson200 = {
  name: 'Mark',
  age: 39,
};

// type Keys = keyof IPerson200;

// const Keys: Keys = '';

// IPerson200[keyof Iperson200]
// => IPerson200["name":"age"]
// => Iperson200["name"] | IPerson200["age"]
// => string | number

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person200, 'name');

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person200, 'name', 'Anna');
