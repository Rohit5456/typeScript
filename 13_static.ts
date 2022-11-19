console.log(`==============Using static Keyword ==============`);

let num1: number = 100;
let num2: number = 50;
class Calculations {
    static addition: number = num1 + num2;
    static multiplicationn: number = num1 * num2;
    static substraction: number = num1 - num2;
    static reminder: number = num1 / num2;
    display() {
        console.log(`The addition of ${num1} and ${num2} is: ${Calculations.addition}`);
        console.log(`The multiplication of ${num1} and ${num2} is: ${Calculations.multiplicationn}`);
        console.log(`The substraction of ${num1} and ${num2} is: ${Calculations.substraction}`);
        console.log(`The reminder of ${num1} and ${num2} is: ${Calculations.reminder}`);
    }
}
// console.log( `The addition of ${num1} and ${num2} is:`,Calculations.addition=num1-num2);
let operations = new Calculations();
operations.display();


