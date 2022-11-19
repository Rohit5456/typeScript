class Student {
    get name() {
        // format 
        return this._userName;
    }
    set name(name) {
        //  if(name == "codemind") {
        this._userName = name;
        //  }
    }
    display() {
        console.log(this._userName);
    }
}
var objstudent = new Student();
objstudent.name = "Codemind";
console.log(objstudent.name);
console.log(`=============================================================`);
class Person {
    get information() {
        return this._personInformation;
    }
    set information(information) {
        this._personInformation = information;
    }
    display() {
        console.log(this._personInformation);
    }
}
let info = new Person();
info.information = "my name is Rohit Pawar";
console.log(info.information);
