const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors') {
    return userInput
}
else {
    console.log("Bummer, you didn't enter one of the valid choices.")
}
};

/*
console.log(getUserChoice('Scissors')); 
*/


const getComputerChoice = () => {
let computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return 'rock';
        }
        else if (computerChoice === 1) {
            return 'paper';
        }
        else if (computerChoice === 2) {
            return 'scissors';
        }
}
/*
console.log(getComputerChoice());
*/


let determineWinner = (userChoice, computerChoice)  => {

 if (userChoice === computerChoice) 
                {
  return 'The game is a tie!';
                 }

 if (userChoice === 'rock') 
              {
      if (computerChoice === 'paper') {
           return 'The computer won!';
              } 
      
    else {
        return 'You won!';
           }
       }

 if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  }
  else {
    return 'You won!';
  }
}
if(userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  }
  else {
    return 'You won!';
  }
}
}

/*
console.log(determineWinner('scissors' , 'paper'));
*/

const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice);
    console.log('The computer threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    }
    playGame()