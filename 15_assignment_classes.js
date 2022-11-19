var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    function Organizer() {
    }
    Organizer.prototype.print = function () {
        console.log("The orgnizer...");
    };
    return Organizer;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Person.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("The Id is: ".concat(this.id, " Name: ").concat(this.name));
    };
    return Person;
}(Organizer));
var output = new Person(12, "rohit");
output.print();
console.log("=============================");
var Events = /** @class */ (function () {
    function Events() {
    }
    Events.prototype.print = function () {
        console.log("Event");
    };
    return Events;
}());
var Family = /** @class */ (function (_super) {
    __extends(Family, _super);
    function Family(id, name, description, starTime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.startTime = starTime;
        return _this;
    }
    Family.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("The Id No.: ".concat(this.id, "\n     The Name: ").concat(this.name, " \n     The Description is: ").concat(this.description, " \n     Time: ").concat(this.startTime));
    };
    return Family;
}(Events));
var celebration = new Family(1, "Rohan Jadav", "Wel-come", '12:54pm');
celebration.print();
console.log("===============================================");
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    Venue.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("The Id No.: ".concat(this.id, "\n        The Name: ").concat(this.name, " \n        The Description is: ").concat(this.description, " \n        Address: ").concat(this.address));
    };
    return Venue;
}(Events));
var ro = new Venue(45, "Rohan Handa", "Hello!!!", "Shahu Nagar 34 near subhodh colny");
ro.print();
