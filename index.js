var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = 'hello';
var back = 'hello';
var hello;
hello = 'hello';
var person = {
    name: 'jack',
    age: 21
};
// console.log(person.name)
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1, false];
book.push(21);
// console.log(book[3]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SMALL"] = "SMALL";
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.VENTI
};
coffee.size = CoffeeSize.TALL;
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.jfafafa = 'fafafa';
var banana = anything;
var unionType = 10;
var unionTypes = ['apple', 765];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'blue',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
var tmp = null;
var tmpNull = undefined;
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNumber = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 1;
unknownInput = false;
unknownInput = "string";
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
