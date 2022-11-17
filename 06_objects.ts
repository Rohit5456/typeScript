var emp = {
    name: "rohit",
    score: 5471,

}
for (const key in emp) {
    console.log(key);
    console.log(emp[key]);

}


var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}




var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;  // destructuring

console.log(userFirstname);
console.log(userLastName);
