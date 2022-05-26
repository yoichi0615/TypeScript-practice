let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double :string = 'hello';
let back: string = 'hello';

let hello: string;
hello = 'hello';

const person: object = {
  name:'jack',
  age: 21
}

// console.log(person.name)

const fruits: any[] = ['Apple', 'Banana', 'Grape']
const book: [string, number, boolean] = ['business', 1 , false];
book.push(21);
// console.log(book[3]);

enum CoffeeSize {
  SMALL = 'SMALL',
  SHORT = 'SHORT',
  TALL = 'TALL',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.VENTI,
}

coffee.size = CoffeeSize.TALL;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.jfafafa = 'fafafa';
let banana = anything;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = ['apple', 765]

type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple';
let clothSize: ClothSize = 'large'
const cloth: {
  color: string,
  size: ClothSize
} = {
  color: 'blue',
  size: 'medium'
};

function add(num1: number, num2: number): number {
  return num1 + num2
}

function sayHello(): void {
  console.log('hello');
}

console.log(sayHello())
let tmp: undefined = null;
let tmpNull: null = undefined;

const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2
}
const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNumber = cb(num * 2)
  console.log(num * 2);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 1;
unknownInput = false;
unknownInput = "string";
text = anyInput;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error'));