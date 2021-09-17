// // Local Module exports
// const add = (num1, num2) => {
//     return num1 + num2;
// };

// const { fstat } = require("fs");

// const multiply = (num1, num2) => {
//     return num1 * num2;
// }

// module.exports = {
//     add: add,
//     // or add, because they have the same name
//     multiply,
//     // Can do as many as we want
//     name: "Clever Functions",
//     desc: "Please use my super useful and amazing functions"
// };

// Different way one at a time
export const multiply = (num1, num2) => {
    return num1 * num2;
};

export const add = (num1, num2) => {
    return num1 + num2;
};

// Different way of adding lots of functions at the same time
export default {
    add,
    multiply,
};