var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
console.log(gender.female);
console.log(gender.male);
console.log(gender[0]);
console.log(gender[1]);
