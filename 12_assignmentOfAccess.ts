
class PersonIs {
    private _student: string;
    private _employe: string;
    protected _work: string;

    get name(): string {
        return this._student, this._employe, this._work;
    }
    set name(name: string) {
        this._student = name;
        this._employe = name;
        this._work = name;
    }
    display() {
        console.log(this.name);

    }
}
let student = new PersonIs();
student.name = "The student Name is : Rohan Parel";
console.log(student.name);
let employe = new PersonIs();
employe.name = "The Employe name is : Raj Patil";
// console.log(employe.name);
employe.display();
let work = new PersonIs();
work.name = "The work is : Handling Operations";
work.display();