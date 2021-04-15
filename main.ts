export {}
let message = 'Welcome back';
console.log(message);

let isBeginner: boolean = true;
let total: number  = 0;

let name: string  = " Lang ";
let sentence: string = `My name is ${name}
I am new in Typescript`

//name = true; //type error
console.log(sentence);

let isNew: boolean = null;
let myName: string = undefined; 

let list1: number[]= [1,2,3];
let list2: Array<number> =[1,2,3];

let person1:[string, number] = ['Chris', 22];

enum Color {Red=10, Green, Blue}
let c: Color = Color.Green; 

console.log(person1[1].toString()+c);

let randomValue: any = 30;
randomValue = true; 

// not assign a value, type can be any
let a;
a = 10;
a = true;

let b = 20;
// b = true; ////not allowed

let multiType: number | boolean;
multiType = 20;
multiType = true; 

function add(num1:number, num2:number=10): number { //num2? optional 
    return num1 + num2; 
}
console.log(add(5,6)); 
console.log(add(5))
//add(5,'10');

//interface
interface Person{
    firstName: string;
    lastName?: string; 
}

function fullName1(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

function fullName(person: {firstName:string, lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName:"lang",
    lastName:"Deng"
};

fullName(p);
fullName1(p);

class Employee{
    employeeName: string,
    constructor(name: string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let ep = new Employee('Lizzie');
console.log(ep.employeeName);
ep.greet();

class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`manager delegating tasks`)
    }
}
let m1 = new Manager('Lang');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName)