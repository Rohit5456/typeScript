import { Calculator} from './14_calc';

var objCalc = new Calculator();
console.log(objCalc.add(2,3));
console.log(objCalc.sub(10, 5));


let courses = ["Angular", "React", "Nodejs"];

console.log(courses.toString());

interface IEmployee {
    id: number;
    name: string;
    lastname: string;
}

let e1: IEmployee;

let e2 = { id: 123, name: "John"};


//e1 = e2 ; // type casting . 

//e2 = e1; //
