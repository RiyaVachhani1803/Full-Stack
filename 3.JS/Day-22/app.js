//Query Selectors//
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));

//Setting Content in Object//
/*
innerText - show the visible text contained
textContent - show the full text (also hidden)
innerHTML - Shows the full markup
*/
console.dir(para = document.querySelector('p'));

//Manipulating Attributes//
/*
grtters & setters
obj.getAttributes(attr)
obj.getAttributes(attr , val)
*/

//Manipulating Style//
/*Object.style 
using classList - object.classlist
classList.add - add new classes
classList.remove - remove classes
classList.contains - check if class exists
classList.toggle - toggle between add & remove
*/

//Navigation//
/*
parentElement
children
previousElementSibling
nextElementSibling
*/

//Adding Element//
/*
document.createElement('p')
appendChild(element) - (parent k child k undar insert) kisi bhi object me new element insert karne k liye
append(element) - last me add karta hai ya new element create karne k liye as a child 
prepend(element) - starting me add karta hai
insertAdjacent(where , element) = beforebegin , afterbegin , beforeend , afterend  
*/

//Removing Element//
/*
removeChild(element)
remove(element)
*/