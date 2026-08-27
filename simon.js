let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelUp();
    }
   
});

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}


// function userClick(btn){
//     btn.classList.add("zoom");
//     setTimeout(function(){
//         btn.classList.remove("zoom")
//     },250)
// }


function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    userFlash(randBtn);
}

let hScore=0;
let h4=document.querySelector(".jay");
function highestScore(){
    if(hScore<level){
    hScore=level;
    // }
    // h4.innerText=`your highest score is:${hScore}`;
}
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000)
        }
    } else{
        h3.innerHTML=`game is over! your score was:<b>${level}</b><br>press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        highestScore();
        h4.innerText=`Your Highest Score is:${hScore}`;
        resetGame();

    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function resetGame(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

