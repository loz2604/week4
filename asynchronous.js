// // Call stack example
// // setTimeout simulates a program taking a while to run
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// // Does this first
// console.log(a);

// // Sends to callback queue
// // Does this last
// setTimeout(() => {
//     console.log(b)
// }, 2000);
// // Sends to callback queue
// //  Does this third because it has 0 delay
// setTimeout(() => {
//     console.log(c)
// }, 0);
// // does this second
// console.log(d);



// // Handling the promise with Async / Await - Example

// let users = ["Jess", "Dan", "Alex"]

// const addUser = (newUser) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;
//             if (newUser.length < 2) {
//                 error = true;
//             } else {
//                 users.push(newUser);
//             }

//             if (!error) {
//                 resolve();
//             } else {
//                 reject("Oops");
//             }
//         }, 2000);
//     });
// };

// const showUsers = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             for (let i = 0; i < users.length; i++) {
//                 const user = users[i];
//                 console.log(user);
//             }
//             resolve();
//         }, 3000);
//     })
// };

// //  handling promise with .then .catch
// addUser("Amina")
//     .then(showUsers)
//     .catch((err) => {
//         console.log(err);
//     });

// //  Await / Async

const init = async () => {
    await addUser("Amina");
    await showUsers();
    console.log("That's all folks!");
};

init();