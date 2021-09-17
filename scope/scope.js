
// let name = "Lorraine";
// let age = 42;
// let team = "Manchester United";

// const myFunction = () => {
//     let a = 1;
//     let b = 2;
//     let c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(team)
// };

// console.log(name);
// console.log(age);
// myFunction();
// console.log(team)
// console.log(a);

// Console.log(a) wont work because it is defined inside the function. It has block scope only.
// Console.log(team) works inside the function and outside the function because it has global scope.
//  Console.log(name) works because it is defined outside the function. It has Global scope.



// Reference to the whichGreeting function is passed to the greet fuunction.
// The whichGreeting function is then invoked inside the  greet function.

// let whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`)
// };

// let greet = (time, fn) => {
//     if (time < 12) {
//         fn("Morning")
//     }
//     else if (time > 12 && time < 18) {
//         fn("Afternoon");
//     }
//     else {
//         fn("Evening")
//     }
// };

// greet(14, whichGreeting);

//  Try this again my own info

// let myPet = (health) => {
//     console.log(`Your pet has ${health} health.`)
// };

// let healthStat = (stat, fn) => {
//     if (stat < 20) {
//         fn("Low Health")
//     }
//     else if (stat > 20 && stat < 80) {
//         fn("Healthy");
//     }
//     else { fn("Great"); }

// };

// myPet(23, healthStat);


// // Challenge 1 - write a simple function which logs hello code nation to the console

// let greet = () => {
//     console.log("Hello Code Nation");
// };
// greet();

// // write a higher order function which runs our simple function 5 times, calling the function only once

// let repeat = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log("Hello Code Nation");
//     }
// };

// repeat();

// Challenge 2 

// let addUp = (num1, num2) => {
//     let result = num1 + num2;
//     console.log(result);
// };

// addUp(2, 5);


// let addUp5 = (num1, num2) => {
//     let result = num1 + num2;
//     for (let i = 0; i < 5; i++); {
//         let total = (result += result * 5);
//         console.log(total);
//     }
// };

// addUp5(2, 8);


// Challenge 3 - declare array and use .map to iterate through array and multiply each number by three. console,log these values

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map(timesThree => {
//     console.log(timesThree * 3);
// }
// )

// Challenge 4 - Test the function. Pass a parameter to the doMath function, then pass a number and a function to the doMath function

// const multiply = (a, b) => {
//     return a * b;
// }
// const add = (a, b) => {
//     return a + b;
// }
// const divide = (a, b) => {
//     return a / b;
// }
// const subtract = (a, b) => {
//     return a - b;
// }

// const doMath = (num1) => {
//     return (num2, fn) => {
//         return fn(num1, num2);
//     }
// };

// let value = doMath(6);
// console.log(value(7, add));
// console.log(value(4, divide));
// console.log(value(8, multiply));
// console.log(value(2, subtract));

// value = doMath(10);
// console.log(value(7, add));
// console.log(value(4, divide));
// console.log(value(8, multiply));
// console.log(value(2, subtract));