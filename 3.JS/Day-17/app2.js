let todo = [];
 
let request = prompt("please enter your request");

while(true) {
    if (request == "quit") {
        console.log("quitting app");
        break;
    }

    if (request == "list") {
        console.log("_________________");
        for (let i=1; i<=todo.length; i++) {
            console.log(task);
        }
        console.log("_________________");
    } else if (request == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if (request == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("Wrong request");
    }

    let request = prompt("please enter your request");
}