let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-btn");
let newGameButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO =true;

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
const winPatterns =[
    
                    [0,1,2],[0,3,6],[0,4,8],
                    [1,4,7],
                    [2,5,8], [2,4,6] ,
                    [3,4,5],[6,7,8],         
                   ];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            box.classList.add("o");
            turnO=false;
        }       
        else{
            box.innerText="X";
            box.classList.add("x");
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("o", "x");
    }
}
const showWinner=(winner)=>{
msg.innerText=`Congratulations Winner is ${winner}` ;
msgContainer.classList.remove("hide");
disableBoxes();

};

const checkWinner=(()=>{
    let isDraw = true;
    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;  // used to get text inside the button 
        let pos2Val=boxes[pattern[1]].innerText;  // used to get text inside the button
        let pos3Val=boxes[pattern[2]].innerText;  // used to get text inside the button
        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){  
        if(pos1Val===pos2Val && pos2Val ===pos3Val){
            console.log("Winner",pos1Val);
            
            showWinner(pos1Val);
        }
    }
    }

     // Check if all boxes are filled
     boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; // If any box is empty, it's not a draw yet
        }
    });

    if (isDraw) {
        msg.innerText = `It's a Draw!` ; // Update the message for a draw
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
});

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);