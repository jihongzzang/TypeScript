var objTemperal2 = { a: 'hello', b: 'world' };
var objTemperal = objTemperal2;
//const objTemperal: ObjTemperal = { a: 'hello', b: 'world' };
//잉여 속성검사
function voidA() {
  // return 1; (x)
  // return null; (o)
  // return undefined; (o)
  // return; (od)
}
var voidB = voidA();
var humanBehavior = {
  talk: function () {
    //return 'abc'; (o)
    //return ; (o)
  },
};
function paramCallFunc(callback) {}
paramCallFunc(function () {
  return '3';
});
//callback을 void로 쓰면 error가 안남 실제로 리턴값이 뭐든 상관없다.
// declare function forEachFunc(
//   arr: number[],
//   callback: (el: number) => number
// ): void;
var target = [];
forEachFunc([1, 2, 3], function (el) {
  target.push(el);
});
forEachFunc([1, 2, 3], function (el) {
  return target.push(el);
});
var anoVoid = {
  talk: function () {
    return 3;
  },
};
var bVoid = anoVoid.talk();
var numberVoid = anoVoid.talk();
//unknown 은 타입을 모르겠을때
var unknown = anoVoid.talk();
unknown.talk();
// unknown은 try catch 에서 catch (e) 에서 많이볼수있다.
try {
} catch (error) {
  console.log(error.message);
}
//타입가드 => 쉽게생각해서 타입이 뭐일때 이거 뭐일때 이거이다.
function numOrStr(a) {
  if (typeof a === 'string') {
    return a;
  }
  return a.toFixed(1);
}
function numOrNumArray(a) {
  if (Array.isArray(a)) {
    return a.concat(2);
  }
  return a.toFixed(1);
}
//class그 자체가 타입에 올 수 있따.
var A = /** @class */ (function () {
  function A() {}
  A.prototype.aaa = function () {};
  return A;
})();
var B = /** @class */ (function () {
  function B() {}
  B.prototype.bbb = function () {};
  return B;
})();
function aOrbFunc(param) {
  if (param instanceof A) {
    param.aaa();
  } else {
    param.bbb();
  }
}
var aOrbArrow = function (param) {
  if (param instanceof A) {
    param.aaa();
  } else {
    param.bbb();
  }
};
// aOrbFunc(A); (x)
// aOrbArrow(A); (x)
aOrbFunc(new A());
aOrbArrow(new A());
function typeCheck(a) {
  if ('bbb' in a) {
    a.type;
  } else if ('ccc' in a) {
    a.type;
  } else {
    a.type;
  }
  // if (a.type === 'b') {
  //   a.bbb;
  // } else if (a.type === 'c') {
  //   a.ccc;
  // } else {
  //   a.ddd;
  // }
}
//타입을 구분해주는 커스텀 함수를 직접 만들 수 있다.
//return 값에 is가 들어가있으면 customTypeGuard
function isDog(a) {
  //타입 판별을 만들 수 있음
  if (a.meow) {
    return false;
  }
  return true;
}
function pet(a) {
  if (isDog(a)) {
    console.log(a.bow);
  }
  if ('meow' in cat) {
    console.log(cat.meow);
  }
}
