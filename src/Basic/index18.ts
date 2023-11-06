interface Merge {
  one: string;
}

interface Merge {
  two: number;
}

const exampleMerge: Merge = {
  one: '1',
  two: 1,
};

declare class MergeA {
  constructor(name: string);
}

function MergeA(name: string) {
  return new MergeA(name);
}

new MergeA('jihong');

MergeA('jihong');

function Ex() {
  return 'hello';
}

namespace Ex {
  export const a = 'world';
  export type B = number;
}

Ex();
Ex.a;
const exB: Ex.b = 123;
