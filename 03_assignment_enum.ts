//   enum emp {
//     empId,
//     empName,
//     empAddress,
//     empAge
//  }
//  console.log(emp.empId,emp.empName,emp.empAddress,emp.empAge);

enum empDetails {
    empId = "1",
    empName = "rohit",
    empAge = 25,
    empAddress = "Tipst Villa"
}
console.log(empDetails.empId, empDetails.empName, empDetails.empAge, empDetails.empAddress);

//array
var arr1: Array<number> = [1, 5, 8, 65, 5, 4, 6, 5454, 98, 25, 2, 4, 6, 5, 65, 58, 6, 6, 6, 36, 2, 2, 14, 4, 5, 65, 4, 25];
console.log(arr1);

arr1.forEach(element => {
    console.log(element);
});
var { empId: id, empName: names, empAge: age, empAddress: address } = empDetails; //destruturing for object
console.log(id, names, age, address);
console.log(empDetails);

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);

}
arr1.splice(4, 0, 102);
console.log(arr1);
arr1.splice(3, 7);
console.log(arr1);
arr1.splice(0, 3, 12222, 1222222222);
console.log(arr1);

