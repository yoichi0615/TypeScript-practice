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
console.log(book[3]);

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