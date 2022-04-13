'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array;
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruits));

// 4. Addtion, deletion, copy
// remove from the end
fruits.push('딸기','복숭아');
fruits.pop();
fruits.pop();
console.log(fruits);

// 앞뒤에서 추가 빼기
fruits.unshift('딸기','레몬');
fruits.shift();
fruits.shift();
console.log(fruits);

// #note! shift, unshift are slower than pop, push
// remove an item by index position
fruits.push('딸기','복숭아','레몬');
fruits.splice(1,1); // 1부터 끝까지
fruits.splice(1,1, '풋사과', '수박'); // 1지우고 풋사과 수박 넣음

// combine two arrays
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2); //두개 배열이 합쳐짐
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과')); // 0번째
console.log(fruits.indexOf('수박')); // 2번째
console.log(fruits.indexOf('코코넛')); // -1


console.log(fruits.includes('수박')); // true
console.log(fruits.includes('코코넛')); // false

//lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')); // 0번째
console.log(fruits.lastIndexOf('사과')); // 5번째



