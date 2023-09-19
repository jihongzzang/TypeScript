type Bigger = string | number;

type Big = string;

type Nonexist = string & number;

//Bigger 타입이 Big타입보다 더 넓은 관계

type NameT = { name: string };
type AgeT = { age: number };

type NameAgeT = { name: string; age: number };

type NameOrAgeT = NameT | AgeT;
type AnotherNameAgeT = NameT & AgeT;

//어떤게 더 커? NameT와 AgeT가 더 넓음 걍 객체는 상세할수록 좁아 (왜냐 구체적이니까)

const nn: NameOrAgeT = { name: 'jihong' };
const na: NameOrAgeT = { age: 30 };

const nna: AnotherNameAgeT = { name: 'jihong', age: 30 };
const smallNna = { name: 'jihong', age: 30, married: false };

// const nna: AnotherNameAgeT = { name: 'jihong', age: 30, married: false }; (x)
// 아니 넓은타입에 좁은타입을 넣었는데 왜안돼? 잉여속성검사때문에 에러가 생김

const anoDeepn: NameOrAgeT = smallNna; //이렇게는 또 된다 변수로 빼서 넣어버리기

const deepn: NameOrAgeT = nna;
// const deepn: AnotherNameAgeT = nn; (x)

//좁은타입을 넓은타입에 넣는건 가능하지만 넓은타입을 좁은 타입에 넣는건 안된다.
