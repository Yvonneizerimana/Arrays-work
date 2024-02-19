const getUserChoice=userInput=>{

    userInput=userInput.toLowerCase();

if(userInput=="rock" || userInput=="paper" || userInput=="scissors"){
    return userInput
}

else{
    console.log("you've entered invalid choice !! so try again");
}
};

function getComputerChoice(){
    
   let randomNumber= Math.floor(Math.random()*3);

switch(randomNumber){

    case 0:
    return "rock";
    break;

    case 1:
        return "paper";
        break;

        case 2:
            return "scissors";
            break;

            default:
                return "you've entered invalid choice plese try agin!!";
}


}

function determineWinner(userChoice, computerChoice){

    if (userChoice===computerChoice){

        return "the game is tie";
    }

    if(userChoice==="rock"){

        if(computerChoice==="paper"){
            return "the computer won! congratulations";
        }
        
        else{
            return "you won! congratulations"
        }
    }

    if(userChoice==="scissors"){

        if(computerChoice==="rock"){
            return "computer won! congratulatons";
        }

        else{
            return "user won! congratulations";
        }
    }

    if(userChoice==="paper"){

        if(computerChoice==="scissors"){
            return "computer won! congratulations";
        }
        else {
            return "user won! congratulations";
        }
    }
}

console.log(determineWinner("rock","scissors"));
console.log(determineWinner("paper","scissors"));
console.log(determineWinner("paper","rock"));

