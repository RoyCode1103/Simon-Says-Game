let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let button = document.querySelectorAll(".button");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
    
});

function btnFlash(button){
    button.classList.add("flash");
    setTimeout(function(){
        button.classList.remove("flash");
    },1000);
}

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;

    btnFlash();
}
















// for(but of button){
//     but.addEventListener("click",function(){
//     console.log("Button was clicked");
// });
// }
