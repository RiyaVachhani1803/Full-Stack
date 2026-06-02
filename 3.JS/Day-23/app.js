//DOM events//
/* 
onclick - when an elements is clicked
    EX: <button onclick="console.log('photo was liked');">
onmouseenter - when mouse enters an elements
    EX: onclick ki jagah onmouseenter 
*/

//Event Listeners//
/* element.addEvenetListener(event,callback)*/

let btn = document.querySelector("button");

btn.addEventListener("click" , function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("generate random color");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

//Keyboard Events//
/*
    keydown
    keypress
    keyup
    auxclick
*/

//Change event//
/* The change event occurs when the value of an element has been changed 
   only works on <input> , <textarea> , <selsect> elements*/

//input events//
/* The input event fires when the value of an <input> , or <textarea> element has been changed*/
