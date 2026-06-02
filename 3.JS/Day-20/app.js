function color() {
    console.log("Black");
    console.log("White");
    console.log("Red");
}
color();

//making a Dice//
function dice() {
    let num = Math.floor((Math.random() * 6)) + 1;
}
dice();
dice();
dice();
dice();
dice();
dice();

//Function With Arguments//
function Info(name , age , gender) {
    console.log(`${name}'s age is ${age} and gender is ${gender}.`);
}
Info ("Puja" , 20 , "Female");
Info ("Parv" , 25 , "Male");
Info ("Surbhi" , 30 , "Female");

//For calculating average of 5 numbers//
function Avg(a, b , c , d, e) {
    let avg = (a+b+c+d+e)/5;
    console.log(avg);
}
Avg(2,5,7,9,10);
Avg(22,32,42,52,62);

//Table
console.log ("Table of n:");
function Table(n) {
    for(let i=n; i<=10*n ; i=i+n) {
        console.log(i);
    }
}
Table(72);

//Using Return Keyword//
function sum(a,b) {
    return a+b;
}
console.log(sum(5,4));

//sum of n number//
console.log("Sum of n given number:");
function sum(n) {
    let sum = 0;
    for (let i=0; i<=n; i++) {
        sum +=i;
    }
    return sum;
}

//concatenation of all string in array//
let str = ["I am a " , "Student " , "Of " , "ADIT."];
function concat(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        result += str[i];
    }
    return result;
}

//Function Scope - Variables defined inside a function, are not accessible from outside the function.
//Global Scope - Variables defined outside a function, are accessible from inside the function & outside a function.

let Sum=54; //Global Scope

function CalSum(a,b) {
    let Sum=a+b; //Function Scope
}
CalSum(1,2);
console.log(Sum); // here we can not see the output of (1+2) because the printing part written after the parenthesis.

//Block Scope - variable declared inside {} block cannot be accessed from outside the block.

let age=25;
if(age >= 18) {
    let Str = "adult";
    console.log(Str); // Block Scope
}

let Age=25;
if(Age >= 18) {
    let Str = "adult";
}
console.log(Str); // Block Scope
      /*but here it shows the error bcz of block scope.*/

//Lexical Scope - in this function , variable of the outer function can be accessed by the inner function but not vice versa.

function outer() {
    let X = "Pal";
    let Y = "Heer";

    function inner() {
        console.log(X);
        console.log(Y);
    }
    inner();
}

/* Extra 

let greet = "hello"; // global scope
function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet(); */

//Higher Order Function//

function X(func , n) {
    for (let i=0; i<=n; i++) {
        func();
    }
}
let Y = function() {
    console.log("Hello");
}
X (Y , 50);

//Higher Order Returns Function//
function Test(req) {
    if(req == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }       
    } else if (req == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }      
    } else {
        console.log("Wrong request");
    }
}

//Methods - Actions that can be performed on an object

const calculator = {
    num : 53, 
    add : function(a,b) { // can also write : add(a,b) {...
        return a+b;
    },
    sub : function(a,b) {
        return a-b;
    },
    mul : function(a,b) {
        return a*b;
    },
};
