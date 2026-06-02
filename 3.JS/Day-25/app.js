//call stack//
function hello() {
    console.log("inside hello fnx");
    console.log("hello");
}

function demo() {
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done..!!");

//
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

//single Threaded
setTimeout(()=> {
    console.log("This is printing after 2 second");
},2000);
console.log("hello...") //It will print first

//Callbacks nesting -> Callback Hell
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
     setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange(); 
     }, delay);
}
changeColor("red" , 2000 , () => {
    changeColor("green" , 2000 , () => { 
        changeColor("purple" , 2000 , () => {
            changeColor("pink" , 2000);
        });
    });
}); 

/*use a promises method*/
function changeColor(color, delay) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Change");
        }, delay);
    });
}

//Promises
function savetodb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetodb("Saving of your data" , () => {
    console.log("success : your data was saved ");
    savetodb("Hello There!" , () => {
        console.log("success2 : data2 saved");
    },
    () => {
        console.log("failure2 : weak connection.");
    }
    );
},
    () => {
        console.log("failure : Weak connection. data not saved.");
    }
); 

function savetodb(data) {
    return new Promise((resolve , reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject ("failure : weak connection");
        }   
    });
} 

//then() & catch() method
let request = savetodb("Promise statement"); // request=promise object
request.then(() => {
    console.log("Promise was resolved");
    // console.log(request);
})
    .catch(() => {
        console.log("Promise was rejected");
        // console.log(request);
    })

//Improved Version
savetodb("hello...")
.then(() => {
    console.log("Data 1 saved");
    return savetodb("hello...2");
})
.then(() => {
    console.log("Data 2 saved");
    return savetodb("hello...3");
})
.then(() => {
    console.log("Data 3 saved");
})
.catch(() => {
    console.log("Promise was   Rejected");
});
