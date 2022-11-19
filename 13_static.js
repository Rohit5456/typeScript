console.log("==============Using static Keyword ==============");
var num1 = 100;
var num2 = 50;
var Calculations = /** @class */ (function () {
    function Calculations() {
    }
    Calculations.prototype.display = function () {
        console.log("The addition of ".concat(num1, " and ").concat(num2, " is: ").concat(Calculations.addition));
        console.log("The multiplication of ".concat(num1, " and ").concat(num2, " is: ").concat(Calculations.multiplicationn));
        console.log("The substraction of ".concat(num1, " and ").concat(num2, " is: ").concat(Calculations.substraction));
        console.log("The reminder of ".concat(num1, " and ").concat(num2, " is: ").concat(Calculations.reminder));
    };
    Calculations.addition = num1 + num2;
    Calculations.multiplicationn = num1 * num2;
    Calculations.substraction = num1 - num2;
    Calculations.reminder = num1 / num2;
    return Calculations;
}());
// console.log( `The addition of ${num1} and ${num2} is:`,Calculations.addition=num1-num2);
var operations = new Calculations();
operations.display();
