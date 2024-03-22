"use strict";
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(98, 69, 85, 63));
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(90);
console.log(addFive(56));
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let Profile = (function () {
    let name = "Nazar Baloch";
    let age = 18.2;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
Profile.displayInfo();
