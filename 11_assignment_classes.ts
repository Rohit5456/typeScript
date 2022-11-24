interface IEvents {
    id: number;
    name: string;
    
}

class Organizers implements IEvents {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id, this.name);

    }
}


var objOrgnizer = new Organizers(123, "Mumbai");
console.log(objOrgnizer);

console.log(`==============================================`);
class Eventes implements IEvents {
    id: number;
    name: string;
    discriptions: string;
    startTime: any;
    constructor(id: number, name: string, discriptions: string, startTime: any) {
        this.id= id;
        this.name =name;
        this.discriptions= discriptions;
        this.startTime= startTime;
    }
    display(){
        console.log(this.id ,this.name ,this.discriptions ,this.startTime);
    }
}
const objEventes = new Eventes(78,"Rony Disuja",'Wel-Come!!!',"12:45pm");
console.log(objEventes);

console.log(`=========================================`);

class Venues implements Eventes{
    id:number;
    name:string;
    descriptions:string;
    startTime: string;
    address:string;
    constructor(id:number,name:string,descriptions:string,startTime:string,address:string){
        this.id=id;
        this.name=name;
        this.descriptions=descriptions;
        this.startTime= startTime;
        this.address=address;
    }
    discriptions: string; 
    display() {
        console.log(`${this.id} ${this.name} ${this.descriptions} ${this.startTime} ${this.address}`);
    }
}

const objVenuess = new Venues(58,"Jay Kishan Mahatre",'Wel-Come',"4:30am","Linda Hounse No.:847");
console.log(objVenuess);
