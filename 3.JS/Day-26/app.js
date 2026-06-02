//async functions//
async function greet() {
    return "hello world!"; //returns a promise
}   

greet() 
    .then(() => {
        console.log("Promise was resolved");
        console.log("result was:", result);
    })
    .catch((err) => {
        console.log("promise rejected", err);
    });

let hello = async () => {
    return 5;
}; 

//await keyword//
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1500);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

//
h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function demo() {
    await changeColor("red" , 1000);
    await changeColor("green" , 1000);
    await changeColor("pink" , 1000);
    changeColor("blue" , 1000); 
}

// API - Application Programming Interface
/* Status Code -> 200 - OK
                  404 - Not Found
                  400 - Bad Request
                  500 - Internal Server Error */
// JSON - JavaScript Object Notation
// Ajax - Asynchronous JavaScript and XML

//Axios

let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR - " , err);
});

//
async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (e) {
        console.log("error - ", e);
    }
}