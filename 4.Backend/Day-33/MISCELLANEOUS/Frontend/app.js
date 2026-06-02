// Factory function

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("Riya", 23);
let p2 = PersonMaker("Lav", 20);
let p3 = PersonMaker("Parv", 25)

// Constructor function - doesn't return anything & satrt with capital
function Person(name, age) {
       this.name = name;
        this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

let P1 = new Person("Riya", 23);
let P2 = new Person("Lav", 20);

// class -  template for creating objects
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   

    talk() {
            console.log(`Hi, my name is ${this.name}`);
    }
}

let q1 = new Person("Riya", 23);
let q2 = new Person("Lav", 20);

