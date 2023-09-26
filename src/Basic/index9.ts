function optionalFunc(a: number, b?: number, c?: number) {}

optionalFunc(1);
optionalFunc(1, 2);
optionalFunc(1, 2, 3);
// optionalFunc(1, 2, 3, 4); (x)

function optionalArgsFunc(...args: number[]) {}

optionalArgsFunc(1);
optionalArgsFunc(1, 2);
optionalArgsFunc(1, 2, 3);
optionalArgsFunc(1, 2, 3, 4);

let optionalObj: { a: string; b?: string } = { a: 'required', b: 'optional' };

optionalObj = { a: 'required' };
optionalObj = { a: 'required', b: 'optional' };

//optionalObj = {  b: 'optional' }; (x)
