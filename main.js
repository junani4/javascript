let obj = {
    name: 'jun',
    age: 5, 
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';

const num = 2;
// num = 4; 변경 불가
// obj const 전체는 변경불가는 안되지만 안에 내용은 변경 가능
obj.name = 'James';