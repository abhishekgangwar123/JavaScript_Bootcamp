// DOM Manipulation-------------------------------------
// 1. Selecting with id :

// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading);

// 2. selecting with class :

// let headings = document.getElementsByClassName("heading-class");
// console.log(headings);
// console.dir(headings);

// 3. selecting with tag : 

// let paras = document.getElementsByTagName("p");
// console.log(paras);
// console.dir(paras);

// 4. Query Selector : 

// let firEl = document.querySelector("p"); // first element
// console.dir(firEl);

// let allEl = document.querySelectorAll("p"); //all elements
// console.dir(allEl);

// let div = document.querySelector("div");
// console.dir(div);

// ---------------------------------------------------------------------
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from Apna College students";

// ---------------------------------------------------------------------
// Attributes : 

// let div = document.querySelector("div");  
// console.log(div);

// let id = div.getAttribute("id"); //to get attribute value
// console.log(id);

// let p = document.querySelector("p"); //to get attribute value
// console.log(p.getAttribute("class"));

// let para = document.querySelector("p");               //to set attribute value
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "purple"; //in this we can change sytle of html in javascript.
// div.style.color = "black";
// div.innerText = "Abhishek";

// Insert elements -------------------------------------------------------------------------------

// 1. node.append(el) :

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); //it will add button at the end of div 

// div.prepend(newBtn); //it will add button at the starting of div

// div.before(newBtn); //it will add button just above the div

// div.after(newBtn); //it will add button just after the div

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new !</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();       //it removes the node without touching the html code. 

// Question 1 : Create a new Button element. Give it a text "click me", backgrond color of red and text color of white.--------
//              Insert the button at the first element inside the body tag.

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me !";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend(newBtn);

// Question 2 : Create a <p> tag in html, give it a class and some styling.
//              Now create a new class in css and try to append this class to the <p> element.

let paras = document.querySelector("p");
