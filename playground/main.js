var dog = {
    tall : 5,
    "his name": "Tomy",
    "his breed": "German",
    123456 : "Valid Tag Id",
    "height": "2",
    "password": "rampass"
};

var copyObject = JSON.stringify(dog);

console.log(copyObject);

if(dog.hasOwnProperty(123456))
console.log(typeof(dog));

console.log(dog["his breed"]);
console.log(dog.height);

for(var i = 0; i<=14; i++)
{
    console.log(i);
}

console.log(i);

function randomBetweenTwoNumbers(myMin, myMax)
{
    "use strict";
    var number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

    console.log(number);
    console.log(parseInt("Ram")); // NaN
    console.log(parseInt("0101", 2)); // 5

}

randomBetweenTwoNumbers(5, 10);

const testArray = [2, 5, 7, 8]; // Const array
console.log(testArray);

testArray[0] = 6;
testArray[1] = 6;
testArray[2] = 6;
testArray[3] = 6;

console.log(testArray.length);

testArray.pop(); // No error when we choose to pop out some
testArray.pop();

console.log(testArray);
console.log(testArray.length);

const objectRam = {
    Age: 12,
    Height: 5,
    Name: "Ram",
    12345: "ok"
};

delete objectRam.Age; // No error if you choose to delete the property!

console.log(objectRam);

/* To prevent the object from mutation use Object.freeze(ourownobject); */
Object.freeze(testArray);

testArray.pop(); // Exception will happen

// Annonymous function

var ramFunction = (a, b) =>  a + b;

console.log(ramFunction(10, 15));

