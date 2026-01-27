let gameSeq = [];
let userSeq = [];

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

function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
}















let button = document.querySelectorAll(".button");
for(but of button){
    but.addEventListener("click",function(){
    console.log("Button was clicked");
});
}
