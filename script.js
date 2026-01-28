let gameSeq = [];
let userSeq = [];

let buttons = ["red","orange","blue","violet"]

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
// let button = document.querySelectorAll(".button");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    } 
});

function btnFlash(button){
    button.classList.add("flash");
    console.log("Flashing",button);
    setTimeout(function(){
        button.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*buttons.length);
    let randCol = buttons[ranIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    btnFlash(randBtn);
}
