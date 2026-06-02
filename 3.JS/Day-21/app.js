//forEach Method//
let arr = [1,2,3,4,5];
arr.forEach (function (el) {
    console.log(el);
});
arr.forEach(print);


/* can also write...
arr.forEach (function (el) {
    console.log(el);
});

arr.forEach ( (el) => {
    console.log(el);
}); 
*/

let students = [
    {
        name: "LAV",
        marks: 99,
    },
    {
        name: "Parv",
        marks: 97,
    }, 
    {
        name: "Khushi",
        marks: 90,
    }
];
arr.forEach((student) => {
    console.log(student.marks);
});

//Map Function//
let num = [1,2,3,4];
let double = num.map(function(el) {
    return el*2;
});

let gpa = students.map((el) => {
    return el.marks / 10;
})

//Filter Function: filter the element and return new array.
let nums = [3, 7, 12, 24, 43, 35, 55, 74, 86, 92];
let ans = nums.filter((el) => {
    return el % 2 == 0;
});

//Every Method//
let num2 = [2,4,6,8,10];
let answer = num2.every((el) => (el%2 == 0));
let answer1 = num2.every((el) => (el% 3!=0));
console.log(answer);
console.log(answer1);

//sum Method//
let num3 = [1 , 3, 5 , 7];
let ans2= num3.some((el) => (el%2 == 0));
let ans3= num3.some((el) => (el%2 != 0));
console.log(ans2);
console.log(ans3);

//Reduce Function: Reduce the array tona single values
let num1 = [1, 3, 4, 6, 6, 8, 9];
let finalVal = num1.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(finalVal);

let arr2 = [3, 6, 8, 4, 17, 23, 45, 65, 89, 96, 84, 93, 104];

let max1 = arr2.reduce ((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max1);

/* noramal way
let max = 0;
for (let i=0; i<arr2.length; i++) {
    if(max < arr2[i]) {
        max = arr2[i];    
    }
}
console.log(max);
*/

//Default Parameters//
function func(a,b = 7) {
    return a * b;
}

//Spread//

/*
Math.min(...arr)
arr.push(-2)
console.log(..arr)
*/
const data = {
    name : "riya",
    email : "riyapatel123",
    password : "RV@987",
}
const datacopy = {...data, id: 512};

// Rest: Allows a function to take an indefinite number of argument and bundle them in an array
function sum(...args) {
    for(let i=0; i<args,length; i++) {
        console.log("you gave us: ", args[i]);
    }
}
function min() {
    console.log(arguments);
    console.log(arguments.length);
}

// Destructor //
let names = ["Parv" , "Matang" , "Heer" , "Pratham" , "Tanvi" , "Surbhi", "Meera", "Shyam"] ;
    // let Winner = names[0];
    // let runnerup = names[1];
    // let secondRunnerup = names[2];
let [Winner, runnerup, secondRunnerup, ...others] = names;

const stu = {
    name: "Lav",
    age: 15,
    class: 11,
    subject: ["physics", "chemistry", "maths", "english"],
    email: "lavpatel765",
    password: "lav@098"
};

let{name, password: secret , city = "surat"} = stu;