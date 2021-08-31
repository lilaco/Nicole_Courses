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

// const calculatorExample = {
//     add: function (a, b) {
//         console.log(a, b);
//     },
// };
// // a+b, a-b, a*b, a/b, a**b 기능이 있는 object 만들기

// const calculator = {
//     add: function (firstNumber, secondNumber) {
//         console.log(firstNumber + secondNumber);
//     },
//     minus: function (firstNumber, secondNumber) {
//         console.log(firstNumber - secondNumber);
//     },
//     times: function (firstNumber, secondNumber) {
//         console.log(firstNumber * secondNumber);
//     },
//     divide: function (firstNumber, secondNumber) {
//         console.log(firstNumber / secondNumber);
//     },
//     powerOf: function (firstNumber, secondNumber) {
//         console.log(firstNumber / secondNumber);
//     },
// };

// calculator.add(12,14);
// calculator.minus(22,13);
// calculator.times(2,3);
// calculator.divide(16,4);
// calculator.powerOf(3,4);
//-----------------------------------------------------------------------------------

/*
* #2.11 Returns
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// const calculator = {
//     plus: function (firstNumber, secondNumber) {
//         return firstNumber + secondNumber;
//     },
//     minus: function (firstNumber, secondNumber) {
//         return firstNumber - secondNumber;
//     },
//     times: function (firstNumber, secondNumber) {
//         return firstNumber * secondNumber;
//     },
//     divide: function (firstNumber, secondNumber) {
//         return firstNumber / secondNumber;
//     },
//     powerOf: function (firstNumber, secondNumber) {
//         return firstNumber / secondNumber;
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.powerOf(divideResult, minusResult);



// console.log(plusResult);

// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);
//-----------------------------------------------------------------------------------

/*
* #2.13 Conditionals
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// const age = parseInt(prompt("How old are you?"));


// console.log(typeof "15", typeof 15);
// console.log(age);
// console.log(isNaN(age));

// if(isNaN(age)){
//     alert("Please write your age as number.");
// } else {
//     alert("Your age is " + age +"😊");
// }
//-----------------------------------------------------------------------------------

/*
* #2.14 Conditionals part Two
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// const age = parseInt(prompt("How old are you?"));

// console.log(age);
// console.log(isNaN(age));

// // if(isNaN(age)){
// //     console.log("Please write a number.");
// // } else {
// //     console.log("Thank you for writing your age.");
// // }

// // 음주가능 나이 계산(먼저 해보기)
// // 18세 이하인지 판별, 18세 초과 - 50세 이하, 50세 초과 건강이 걱정되어요.

// if(isNaN(age)){
//     alert("Please write a number.");
// } else {
//     if(18 > age){
//         alert("You can't drink an alcohol!😒");
//     } else if(18 < age && 50 >= age){
//         alert("Bottom's up!🍻");
//     } else {
//         alert("I think you shouldn't drink alcohol for your health.😯");
//     }
// }

//-----------------------------------------------------------------------------------

/*
* #2.15 Conditionals part Three
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number.");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink.");
// } else if (age > 50 && age <= 80){
//     console.log("You should exercise.");
// } else if (age > 80) {
//     console.log("You can do whatever you want.");
// }
//-----------------------------------------------------------------------------------

/*
* #3.0 Document Objects
*
* Written by ZOONG
* Created date : 2021-08-26
*/

// console.dir(document);
// document.title = "Hi"; // document를 이용해서 title을 바꿀수 있다. javascript는 HTML과 연결되어있음.
// document.title = "Hello! From JS."
//-----------------------------------------------------------------------------------

/*
* #3.1 HTML in Javascript
*
* Written by ZOONG
* Created date : 2021-08-27
*/

// const title = document.querySelector("#title");
// console.dir(title);

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);
//-----------------------------------------------------------------------------------

/*
* #3.2 Searching For Elements
*
* Written by ZOONG
* Created date : 2021-08-27
*/

// querySelector는 element를 css방식으로 검색할 수 있다.(CSS Selector)
// querySeclector는 첫번째 것만 가져온다. 모두 가져오고 싶다면 querySelectorALl을 사용.
// const title = document.querySelector(".hello h1");
// console.log(title);

// title.innerText = "Hello😃"
//-----------------------------------------------------------------------------------

/*
* #3.3 Events
*
* Written by ZOONG
* Created date : 2021-08-27
*/

// // querySelector is best way to access element!
// const title = document.querySelector("div.hello h1");

// // console.log(title);

// // title.innerText = "Hello!";

// // //on이 앞에 있는 object는 event. style도 변경가능.



// function handleTitleClick() {
//     console.log("title was clicked!");
//     title.style.color = "blue";
// }

// //항상 이런식으로 사용할 것. function을 직접 실행하지 않고 Listener를 통해서 실행 할 수 있도록 한다.
// title.addEventListener("click", handleTitleClick);
//-----------------------------------------------------------------------------------

/*
* #3.4 Events part Two
*
* Written by ZOONG
* Created date : 2021-08-27
*/

// // Event를 사용하고 싶을때, Web API document를 찾아보거나. console.dir("element"); 를 활용할 것

// const title = document.querySelector("div.hello h1");

// console.dir(title);

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// function handleMouseEnter() {
//     title.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);
//-----------------------------------------------------------------------------------

/*
* #3.5 More Event
*
* Written by ZOONG
* Created date : 2021-08-27
*/

// const h1 = document.querySelector("div.hello h1");

// console.dir(h1);

// function handleTitleClick() {
//     h1.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     // document (body, title, head)의 경우는 중요한 element에 속해서 document에서 바로 불러올 수 있지만,
//     // 다른 태그는 querySelector나 getElementById 등으로 찾아와야 한다.
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("How dare you!😐");
// }

// function handleWindowOffline() {
//     alert("📢You need to WIFI!");
// }

// function handleWindowOnline() {
//     alert("ALLLLL GOOOOOOD!!📡")
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);


// // Event를 실행시키는 다른 방법
// // title.onclick = handleTitleClick;
// // title.onmouseenter = handleMouseEnter;
// // title.onmouseleave = handleMouseLeave;

// // 하지만, 니꼬가 addEventListener를 더 선호하는 이유는,
// // 나중에 removeEventListener를 통해서 event listener를 제거할 수 있기 때문.

// // window는 기본적으로 제공.
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
//-----------------------------------------------------------------------------------

/*
* #3.6 CSS in Javascript
*
* Written by ZOONG
* Created date : 2021-08-27
*/

// const h1 = document.querySelector("div.hello h1");

// function handlerTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;

//     if(currentColor === "blue"){
//        newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handlerTitleClick);

// // Javascript Steps!
// // step 1. Find the element
// // step 2. listen for element
// // step 3. React element
//-----------------------------------------------------------------------------------

/*
* #3.7 CSS in Javascript Part Two
*
* Written by ZOONG
* Created date : 2021-08-28
*/
// const CLICKED = "clicked";

// const h1 = document.querySelector("div.hello h1");

// function handleTitleClick() { 
//     if(h1.className === CLICKED) {
//         h1.className = "";
//     } else {
//         h1.className = CLICKED;
//     }
// }

// h1.addEventListener("click", handleTitleClick);
//-----------------------------------------------------------------------------------

/*
* #3.8 CSS in Javascript Part Three
*
* Written by ZOONG
* Created date : 2021-08-28
*/
const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
    const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
    h1.classList.toggle(clickedClass);
}
    

h1.addEventListener("click", handleTitleClick);

// #4.0부터는 Clone_Code_v2.0 폴더에서 이어집니다.