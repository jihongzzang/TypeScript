// type 명시할떄 string과 String은 다르다. String을 쓰면 hell을 경험할 것이다.

//type 커스텀
type World = 'world';
const world: World = 'world';

//type temperal literal
type Greeting = `hello ${World}`;
const greeting: Greeting = 'hello world';

function rest(a: World, ...args: string[]) {}

rest('world', '1', '2', '3');

const tupleRest: [string, number] = ['1', 1];

//tupleRest[2] = 'world' (x)

//tupleRest.push('jihong'); (o) 이건 못막음
//tupleRest.push(2); (o) 이건 못막음

//enum

// index 순서대로 부여가 됨 Up:0, Down:1, Left:2, Right:3 내생각엔 그냥 명시해주는게 협업이나 한눈에 보기 편한것 같음
// const enum EDirection {
//   Up,
//   Down,
//   Left,
//   Right,
// }

//js로 변환시 사라짐
const enum EDirection {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

//js로 변환시 남아있음 왠만하면 남겨라
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; //상수로 쓰겠다.

// 아래처럼 번거롭게 하지말고 그냥 위처럼 하자
// const ODirection: { Up: number; Down: number; Left: number; Right: number } = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// };

const _upD = EDirection.Up;

const _upO = ODirection.Up;

//enum은 직접 타입으로 사용가능
function walk(dir: EDirection) {
  return dir;
}

//typeof : 객체 데이터를 객체 타입으로 변환해주는 연산자
//keyof : 객체 형태의 타입을, 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자

type Direction = typeof ODirection[keyof typeof ODirection];
//이걸 뜯어보면 typeof ODirection['Up', 'Down', 'Left', 'Right']

function run(dir: Direction) {
  return;
}

walk(EDirection.Up);
walk(EDirection.Down);

run(EDirection.Up);
run(0);
run(ODirection.Up);
run(ODirection.Down);

const exObj = { a: '123', b: 'hello', c: 'world' } as const;

type ExKeyOf = typeof exObj;

//"key들만 가져오고싶어"
type ExKeyOfTypeof = keyof typeof exObj;

//value들만 가져오고싶어;
type ExValueOfTypeof = typeof exObj[keyof typeof exObj];
