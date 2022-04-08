// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable (읽기 쓰기 가능)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

//var (dont ever use this)
//var hoisting (어디에 선언했나 상관없이 제일 위로 끌어올려서 사용)
//has no block scope (블록스코프 사용 불가)
age = 4;
var age;

// 3. Constant 값이 절대 바뀌지 않음 (read 만가능)
// Mutable 값이 계속 변경될수 있는 데이터
const daysInweek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : premitive types, frozen objects (i.e. object.freezen())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive (더 이상 작은 단위로 나눠질수 없는 한가지 아이템) : number, string, boolean, null, undefiedn, symbol
// object (싱글아이템을 묶어서 박스로 관리)
// function, first-class function (다른 데이터 타입처럼 변수에 할당가능) 파라미터 인자로도 전달

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 동일한 스트링 작성했어도 다름
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age:20}; 
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language 중간에 타입이 바뀌면 에러가 뜨기도 함 '타입스크립트'
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);