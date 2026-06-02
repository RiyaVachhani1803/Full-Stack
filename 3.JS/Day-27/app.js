//for random cat facts
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "No fact found";
    }
}

//for random dog pictures
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("button");

btn2.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result2");
    img.setAttribute("src" , link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ", e);
        return "No Image found";
    }
}

//Headers with API request
const url3 = "https://icanhazdadjoke.com"

async function getJokes() {
    try {
        const config = { headers: {Accept: "application/json"} };
        let res = await axios.get(url , config);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}

//
let url4 = "http://universities.hipolabs.com/search?name=" ;
let btn3 = document.querySelector("button");

btn3.addEventListener("click" , async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; 
    for (col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url4 + country);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return[];
    }
}

