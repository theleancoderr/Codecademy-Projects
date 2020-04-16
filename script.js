const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock') {
    return userInput;
  } else if(userInput === 'paper') {
    return userInput;
  } else if(userInput === 'scissors') {
    return userInput;
  } else if(userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error');
  }
}
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() *2);
  switch(randomNumber){
    case 0: return 'rock';
      break;
    case 1: return 'paper';
      break;
    case 2: return 'scissors';
      break;
    default: console.log('Computer error');
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  // return tie 
  if(userChoice === computerChoice){
    return 'It\'s a tie';
  }
  // return user as a winner
  if(userChoice === 'bomb'){
    return 'User won! Special Case!';
  }
  //check when userchoice is rock
  if(userChoice === 'rock'){
    // compare with paper 
    if(computerChoice === 'paper'){
      return 'Computer Won!';
    } else {
      return 'User won!'
    }
  }
  // check when userchoce is paper
  if(userChoice === 'paper'){
    // compare with scissors
    if(computerChoice === 'scissors'){
      return 'Computer won!';
    } else {
      return 'User won!';
    }
    //compare with rock
    if(computerChoice === 'rock'){
      return 'User won!';
    } else {
      return 'Computer won!';
    }
  }
  
 // check when userchoice is scissors
  if(userChoice === 'scissors'){
    //check with paper
    if(computerChoice === 'paper'){
      return 'User won!';
    } else {
      return 'Computer won!';
    }
    //check with rock
    if(computer === 'rock'){
      return 'Computer won!'
    } else {
      return 'User won!'
    }
  }
}
const playGame = () =>{
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
