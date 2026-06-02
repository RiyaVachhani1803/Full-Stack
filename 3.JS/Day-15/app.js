console.log("Hello Woeld!!");
console.log("Riya Vachhani");
let a = 53;
let b = 60;
console.log("Sum is:", a+b);
console.log("Difference is:", a-b);
console.log("Multiplication is:", a*b);
console.log("Division is:", a/b);
let PenPrice = 10;
let PencilPrice = 7;
console.log("The Total Price is :", PenPrice + PencilPrice, "Rupees.");

//using output string//
let Output= "The total price is : " + (PenPrice + PencilPrice) + " Rupees.";
console.log(Output);

//By Template Literals//
let Glass = 200;
let Cup = 150;
let output= `The Total Price is: ${Glass + Cup} rupees.`;
console.log(output);

//Operators//
let x = 5;
let y = 7;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(x++);
console.log(++x);
console.log(y++);
console.log(++y);
x=y;
console.log(y);

//if statement//
let age = 16;
if (age >= 18) {
    console.log("You can Vote..");
}
if (age < 18) {
    console.log("You can't Vote..");
}

//Traffic Lights//
let color = "Yellow";
if (color == "Red") {
    console.log("Stop!!");
}
if (color == "Yellow") {
    console.log("Slow Down!!");
}
if (color == "Green") {
    console.log("Go!!");
}


//else statement//
let Age = 24;
if (Age >= 18) {
    console.log("You are eligible."); 
} else {
    console.log("You are not.");
}

//else if statement//
let height = 5.5 ;
if (height >5.5) {
    console.log("You have to go line num-1");
}
else if (height == 5.5) {
    console.log("You have to go line num-2");
}
else {
    console.log("You have to go line num-3");
}

let size = "XL";
if (size == "XL") {
    console.log("The Price is 250");
}
else if (size == "L") {
    console.log("The Price is 200"); 
}
else if (size == "M") {
    console.log("The Price is 100"); 
}
else {
    console.log("The Price is 50"); 
}

//Nested if-else//
let mark = 75;
if (mark >= 40) {
    console.log("Congratulations..!! You are Pass..");
    if (mark >= 80) {
        console.log("Grade is A+");
    } else if (mark >= 70) {
        console.log("Grade is A");    
    } else if (mark >= 50) {
        console.log("Grade is B");
    } else if (mark >= 40){
        console.log("Grade is C");
    }
} else {
    console.log("Better luck next time!"); 
}

//logical operators (&& , || , ! ) //
let marks = 83;
if (marks >= 33 && marks >= 80 ) {
    console.log ("U r Pass");
    console.log ("Excellent");
}

//extra//
let num = 12;
if(( num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) )) {
    console.log("safe");
} else {
    console.log("unsafe");
}

let string = "Shreyansh";
if ((string[0] === "A") && (string.length) > 3) {
    console.log("good string");
} else {
    console.log("not a good string");
}

// truthy & falsy //
if(true) {
    console.log("It is true");
}
else {
    console.log("It is false");
}
if (null) {
    console.log("It is true");
}
else {
    console.log("It is false");
}
if (" ") {
    console.log("It is true");
}
else {
    console.log("It is false");
}

let str = "Apple";
if (str) {
    console.log("It is not empty");
}
else {
    console.log("It is empty");
}

// Switch statement // 
let Color = "red";
switch (Color) {
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("Slow Down");
        break;
    case "green" :
        console.log("Go");
        break;
    default :
    console.log("light is broken");
}

//extra//
let day = "5";
switch (day) {
    case "1" :
        console.log("Sunday");
        break;
    case "2" :
        console.log("Monday");
        break;
    case "3" :
        console.log("Tuesday");
        break;
    case "4" :
        console.log("Wednesday");
        break;
    case "5" :
        console.log("Thrusday");
        break;
    case "6" :
        console.log("Friday");
        break;
    case "7" :
        console.log("Saturday");
        break;
    default:
        console.log("Wrong Day..!");
}

// Alerts //
alert("Something went wrong");
console.log("This is a simple log");
console.error("This is an alert message");
console.warn("This is the last warning");

// Prompt //
prompt("Enter your name : ");

let firstName = prompt("Enter your name : ");
console.log(firstName);

let FirstName = prompt("Enter your Firstname : ");
let LastName = prompt("Enter your Lastname : ");
message = ("Welcome " + FirstName + " " + LastName + "..!");
alert(message);
console.log(message);