let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turn0=true;
let winnermsg=document.querySelector(".msg");
let newgame=document.querySelector(".New-game");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,7],
];
const newGame=()=>{
   turn0=true;
   enabled();


    

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWInner();
    })
});
const enabled=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        winnermsg.innerText="";
    }
}
const checkWInner=()=>{
    for(let pattern of winpatterns){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
      if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            winnermsg.innerText=`Congratulations,Winner is ${pos1val}`;
            winnermsg.style.color="pink";

            for(let box of boxes){
                box.disabled=true;
            }

        }
      }
    }
}
newgame.addEventListener("click",newGame);
resetbtn.addEventListener("click",newGame);
