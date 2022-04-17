'use strict';

// Synchronous callback
function printImmediately(print) {
    print();
}

// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// javascript
// hoisting : var, function declaration(함수선언들이 제일 위로 올라가는것)
console.log('1'); //동기
setTimeout(() => console.log('2', 1000); //비동기
console.log('3'); //동기
printImmediately(() => console.log('hello')); //동기
printWithDelay(() => console.log('async callback'), 2000); //비동기

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

