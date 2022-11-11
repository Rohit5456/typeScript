// var num1 = prompt("Enter Number");
// var num2 = prompt("Enter Number");
// var num3 = prompt("Enter Number");
var gradeCalculator = function (num1, num2, num3) {
    console.log("Mathematics Marks: ".concat(num1));
    console.log("Science Marks: ".concat(num2));
    console.log("Physics Marks: ".concat(num3));
    var sumOfMarks = (num1 + num2 + num3) / 3;
    console.log("Avarage Of Marks is : ".concat(sumOfMarks));
    if (sumOfMarks <= 70) {
        console.log("Grade is 'C'");
    }
    else if (sumOfMarks >= 70 && sumOfMarks <= 90) {
        console.log("Grade is 'B'");
    }
    else if (sumOfMarks >= 90) {
        console.log("Grade is 'A'");
    }
};
gradeCalculator(78, 85, 76);
