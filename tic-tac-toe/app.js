// Saare boxes select kiye
let boxes = document.querySelectorAll(".box");

// Message select kiya
let msg = document.querySelector("#msg");

// Restart button select kiya
let restartBtn = document.querySelector("#restart");

// Pehla player X hoga
let turn = "X";

// Total moves count
let count = 0;

// Winner mila ya nahi
let winnerFound = false;

// Winning patterns
let winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],  // inhe 2D array kehte hai
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Har box par click event
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{

        // Box khali hona chahiye
        if(box.innerText === "" && !winnerFound){

            // Current turn likho
            box.innerText = turn;

            // Move count badhao
            count++;

            // Winner check karo
            checkWinner();

            // Agar winner nahi mila
            if(!winnerFound){

                // Turn change karo
                turn = turn === "X" ? "O" : "X";
            }

            // Draw check
            if(count === 9 && !winnerFound){
                msg.innerText = "Game Draw!";
            }
        }
    });
});

// Winner check function
function checkWinner(){

    for(let pattern of winPatterns){

        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if(a !== "" && a === b && b === c){

            // Winner mil gaya
            winnerFound = true;

            // Message show
            msg.innerText = a + " Wins!";

            // Saare boxes disable
            boxes.forEach((box)=>{
                box.disabled = true;
            });
        }
    }
}

// Restart button click
restartBtn.addEventListener("click",()=>{

    // Sab boxes clear
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });

    // Variables reset
    turn = "X";
    count = 0;
    winnerFound = false;

    // Message clear
    msg.innerText = "";
});