// "..." - The use of REST operator!
const sum = (function() {
    return function sum1(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(2,3,4,6));

const square = (function() {
    return function squareOfANumber(...args) {
        return args.filter(num => num > 0).map(num => num * num);
    };
})();

console.log(square(1,4,6,-5,7,-8,0));

var arrayRam = [1,2,3,4,5];
let arrayShyam;
(function()
{
    arrayShyam = arrayRam; // << --
    arrayRam[0] = 10;
})();

console.log(arrayShyam);

(() =>
{
    "use strict"
    arrayShyam = [...arrayRam]; // We copied the first arrayRam before changing it first value!
    arrayRam[0] = 10;
})(); // Closing bracked is calling this arrow function!

console.log(arrayRam);
console.log(arrayShyam);

// Destructuring assignment

const arrayRam_1 = [1,2,3,4,5];
let a1,b1;
[a1,b1] = arrayRam_1

console.log(a1);
console.log(typeof(a1));
console.log(b1);

// visit for below snippets https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const newObject = {name:"Ram", height:"5", school:"newton"};

const  { name: newName, height: newHeight } =  newObject;

console.log(newName);
console.log(newHeight);

// Switching the varialbes without a third variable

let x = 5, y =10;

(() => {

    [x,y] = [y,x];

})();

console.log(x);
console.log(y);

const ramprakashArray = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayNew;
(() => {
    "use strict"
    { [, , ...arrayNew] = ramprakashArray };

})();

console.log(arrayNew);

const ramObectAPI = {
    name: "Ram",
    age: 28,
    height: 6,
    company: "Eurofins",
    minSalaryExpectation: 10,
    maxSalaryExpectation: 50,
    others: { Hobby: "Reading", Adventure: "Hiking" } // Nested object can also be destructuring
};

/* In the below code result is holding the pointer to the 
 function who uses destructuring of object to hold only that is need further down the fuction */
const result = (() => {

    return ({ minSalaryExpectation, maxSalaryExpectation, others: { Hobby } }) => {
        console.log(Hobby); // For nested object!
        return (minSalaryExpectation + maxSalaryExpectation) / 2;
    };
})();
console.log(result(ramObectAPI));

/* Commposing the string using literals and backtik (`)
Benefits of using backtik using single or double quote are:
1. Can divide the string in many lines
2. Can use single or double quote without using any escapte sequence
3. Can include piece of variable strings placeholder*/

var statement =
    `Hi, I am Ram Prakash Sharma` + " " +
    `and my hobby is <h1>${ramObectAPI.others.Hobby}.</h4>`;
console.log(statement);

//When you know the properties are same as variable name
const createPerson = (name, age, height) => ({ name, age, height });
console.log(createPerson("Ram Sharma", 15, 6));

//When the properties and variable are not same

const createTable = (woodType, color, value) => {
    return {
        Type: woodType,
        Color: color,
        Value: value
    }
};
console.log(createPerson("Ram Sharma", 28, 10));

// An object can have a function within it
const ageCounter = {
age: 12,
setAge: function(newValue){
    "use strict"
    this.age = newValue;
}};

ageCounter.setAge(5);
console.log(ageCounter.age);

// The above method can be re-written in shorter way!
const ageCounterShortVersion = {
    age: 12,
    setAge(newValue) {
        "use strict"
        this.age = newValue;
    }};

    ageCounter.setAge(5);
    console.log(ageCounter.age);

// Class in JavaScript

class RamClass {
    constructor(name, age, address){
     this._name = name;
     this._age = age;
     this._address = address;
    }

 get RamGet(){
     return `I am ${this._name} and I am ${this._age} year old. You can contact me at my address ${this._address}`;
 }
 set RamSet(value) // Pass a object not individul assignment
 {
     this._name = value.name;
     this._age = value.age;
     this._address = value.address;
 }

 RamMethod(a,b,c) // Method
 {
     return this._name +a +  Number.parseInt(this._age + b ) + this._address + c + Math.floor(Math.random()*20);
 }
}

const  aNewClass = new RamClass("Munna", 12, "Patna");
console.log(aNewClass.RamGet);

let newValue = {name:"Mu", age:19, address:"Delhi"};

aNewClass.RamSet = {name:"Mu", age:19, address:"Delhi"};
console.log(aNewClass.RamGet);

let code = aNewClass.RamMethod("AddingNamePart",50,"AddingAddressPart");
console.log(code);

// Export and importing a module from another file

import {capitalize ,firstValue ,lastValue} from "./exportall"

const capital = ((a) => capitalize(a))("ram");
console.log(capital);
console.log(`exported value from exportall file ${firstValue}  ${lastValue}`);

import * as capitalizeStrings from "./exportall"
const capitalizeAll = ((a) => capitalizeStrings.capitalize(a))("ram");
console.log(capitalizeAll);
console.log(`exported value from exportall file ${capitalizeStrings.firstValue}  ${capitalizeStrings.lastValue}`);

// Importing a default export

import addition from "./exportAll"
const newresult = addition(5,10);
console.log(newresult);

const newArray = [4,77,88];
[...newArray];
newArray.includes(6);

var mynamespace = mynamespace || {};

mynamespace.createNameSpace = function (namespace) {

	//get the namespace string and split it
    var namespaceArr = namespace.split(".");
    var parent = mynamespace;

    // excluding the parent
    if (namespaceArr[0] === "MYNAMESPACE") {
        namespaceArr = namespaceArr.slice(1);
    }

    // loop through the array and create a nested namespace
    for (var i = 0; i < namespaceArr.length; i++) {

        var partname = namespaceArr[i];

        // check if the current parent already has the namespace declared
        // if it isn't, then create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }

        // get a reference to the deepest element in the hierarchy so far
        parent = parent[partname];
    }
    //  empty namespaces created and can be used.
    return parent;
};

var newNamespace = mynamespace.createNameSpace("MYNAMESPACE.COUNTRY.STATES");

newNamespace.product = function(price) {
    this.price = price;
    this.getCost = function(){
    return this.price;
    }
};
console.log(newNamespace);

// Namespace usability in JavaScript - How not to pollute the global namespace.
// visit: https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/

// 1.Using Object Literal Notation
var myfunctionCollection1 = {
    fun1: function () {
        console.log("I am first fun1");
    }
}
var myfunctionCollection2 = {
    fun1: function () {
        console.log("I am second fun1");

    }
}
myfunctionCollection1.fun1();
myfunctionCollection2.fun1();

// 2. Using IIFE (Immediately invoked function expression)

(function () {
    function fun1() {
        console.log("I am first fun1");
    } fun1();
}());

(function () {
    function fun1() {
        console.log("I am second fun1");
    } fun1();
}());

// 3. Using a block and a let declaration (or a const declaration):
{
    let temp = function fun1() {
        console.log("I am first fun1");
    }
    temp();
}
//temp(): ReferenceError: temp is not defined.

{
    let temp = function fun1() {
        console.log("I am second fun1");
    }
    temp();
}
//temp(): ReferenceError: temp is not defined
