
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");

// figlet('Cyber Pet!!', function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     } console.log(data);
// });


//  Need async await to wait for the cyber pet ascii to load before loading choose your pet

inquirer.prompt([
    {
        name: 'pet',
        message: 'Choose Your Pet',
        type: "list",
        choices: ["Dog", "Cat", "Rabbit"]

    },
    {
        name: "name",
        message: "Great choice, what are you going to name them?",
        type: 'input'
    }])

    .then(function (answer) {

        console.log(answer);
    });

// const ui = new inquirer.ui.BottomBar();

// ui.log.write("Hello");
// ui.updateBottomBar("New bottom bar content");
// outputStream.pipe(ui.log);

// console.log(chalk.yellow("Hello"))