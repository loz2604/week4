// Importing functions from another js file locally

// let { cleverFunctions } = require("./cleverFunctions");

// console.log(cleverFunctions.add(2, 3));
// console.log(cleverFunctions.multiply(2, 3));

// Can import particular functions instead of the whole file

// let { add, multiply } = require("./cleverFunctions");

// console.log(add);
// console.log(multiply);

//  Using core modules

// const os = require("os");
// const fs = require("fs");

// let userDetails = os.userInfo().username;

// fs.appendFile("oh-hi.txt", `Hello ${userDetails}`, (err) => {
//     if (err) {
//         console.log("Oops");
//     }
// });

// const _ = require("lodash");

// console.log(_.chunk(["a", "b", "c", "d"], [2]));
// console.log(_.drop(["a", "b", "c", "d"], "d"));
// console.log(_.reverse(["a", "b", "c", "d"]));
// console.log(_.join(["a", "b", "c", "d"], " ~ "));

// Another way to import functions

// import { add, multiply } from "./cleverFunctions.js"

// console.log(multiply(5, 9));