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

// let a = 5;
// let b = 2;
// let myName = "Zoong";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// console.log("hello " + myName);

// myName = "Jiwoong";

// console.log("Your name is " + myName); // let으로 변수를 선언했기 때문에 값을 update 할 수있다. const라면 TypeError 발생.

// // 니꼬의 경험에 따르면, const를 기본적으로 사용하고, 만약 variable을 업데이트 하고 싶다면 let을 사용한다. 
// // Always const, sometimes let, never var!
//------------------------------------------------------------------------------------

/*
* #2.4 Booleans
*
* Written by ZOONG
* Created date : 2021-08-25
*/

// const amIFat = null;
// console.log(amIFat);

// let something;
// console.log(something);
//------------------------------------------------------------------------------------

/*
* #2.5 Arrays
*
* Written by ZOONG
* Created date : 2021-08-25
*/

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // Get Item from Array
// console.log(daysOfWeek);

// // Add one more day to the array
// daysOfWeek.push("sun");

// // Check array is updated.
// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");

// console.log(toBuy);

// //I wonder about this.
// toBuy[15] = "coffee";
// console.log(toBuy);
//------------------------------------------------------------------------------------

/*
* #2.6 Objects
*
* Written by ZOONG
* Created date : 2021-08-25
*/

// const player = {
//     name: "zoong",
//     points: 10,
//     fat: true,
// };
// console.log(player);

// player.lastName = "potato"; // Object의 property 추가
// player.points = player.points + 15; // Object의 property value 수정
// console.log(player);
// //Object에 접근하는 다른 방법
// console.log(player["name"]);
//------------------------------------------------------------------------------------

/*
* #2.7 Functions part One
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// function sayHello(){
//     console.log("Hello! my name is C");
// }

// sayHello("nico");
// sayHello("dal");
// sayHello("lynn");
//-----------------------------------------------------------------------------------

/*
* #2.8 Functions part Two
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// function sayHello(nameOfPerson, age){
//     console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b){
//     console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

// // Let's create player object.
// const player = {
//     name: "nico",
//     sayHello: function(otherPersonName){
//         console.log("hello!" + otherPersonName + " nice to meet you!");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");
//-----------------------------------------------------------------------------------

/*
* #2.9 - 2.10 Recap 1, Recap 2
*
* Written by ZOONG
* Created date : 2021-08-26
*/
const calculatorExample = {
    add: function (a, b) {
        console.log(a, b);
    },
};
// a+b, a-b, a*b, a/b, a**b 기능이 있는 object 만들기

const calculator = {
    add: function (firstNumber, secondNumber) {
        console.log(firstNumber + secondNumber);
    },
    minus: function (firstNumber, secondNumber) {
        console.log(firstNumber - secondNumber);
    },
    times: function (firstNumber, secondNumber) {
        console.log(firstNumber * secondNumber);
    },
    divide: function (firstNumber, secondNumber) {
        console.log(firstNumber / secondNumber);
    },
    powerOf: function (firstNumber, secondNumber) {
        console.log(firstNumber / secondNumber);
    },
};

calculator.add(12,14);
calculator.minus(22,13);
calculator.times(2,3);
calculator.divide(16,4);
calculator.powerOf(3,4);
//-----------------------------------------------------------------------------------