// type 명시할떄 string과 String은 다르다. String을 쓰면 hell을 경험할 것이다.
var world = 'world';
var greeting = 'hello world';
function rest(a) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
}
rest('world', '1', '2', '3');
var tupleRest = ['1', 1];
//js로 변환시 남아있음 왠만하면 남겨라
var ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
}; //상수로 쓰겠다.
// 아래처럼 번거롭게 하지말고 그냥 위처럼 하자
// const ODirection: { Up: number; Down: number; Left: number; Right: number } = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// };
var _upD = 0; /* Up */
var _upO = ODirection.Up;
//enum은 직접 타입으로 사용가능
function walk(dir) {
  return dir;
}
//이걸 뜯어보면 typeof ODirection['Up', 'Down', 'Left', 'Right']

function run(dir) {
  return;
}
walk(0 /* Up */);
walk(1 /* Down */);
run(0 /* Up */);
run(0);
run(ODirection.Up);
run(ODirection.Down);
var exObj = { a: '123', b: 'hello', c: 'world' };
