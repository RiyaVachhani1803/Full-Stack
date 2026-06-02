//for loop//
console.log("For loop 1:");
for (let i=1; i<=5 ; i++) {
    console.log(i);
}

console.log("For loop 2:");
for (let i=7; i>=2; i--) {
    console.log(i);
}

console.log("For odd numbers:");
for (let i=1; i<=15; i=i+2) {
    console.log(i);
}

console.log("For even numbers:");
for (let i=2; i<=15; i=i+2) {
    console.log(i);
}

//infinite loops//
// for (let i=1; i>=0; i++) {
//     console.log(i);
// }

// for (let i=1; i<=5; i--) {
//     console.log(i);
// }

// for (let i=1; ; i++) {
//     console.log(i);
// }

//multiplication table//
console.log("Table of 5:");
for (let i=5; i<=50; i=i+5) {
    console.log(i);
}

console.log("Table of your given number:");
let n = prompt("Write your number:");
n = parseInt(n);
for (let i=n; i<=n*10; i=i+n) {
    console.log(i);
}

//Nested loop//
console.log("For Nested loop:");
for (let i=1; i<=3; i++) {
    console.log(`For i loop ${i}`);
    for (let j=1; j<=4; j++) {
        console.log(j);
    }
}

//While loop//
console.log("For While loop:");
let i=5;
while (i>=0) {
    console.log(i);
    i--;
}

//Game//
const FavMovie = "3 Idiots";
let guess = prompt("guess my Favorite movie");
while (guess != FavMovie) {
    if (guess == "quit"){
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess. Please try again..");
}
if(guess == FavMovie) {
    console.log("Congrats!!");
} 

//Break Keyword// 
console.log("Using Break Statement:");
let j=7; 
while (j>=1) {
    if (j == 3) {
        break;
    }
   console.log(j);
   j--; 
}

//Loop with Arrays//
console.log("Using Loop with Array:");
let fruits = ["Mango" , "Litchi" , "Strawberry" , "Pineapple" , "Banana"];
for (let i=0; i<=fruits.length; i++) {
    console.log(i, fruits[i]);
}

//loops with nested arrays//
console.log("Using Loop with Nested Array:");
let heroes = [ ["ironman", "spiderman" , "thor"] , ["superman", "woner woman", "flash"]];
for (let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i]);
    for (let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`)
    }
}

//for of loop//
console.log("Using for of Loop:");
let colors = ["Red", "White", "Yellow" , "Blue" , "Green"];
for (color of colors) {
    console.log(color);
}
for (char of "RiyaVachhani") {
    console.log(char);
}
//nested for of array//
console.log("Using Nested for of Array:");
let Heroes = [ ["ironman", "spiderman" , "thor"] , ["superman", "woner woman", "flash"]];
for (list of Heroes) {
    for(hero of list) {
        console.log(hero);
    }
}