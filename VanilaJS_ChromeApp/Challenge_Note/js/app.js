console.log("Hey!");

/* 
* #2.2 Variables
*
* Written by ZOONG
* Created date : 2021-08-24
*/

// //const는 상수를 의미 constant
// const a = 5;
// const b = 2;

// const myName = "Zoong"; //자바스크립트에서 변수명을 지정할때 CamelCase를 차용.

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// console.log("hello " + myName);
//------------------------------------------------------------------------------------

/*
* #2.3 const and let
* 
* Written by ZOONG
* Created date : 2021-08-25
*/

let a = 5;
let b = 2;
let myName = "Zoong";

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);

myName = "Jiwoong";

console.log("Your name is " + myName); // let으로 변수를 선언했기 때문에 값을 update 할 수있다. const라면 TypeError 발생.

// 니꼬의 경험에 따르면, const를 기본적으로 사용하고, 만약 variable을 업데이트 하고 싶다면 let을 사용한다. 
// Always const, sometimes let, never var!
//------------------------------------------------------------------------------------