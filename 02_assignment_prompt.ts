// var num1 = prompt("Enter Number");
// var num2 = prompt("Enter Number");
// var num3 = prompt("Enter Number");

var gradeCalculator = (num1: number, num2: number, num3: number) => {
    console.log(`Mathematics Marks: ${num1}`)
    console.log(`Science Marks: ${num2}`)
    console.log(`Physics Marks: ${num3}`)

    var sumOfMarks = (num1 + num2 + num3) / 3;
    console.log(`Avarage Of Marks is : ${sumOfMarks}`);

    if (sumOfMarks <= 70) {
        console.log("Grade is 'C'");

    } else if (sumOfMarks >= 70 && sumOfMarks <= 90) {
        console.log("Grade is 'B'");

    } else if (sumOfMarks >= 90) {
        console.log("Grade is 'A'");

    }
}
gradeCalculator(78,85,76);














