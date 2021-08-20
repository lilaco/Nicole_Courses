/*
// Learn about Object
console.log("hi");

const playerName = "zoong";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// 입력과 속도는 빠르지만 key를 알 수 없음. value의 의미를 알기 어렵다.
// const player = ["zoong", 121212, false, "little bit"];

// Object
const player = {
    name: "zoong", 
    points: 121212, 
    handsome: false, 
    fat: "little bit"
};

console.log(player);
console.log(player.name);
// Object 값을 불러내는 다른 방법.
console.log(player["name"]);

// Object의 property속성 추가
player.lastName = "potato";
player.points = player.points + 15;
console.log(player.points);
*/ 

// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("zoong", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// // Circulator 함수를 만들어서 argument 이해하기.
// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// function divide(a, b){
//     console.log(a / b);
// }

// divide(5, 2);
// plus(8, 60);

// const player = {
//     name: "zoong",
//     // Object 내부에 function 삽입
//     sayHello: function(otherPersonName){
//         console.log("hello! " + otherPersonName + " nice to meet you!");
//     },
// };

// console.log(player.name);
// player.sayHello("Daseul");;

// recap 1
// const a = 5;
// const isNicoFat = true;

// //isNicoFat = false; // 값을 업데이트 할 수 없다. const 상수

// let wasNicoFat = true;
// wasNicoFat = false;

// // var Never!, Always const!, sometimes let!

// let hello;
// console.log(hello); // undefied

// let helloNull = null;
// console.log(helloNull);

// //배열 담기
// const me = "sexy";
// const days = [1, 2, false, true, null, undefined, "text", me];

// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy);
// toBuy.push("meat");
// console.log(toBuy);

// recap 2
// const player = {
//     name: "Zoong",
//     age: 29,
// };

// player.name = "jiwoong";
// console.log(player);

// // object update
// player.sexy = "soon";
// console.log(player);

// function plus(potato, salad){
//     console.log(potato + salad);
// }

// plus(5, 10);

// alert("lalalalal");

// function minusFive(potato){
//  console.log(potato - 5);
// }
// minusFive(10, 10, 6, 3, 3); // argument가 여러개여도 앞에 1개만 동작함. fucntion에서 argument가 1개이기 때문에.

// const calculator = {
//     add: function (a, b) {
//         console.log(a, b);
//     },
// };

// homework in object & function.
// make up your calculator(includes plus+, minus-, divide/, powerof**)
const homeworkCalculator = {
    add: function(a, b){
        //alert(a + b);
        return a + b;
    },
    minus: function(a, b){
        //alert(a - b);
        return a - b;
    },
    times: function(a, b){
        //alert(a * b);
        return a * b;
    },
    divide: function(a, b){
        //alert(a / b);
        return a / b;
    },
    powerof: function(a, b){
        //alert(a ** b);
        return a ** b;
    }
};

const plusResult = homeworkCalculator.add(1, 2);
console.log(plusResult);
const minusResult = homeworkCalculator.minus(plusResult, 10);
const timesResult = homeworkCalculator.times(10, minusResult);
const divideResult = homeworkCalculator.divide(timesResult, plusResult);
const powerResult = homeworkCalculator.powerof(divideResult, minusResult);

// homeworkCalculator.minus(1, 2);
// homeworkCalculator.divide(10, 2);
// homeworkCalculator.powerof(4, 4);

// console.log("this is fake !! 😎");

// console.log(homeworkCalculator.plus(2,3));

const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;

    return "hello";
}

const krAge = calculateKrAge(age);

console.log(krAge);