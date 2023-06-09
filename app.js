console.log('Hi Mate');
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else{
    console.log('Error!');
    }
};
//console.log(getUserChoice('Rock'));

const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random() * 3);
   switch(randomNumber){
     case 0: 
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
   }
};
//console.log(getComputerChoice('randomNumber'));

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'Game is a Tie!';
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The Computer Won!';
    }else{
      return 'User Won!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The Computer Won';
    } else{
      return 'User Won!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The Computer Won!';
    }else{
      return 'User Won!';
    }
  }
}
//console.log(determineWinner('rock', 'paper')); 
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice('scissors');
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();