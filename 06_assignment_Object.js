console.log('======Assignment Object=====');
var employe = {
    empId: 1,
    empName: "Rajesh",
    empAge: 25,
    empSalary: 25000,
    empAddress: "Juhu"
};
console.log(employe);
console.log('=====Traversing Object=====');
for (var key in employe) {
    if (Object.prototype.hasOwnProperty.call(employe, key)) {
        var element = employe[key];
        console.log(element);
    }
}
console.log('=====Object Destructuring=====');
var Id = employe.empId, Name = employe.empName, Age = employe.empAge, Salary = employe.empSalary, Address = employe.empAddress;
console.log(Id, Name, Age, Salary, Address);
