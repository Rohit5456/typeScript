//   enum emp {
//     empId,
//     empName,
//     empAddress,
//     empAge
//  }
//  console.log(emp.empId,emp.empName,emp.empAddress,emp.empAge);
var empDetails;
(function (empDetails) {
    empDetails["empId"] = "1";
    empDetails["empName"] = "rohit";
    empDetails[empDetails["empAge"] = 25] = "empAge";
    empDetails["empAddress"] = "Tipst Villa";
})(empDetails || (empDetails = {}));
console.log(empDetails.empId, empDetails.empName, empDetails.empAge, empDetails.empAddress);
//array
var arr1 = [1, 5, 8, 65, 5, 4, 6, 5454, 98, 25, 2, 4, 6, 5, 65, 58, 6, 6, 6, 36, 2, 2, 14, 4, 5, 65, 4, 25];
console.log(arr1);
arr1.forEach(function (element) {
    console.log(element);
});
var id = empDetails.empId, names = empDetails.empName, age = empDetails.empAge, address = empDetails.empAddress; //destruturing for object
console.log(id, names, age, address);
console.log(empDetails);
for (var index = 0; index < arr1.length; index++) {
    var element = arr1[index];
    console.log(element);
}
// arr1.splice(4, 0, 102);
// console.log(arr1);
// arr1.splice(3, 7);
// console.log(arr1);
// arr1.splice(0, 3, 12222, 1222222222);
// console.log(arr1);
var setName = new Set(arr1);
console.log(setName);
