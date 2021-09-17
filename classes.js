// // Refresher javascript

// //  3 variables, string, number and boolean
// let name = "Lorraine";
// let age = 42;
// let coffeeLover = true;

// // Make an array. console log array. Add an item to the array and console log each item in the array
// let myDrinks = ["coffee", "orange juice", "lemonade", "water"];

// myDrinks.push("wine");
// console.log(myDrinks);

// for (i = 0; i < myDrinks.length; i++) {
//     console.log(myDrinks[i]);
// }

// // Create a function that when called asks you to withdraw an amount. Balance should reduce as appropriate
// let balance = 350;
// const withdraw = (amount) => {
//     balance - amount;
//     return "Withdrawal was successful";
// }

// console.log(withdraw(50));

// // Define an object
// let obj = {
//     name: "Lorraine",
//     age: 42,
//     footballTeam: "manUnited",
// };

// let obj2 = {
//     name: "Sasha",
//     age: 21,
//     footballTeam: "manUnited",
// };
// // This isnt DRY - Dont Repeat Yourself

// // Classes are a template to create objects

class animal {
    constructor(name) {
        this._name = name;
        this._hunger = 0;
        this._sleep = 100;
        this._thirst = 0;
    }

    get name() {
        return this._name;
    }
    get stats() {
        return {
            hunger: this._hunger,
            thirst: this._thirst,
            sleep: this._sleep,
        }
    };
}

class cat extends animal {
    constructor(name) {
        super(name);
        this._mouseCaught = 0;
    }
    hunting() {
        this._mouseCaught++;
    }
}

class Bunny {
    constructor(fname, sname) {
        this._fname = fname;
        this._sname = sname;
        this._hops = 0;

    }
    get fname() {
        return `${this._fname}`;
    }
    get sname() {
        return `${this._sname}`;
    }
    get hops() {
        return this._hops;
    }
    increaseHops() {
        this._hops++;
    }
};


const Sherlock = new Bunny("sherlock", "kirby");
const Bugs = new Bunny("Bugs", "Bunny");

console.log(Sherlock);
Sherlock.increaseHops();
console.log(Sherlock.hops);

// class car {
//     constructor(manufacturer, model, colour) {
//         this._manufacturer = manufacturer;
//         this._model = model;
//         this._colour = colour;
//         this._speed = 0;
//         this._turning = 0;
//         this._beeping = 0;
//     }

//     speedUp() {
//         this._speed++;
//         console.log("Car is speeding up");
//     }
//     brake() {
//         this.speed--;
//         console.log("Car is slowing down");
//     }
//     turn(direction) {
//         if (direction == "left") {
//             console.log("car is turning left");
//         }
//         else if (direction == "right") {
//             console.log("car is turning right");
//         } else {
//             console.log("your car is upside down");
//         }
//     }
//     beepBeep() {
//         console.log("beep beep");
//     }
// };

// const lorrainesCar = new car("VW", "Beetle", "green");
// const carlsCar = new car("Ford", "Mustang", "Red");
// const christinesCar = new car("Fiat", "Punto", "Silver");

// console.log("Car is turning")
// lorrainesCar.turn("right");
// console.log(lorrainesCar);
