var emp = {
    name: "rohit",
    score: 5471
};
for (var key in emp) {
    console.log(key);
    console.log(emp[key]);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
