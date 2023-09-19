var _aa = { a: 'hello' };
var _bb = { a: 'hello' };
//간단하고 싶으면 type, 객체지향 프로그래밍을 원하면 interface를 써라
//unionType 쉽게생각해서 또는이라고 생각하자
function _unionAdd(x, y) {
  var a;
  if (typeof x === 'string' && typeof y === 'string') {
    a = x + y;
    return a;
  }
  if (typeof x === 'number' && typeof y === 'number') {
    a = x + y;
    return a;
  }
  a = x.toString() + y.toString();
  return a;
}
_unionAdd(1, 2);
_unionAdd('1', '2');
_unionAdd(1, '2');
var _cc = { greet: 'hello', name: 'jihong' };
var _DD = { greet: 'hello', name: 'jihong' };
var _DDD = { greet: 'hello' };
var _DDDD = { name: 'jihong' };
var jihongHuman = { breath: true, breed: true, think: true };
var anotherJihongHuman = {
  breath: true,
  breed: true,
};
var interKihongHuman = { breath: true, breed: true, think: true };
var behaviors = {
  talk: function () {},
  eat: function () {},
  shit: function () {},
  sleep: function () {},
};
