// console.log(parseInt(Math.random() * 100) + 1);
const random = Math.floor(Math.random() * 100) + 1;
const subimt = document.querySelector('.guessSubmit');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.Previous-Guesses:');
const Remaining = document.querySelector('.Guesses Remaining: 10');
const StartOver = document.querySelector('.resultParas');

const p =document.createElement('p')


let prevGuess=[];
let numGuess = 1;

let playGame = true;


function validateGame(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more than 1')
    }else if(guess>100){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNumber}`)
            endGmae()
        }else{
         displayGuess(guess)
         checkGuess(guess)   
        }}}




function checkGuess(guess){
if(guess===randomNumber){
    displayMessage('Congratulation 👌')
    endGmae()
}else if(guess < randomNumber){
    displayMessage('NUmber is too low')
}else if(guess < randomNumber){
    displayMessage('NUmber is too high')
}}



function displayMessage(message){

}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    Remaining.innerHTML=`${11-numGuess}`
}


function newGame(){
userInput.value="";
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
StartOver.appendChild(p)
playGame=false;
newGame()
}


function endGmae(){
 const newGameButton=document.querySelector('#newGame')
 newGameButton.addEventListener('click',function(e){
    randomNumber=Math.floor(Math.random() * 100) + 1;
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    Remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    playGame=true;
 })
}