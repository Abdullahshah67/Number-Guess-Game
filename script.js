 let rndmNumber= parseInt( Math.random()*100+1)
 console.log(rndmNumber);
 
 
 let input=document.getElementById('guessfield')
 let submit=document.getElementById('submit')
 let bottom=document.querySelector('.bottom')
 let remaining=document.querySelector('.lastResult')
 let guesses=document.querySelector('.guessess')
 let msg=document.querySelector('.loworhi')


 let p = document.createElement('p')
  
let prevGuess=[]
let attempt=1
let gamePlay=true;
if (gamePlay){
   submit.addEventListener('click', (e) => {
      e.preventDefault()
      let guess= parseInt(input.value)
      console.log(guess);
      validity(guess)
   })
}

function validity(guess){
 if(isNaN(guess)){
    alert(`Please Enter the valid number`)
 }
 else if(guess>100){
    alert(`Please Enter the Number less then 100`)
 }
 else if(guess<1){
    alert(`Please Enter the number greater then 1`)
 }
 else{
    prevGuess.push(guess)
    if(attempt>10){
        displayGuess(guess)
        displayMessage(`Game Over . Random Number was ${rndmNumber}`)
        endgame()
    }
    else{
        check(guess)
        displayGuess(guess)
    }
 }
}

function check(guess){
    if(guess === rndmNumber){
        displayMessage(`WOW you guessed it right now`)
        endgame()
    }
    else if(guess > rndmNumber){
        displayMessage(`Number is Too high`)
    }
    else if (guess < rndmNumber){
        displayMessage(`Number is Too low`)
    }

}

function displayGuess(guess){
    input.value =''
    guesses.innerHTML += `${guess}    `
   attempt++
   remaining.innerHTML=`${11-attempt}`

}

function displayMessage(message){
    msg.innerHTML=`<h2>${message}</h2>`

}
 
function startGame(){
  let newGameBtn=document.querySelector('#newGame')
  newGameBtn.addEventListener('click',()=>{
    rndmNumber= parseInt( Math.random()*100+1)
    prevGuess=[]
    attempt=1
    input.value=''
    remaining.innerHTML=`${11-attempt}`
    input.removeAttribute('disabled')
    bottom.removeChild(p)
    gamePlay =true
    console.log(rndmNumber);
    
  })
}

function endgame(){
  input.value=''
  input.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game </h2>`
  bottom.appendChild(p)
  startGame()
}

