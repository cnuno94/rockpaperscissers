function computerPlay (){
    const options = ["ROCK","PAPER","SCISSORS"]
    return options[Math.floor(Math.random()*3)];
};
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        return("Its a tie");
    }
    else{
        switch (playerSelection){
            case "ROCK":
                if (computerSelection == "PAPER"){
                    return("computer wins");
                }
                else if (computerSelection == "SCISSORS"){
                    return("player wins");
                }
                break;
            case "PAPER":
                if (computerSelection == "ROCK"){
                    return("player wins");
                }
                else if (computerSelection == "SCISSORS"){
                    return("computer wins");
                }
                break;
            case "SCISSORS":
                    if (computerSelection == "ROCK"){
                        return("computer wins");
                    }
                    else if (computerSelection == "PAPER"){
                        return("player wins");
                    }
                    break;
        }
    }
    console.log(playerSelection +  " "  + computerSelection)
};
function game(){
    let round = 1;
    let scorecard = [];
    let result;
    while (round <= 5){
        result = playRound(prompt("Rock,Paper,Scissors"),computerPlay());
        scorecard.push(result + " Round " + round);
        round++;
    }
    console.log(scorecard);
}
game();