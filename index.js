'use strict';
let score = 20;
let highscore = 0;
let win = false;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', () => {
   const guess = Number(document.querySelector('.input__box').value);
   let message = 'Incorrect Guess !';
   
   if(win) return;
   if(!score)  return;
   if(guess < 1 || guess > 20)   message = 'Out of range !';
   else if(guess === secretNumber) message = 'Correct Guess !';
   else if(guess > secretNumber) message = 'Too high !';
   else message = 'Too low !';

   document.querySelector('.info').style.color = 'white';
   document.querySelector('.info').textContent = message;
   if(guess < 1 || guess > 20)   return;

   if(guess != secretNumber){
      score--;
      document.querySelector('.score').textContent = score;
   }

   if(score === 0){
      message = 'You lose !';
      document.querySelector('.info').style.color = 'red';
      document.querySelector('.info').textContent = message;
      return;
   }
   
   if(guess === secretNumber){
      win = true;
      if(score > highscore) highscore = score;
      document.querySelector('.info').style.color = 'rgb(64, 190, 14)';
      document.querySelector('.highscore').textContent = highscore;
      return;
   }

   console.log('Highscore : ', highscore);
})

document.querySelector('.reset').addEventListener('click', () =>{
   document.querySelector('.score').textContent = score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('.info').textContent = 'Start Guessing ...';
   document.querySelector('.info').style.color = 'white';
   win = false;
})
