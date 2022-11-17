interface IPersonDetails {
    id: number;
    firstName: string;
    lastName: string;
    xender: string;
    street: string
}

interface IPersonOtherDetails {
    education: string;
    workInCompany: string;
    exprience: string;
    salary: number;
}

interface IPerson extends IPersonDetails, IPersonOtherDetails {
    age: number;
    hobbies: string;
    specialFood: string;
}

var personInformation: IPerson = {
    id: 124,
    firstName: "Rohit",
    lastName: "Pawar",
    xender: "Male",
    street: "145 Sai Vilas sangli",
    education: "B.A",
    workInCompany: "Trimurti Agencies",
    exprience: "2 year",
    salary: 20000,
    age: 26,
    hobbies: "Playing Criket",
    specialFood: "Dal Rice"
}
console.log("Person Details :", personInformation);

