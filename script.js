let gameSeq = [];
let userSeq = [];

let buttons = ["red","orange","blue","violet"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    } 
});

function gameFlash(button){
    button.classList.add("flash");
    console.log("Flashing",button);
    setTimeout(function(){
        button.classList.remove("flash");
    },250);
}

function userFlash(button){
    button.classList.add("userflash");
    console.log("Flashing",button);
    setTimeout(function(){
        button.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*buttons.length);
    let randCol = buttons[ranIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerText = "Game Over! Press any key to start";
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".button");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}