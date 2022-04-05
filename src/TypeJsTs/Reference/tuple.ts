let x: [string, number];

x = ['hello', 39];

x = ['10', 'Mark']; //Error

x[2]; //Error

x[3] = 'world'; //Error

const person: [string, number] = ['Mark', 39];

const [first, second, third] = person; //destructure
