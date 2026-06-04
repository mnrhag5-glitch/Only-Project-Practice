// // Saare boxes select kiye
// let boxes = document.querySelectorAll(".box");

// // Message select kiya
// let msg = document.querySelector("#msg");

// // Restart button select kiya
// let restartBtn = document.querySelector("#restart");

// // Pehla player X hoga
// let turn = "X";

// // Total moves count
// let count = 0;

// // Winner mila ya nahi
// let winnerFound = false;

// // Winning patterns
// let winPatterns = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],  // inhe 2D array kehte hai
//   [2,5,8],
//   [0,4,8],
//   [2,4,6]
// ];

// // Har box par click event
// boxes.forEach((box)=>{

//     box.addEventListener("click",()=>{

//         // Box khali hona chahiye
//         if(box.innerText === "" && !winnerFound){

//             // Current turn likho
//             box.innerText = turn;

//             // Move count badhao
//             count++;

//             // Winner check karo
//             checkWinner();

//             // Agar winner nahi mila
//             if(!winnerFound){

//                 // Turn change karo
//                 turn = turn === "X" ? "O" : "X";
//             }

//             // Draw check
//             if(count === 9 && !winnerFound){
//                 msg.innerText = "Game Draw!";
//             }
//         }
//     });
// });

// // Winner check function
// function checkWinner(){

//     for(let pattern of winPatterns){

//         let a = boxes[pattern[0]].innerText;
//         let b = boxes[pattern[1]].innerText;
//         let c = boxes[pattern[2]].innerText;

//         if(a !== "" && a === b && b === c){

//             // Winner mil gaya
//             winnerFound = true;

//             // Message show
//             msg.innerText = a + " Wins!";

//             // Saare boxes disable
//             boxes.forEach((box)=>{
//                 box.disabled = true;
//             });
//         }
//     }
// }

// // Restart button click
// restartBtn.addEventListener("click",()=>{

//     // Sab boxes clear
//     boxes.forEach((box)=>{
//         box.innerText = "";
//         box.disabled = false;
//     });

//     // Variables reset
//     turn = "X";
//     count = 0;
//     winnerFound = false;

//     // Message clear
//     msg.innerText = "";
// });


// console.log('today rarget is not complete na to mene interview question solve kiye na hi t-t-t ko smjha aj ka din sirf project or ai interviw me hi gya');
// console.log('so sorry for that kal ka target-> t-t-t full complete or one interview session');







//----------------------trying by my-self------------------------------------------------



// const boxes = document.querySelectorAll(".box")

// const msgBtn = document.querySelector("#msg")
// const restartBtn = document.querySelector("#restart")


// let turnO = true;

// let count = 0



// const winpatterns =[
  
//       [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
//    ]



//  boxes.forEach((box)=>{
//    box.addEventListener('click',()=>{
//     if(turnO){
//         box.innerText = "O"
//         turnO = false
//     }else{
//         box.innerText = 'X'
//       turnO = true
        
//     }    
//     box.disabled = true
//     count++;
// let isWinner = checkWinner()
// if(count===9 && !isWinner){
//     gameDraw();
// }

//    })
//  })


//  function gameDraw(){
//     msgBtn.innerText = `Game is Draw`
//    disabledboxes()
    

// }



//  function disabledboxes(){
//     for(let box of boxes){
//         box.disabled = true
//     }
//  }


//  function enableboxes(){
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
//  }


// function showWinner(winner){
//        msgBtn.innerText =  `Congratulationn 🎉 Winner is ${winner}`;
//        disabledboxes();
// }



// function checkWinner() {
//     for (let pattern of winpatterns) {

//         let a = boxes[pattern[0]].innerText;
//         let b = boxes[pattern[1]].innerText;
//         let c = boxes[pattern[2]].innerText;

//         if (a !== "" && b !== "" && c !== "") {

//             if (a === b && b === c) {
//                 showWinner(a);
//                 return true;
//             }

//         }
//     }
//     return false;
// }






// function restartGame(){
//     turnO = true;
//     count = 0
//        msgBtn.innerText = "";
//     enableboxes()
// }


// restartBtn.addEventListener("click", restartGame);










//--------------------again try--------------------------------------------------


// const boxes = document.querySelectorAll(".box")
// const msg = document.querySelector("#msg")
// const resetBtn = document.querySelector("#restart")

// let turnO = true;
// let count = 0

// const winningPattern = [

//      [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],

// ]



// for(let box of boxes){

//     box.addEventListener('click',()=>{
//    if(turnO) {
//     box.innerText = "O"
//     turnO = false
//    }else{
//     box.innerText = "X"
//     turnO = true
//    }box.disabled = true
//    count++;

   
//    let isWinner = checkWinner()
//    if(count===9 && !isWinner)
//    {
//   gameDraw()
//    }
//     })

// }

// function gameDraw(){
//     msg.innerText = "Game Draw"

// }


// function checkWinner(){
//     for(let pattern of winningPattern){

//     let a = boxes[pattern[0]].innerText
//     let c = boxes[pattern[2]].innerText
//     let b = boxes[pattern[1]].innerText
    
//     if(a!==""&& b!==""&&c!=="")
//      {
//         if(a==b&&b==c){
//             winner(a)
//             return true
//         }
//      }
     
//     }
// }

// function winner(a){
//     msg.innerText = `Congratulation wiiner is ${a}`
//     disableBoxes()
// }

// function disableBoxes(){
//     for(let box  of boxes){
//         box.disabled = true
//     }
// }

// function restGame(){
//     turnO = true;
//     count = 0;
//     enableBoxes();
//     msg.innerText = "";
// }

// resetBtn.addEventListener('click', restGame);

// function enableBoxes(){
//     for(let box of boxes)
//     {
//         box.disabled = false
//         box.innerText =  "";
//     }
// }






//-----------------------again try---------------------------------------



// let boxes = document.querySelectorAll(".box")
// let restart = document.querySelector("#restart")
// let msg = document.querySelector("#msg")


// let turnX = true;
// let count = 0




// function draw(){
//     msg.innerText = "Draw 🙌🙌"
// }



// for(let box of boxes){
//     box.addEventListener('click',()=>{
//         if(turnX){
//             box.innerText = 'X'
//             turnX = false
//         }else{
//             box.innerText = 'O'
//             turnX = true;
//         }
//         box.disabled = true;
//         count++;
//         let isWinner = checkWinner();
//         if(count===9&&!isWinner){
//             draw();
//         }
//     })
// }


// let winPatterns = [

//        [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],

// ]

// function checkWinner(){
//     for(let pattern of winPatterns){
//      let a = boxes[pattern[0]].innerText
//      let b = boxes[pattern[1]].innerText
//      let c = boxes[pattern[2]].innerText

//   if(a!==''&& b!==''&&c!==''){
//     if(a===b&&b===c){
//         winner(a);
//         return true;
//     }
//   }

//     }
// }


// function winner(a){
//     msg.innerText = `Congratulations winner is ${a} 🎉🎉`
//     disabled();

// }

// function disabled(){
//     for(let box of boxes){
//         box.disabled = true;
//         // box.innerText = '';
//     }
// }

// function reset(){
//     for(let box of boxes){
//         box.innerText = '';
//         turnX = true
//         msg.innerText = '';
//         count = 0
       
//     } enabled();
// }

// function enabled(){
//     for(let box of boxes){
//         box.disabled = false;


//     }
// }


// restart.addEventListener('click', reset)




//----------------------again try ----------------------------------------------

