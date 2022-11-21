// class Student {
//     public studentName: string;
//     public studentId: number;
//     public studentAge: number;
//     public studentClass: string;

//     public print(): void {
//         console.log("This is an student Information");

//     }
// }
// 4
// class FirstStudent extends Student {
//     constructor(studentName: string, studentId: number, studentAge: number, studentClass: string) {
//         super();
//         this.studentName = studentName;
//         this.studentId = studentId;
//         this.studentAge = studentAge;
//         this.studentClass = studentClass;
//     }
//     public print(): void {
//         super.print()
//         console.log(this.studentName, this.studentAge, this.studentClass, this.studentId);

//     }
// }

// class SecondStudent extends Student {
//     constructor(studentName: string, studentId: number, studentAge: number, studentClass: string) {
//         super()
//         this.studentName = studentName;
//         this.studentId = studentId;
//         this.studentAge = studentAge;
//         this.studentClass = studentClass;
//     }
//     public print(): void {
//         super.print()
//         console.log(this.studentName, this.studentId, this.studentAge, this.studentClass);
//     }
// }

// let info: Student[] = new Array(new FirstStudent("rohit", 2343, 26, "B.Sc"), new SecondStudent("rony",232,43,"dddd"));

// for (const iterator of info) {
//     iterator.print();
// }


import { Calculator} from "./14_calc";
let cal = new Calculator();
console.log(cal.add(45,85));
console.log(cal.sub(45,85));
