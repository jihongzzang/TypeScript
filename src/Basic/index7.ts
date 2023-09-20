const _x: {} = [1, 2];
const _y: Object = 'hi'; // 빈객체 {}, Object 모든 타입 (null, undefined 제외)

// const _xx: object = 'hi';
const _yy: object = { hello: 'hi' };
const _zz: unknown = 'hello';

//unknown = {} | null | undefined
if (_zz) {
  _zz;
} else {
  _zz;
}

//indexSignature
type AIndexSignature = { [key: string]: number };
type Special = 'Human' | 'Mammal' | 'Animal';
type SpecialIndexSignature = { [key in Special]: number };
type SpecialIndexSignature2 = { [key in Special]: Special };

const aIndexSignature: AIndexSignature = { a: 3, b: 5, c: 5, d: 123 };

const specialIndexSignature: SpecialIndexSignature = {
  Human: 3,
  Animal: 5,
  Mammal: 5,
};

const specialIndexSignature2: SpecialIndexSignature2 = {
  Human: 'Human',
  Animal: 'Animal',
  Mammal: 'Mammal',
};
