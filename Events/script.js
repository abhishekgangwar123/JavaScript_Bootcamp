// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("button was clicked!");
//     let a = 20;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");

// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// }

// Event Listeners : ------------------------------------------------------------

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",()=>{
//     console.log("Button 1 was clicked 1X");
// })

// btn1.addEventListener("click",()=>{
//     console.log("Button 1 was clicked 2X");
// })

// const handler3 = ()=>{
//     console.log("Button 1 was clicked 3X");
// }

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click",()=>{
//     console.log("Button 1 was clicked 4X");
// })

// btn1.removeEventListener("click", handler3);

// Question : Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again. -----------

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
    } else {
        currMode = "light";
        body.classList.add("light");
    }

    console.log(currMode);
});