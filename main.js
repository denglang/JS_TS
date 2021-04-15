"use strict";
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
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var isBeginner = true;
var total = 0;
var name = " Lang ";
var sentence = "My name is " + name + "\nI am new in Typescript";
//name = true; //type error
console.log(sentence);
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(person1[1].toString() + c);
var randomValue = 30;
randomValue = true;
// not assign a value, type can be any
var a;
a = 10;
a = true;
var b = 20;
// b = true; ////not allowed
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(5, 6));
console.log(add(5));
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName);
}
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "lang",
    lastName: "Deng"
};
fullName(p);
fullName1(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var ep = new Employee('Lizzie');
console.log(ep.employeeName);
ep.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Lang');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
