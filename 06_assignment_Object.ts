console.log('======Assignment Object=====');
const employe = {
    empId: 1,
    empName: "Rajesh",
    empAge: 25,
    empSalary: 25000,
    empAddress: "Juhu",
}
console.log(employe);
console.log('=====Traversing Object=====');
for (const key in employe) {
    if (Object.prototype.hasOwnProperty.call(employe, key)) {
        const element = employe[key];
        console.log(element);

    }
}

console.log('=====Object Destructuring=====');
var { empId: Id, empName: Name, empAge: Age, empSalary: Salary, empAddress: Address } = employe
console.log(Id,Name,Age,Salary,Address);


