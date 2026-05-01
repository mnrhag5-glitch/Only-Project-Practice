

// let randomNumber = Math.floor(Math.random() * 50) + 1;

// const submit = document.querySelector('.guessSubmit');
// const userInput = document.querySelector('.guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;
// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('please enter a valid number');
//   } else if (guess < 1) {
//     alert('please enter a number more than 1');
//   } else if (guess > 50) {
//     alert('please enter a number less than 50');
//   } else {
//     prevGuess.push(guess);

//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over, Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage('Congratulations 👌');
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage('Number is too low');
//   } else {
//     displayMessage('Number is too high');
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess}`;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');

//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//   startOver.appendChild(p);

//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameBtn = document.querySelector('#newGame');

//   newGameBtn.addEventListener('click', function () {
//     randomNumber = Math.floor(Math.random() * 50) + 1;
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = '10';
//     lowOrHi.innerHTML = '';
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);
//     playGame = true;
//   });
// }



let randomNumber = Math.floor(Math.random() * 50) + 1; // random number 1–50 generate

const submit = document.querySelector('.guessSubmit'); // submit button select
const userInput = document.querySelector('.guessField'); // input field select
const guessSlot = document.querySelector('.guesses'); // previous guesses show
const remaining = document.querySelector('.lastResult'); // remaining attempts
const lowOrHi = document.querySelector('.lowOrHi'); // result message

let prevGuess = []; // store all guesses
let numGuess = 7; // total attempts

submit.addEventListener('click', (e) => { // click event using addEventListener
  e.preventDefault(); // page reload rokna

  let guess = +userInput.value; // input value ko number me convert
  if (!guess || guess < 1 || guess > 50) return alert('Enter 1–50'); // validation

  prevGuess.push(guess); // guess array me add
  guessSlot.textContent = prevGuess.join(', '); // screen pe show
  remaining.textContent = --numGuess; // attempts kam karo
  userInput.value = ''; // input clear

  lowOrHi.textContent = // result decide
    guess === randomNumber ? '🎉 Correct' : // sahi guess
    numGuess === 0 ? `❌ Game Over (${randomNumber})` : // attempts khatam
    guess < randomNumber ? 'Too low' : 'Too high'; // hint

  if (guess === randomNumber || numGuess === 0) {
    userInput.disabled = true; // game end → input band
  }
});