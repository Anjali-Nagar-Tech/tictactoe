let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset-btn");

let turnO = true;//playerX playerO

let msgContainer = document.querySelector(".msg-container");
let newGameButton = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
let count = 0;

//2D array
// let arr = [["apple", "litchi"], ["potato", "beans"], ["shirt", "pant"]];

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);//this selects the box of the reffered index


        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            else if(pos1Val !== pos2Val && pos2Val !== pos3Val && count === 9){
                gameDraw();
            }
            
        }       
        
    }



}



boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        // console.log("box was clicked");
        if(turnO === true){
            box.innerText = "O";
            box.style.color = "#372C36";
            turnO = false;
        }else if(turnO === false){
            box.innerText = "X";
            box.style.color = "#0D4E5E";
            turnO = true;
        }
        box.disabled = true;
        count++;
        console.log(count);
        checkWinner();        
      
    });
});


// gameDraw();
        

const gameDraw = () => {
    msg.innerText = "The Game was Draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations !!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}

newGameButton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);

