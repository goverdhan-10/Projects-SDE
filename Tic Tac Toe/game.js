let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset")
let newg=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let contain=document.querySelector(".msg-container");
console.log("Hello");
let turn0=true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>{
    turn0=true;
    enableBoxes();
    contain.classList.add("hide");
}

enableBoxes =()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }

        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        check();
    });
});
const check = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
        }
      }
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    contain.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
};
  
reset.addEventListener("click",resetgame);
newg.addEventListener("click",resetgame);