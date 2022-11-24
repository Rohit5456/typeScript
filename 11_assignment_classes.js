var Organizers = /** @class */ (function () {
    function Organizers(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizers.prototype.display = function () {
        console.log(this.id, this.name);
    };
    return Organizers;
}());
var objOrgnizer = new Organizers(123, "Mumbai");
console.log(objOrgnizer);
console.log("==============================================");
var Eventes = /** @class */ (function () {
    function Eventes(id, name, discriptions, startTime) {
        this.id = id;
        this.name = name;
        this.discriptions = discriptions;
        this.startTime = startTime;
    }
    Eventes.prototype.display = function () {
        console.log(this.id, this.name, this.discriptions, this.startTime);
    };
    return Eventes;
}());
var objEventes = new Eventes(78, "Rony Disuja", 'Wel-Come!!!', "12:45pm");
console.log(objEventes);
console.log("=========================================");
var Venues = /** @class */ (function () {
    function Venues(id, name, descriptions, startTime, address) {
        this.id = id;
        this.name = name;
        this.descriptions = descriptions;
        this.startTime = startTime;
        this.address = address;
    }
    Venues.prototype.display = function () {
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.descriptions, " ").concat(this.startTime, " ").concat(this.address));
    };
    return Venues;
}());
var objVenuess = new Venues(58, "Jay Kishan Mahatre", 'Wel-Come', "4:30am", "Linda Hounse No.:847");
console.log(objVenuess);
