// 1. Function declaration
// function name
// one function === one thing
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4.  Rest Parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope (밖에서는 안이 보이지않고 안에서는 밖을 볼 수 있다.)
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum (a, b) {
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic ...
    }
}

// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    // long upgrade logic ...
}

// 1. Function expression
const print = function print() {
    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz (answer, printYes, printNo){
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function 디버깅할때 함수이름 필요해서 (recursions 콜스택 에러)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('lover you', printYes, printNo);

// Arrow function always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();