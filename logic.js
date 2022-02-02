function computerPlay (){
    const options = ["ROCK","PAPER","SCISSORS"]
    return options[Math.floor(Math.random()*3)];
};
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection){
        console.log("Its a tie");
    }
    else{
        switch (playerSelection){
            case "ROCK":
                if (computerSelection == "PAPER"){
                    console.log("computer wins");
                }
                else if (computerSelection == "SCISSORS"){
                    console.log("player wins");
                }
                break;
            case "PAPER":
                if (computerSelection == "ROCK"){
                    console.log("player wins");
                }
                else if (computerSelection == "SCISSORS"){
                    console.log("computer wins");
                }
                break;
            case "SCISSORS":
                    if (computerSelection == "ROCK"){
                        console.log("computer wins");
                    }
                    else if (computerSelection == "PAPER"){
                        console.log("player wins");
                    }
                    break;
        }
    }
    console.log(playerSelection +  " "  + computerSelection)
};
function game(){
    let counter = 1;
    while (counter <= 5){
        playRound(prompt("Rock,Paper,Scissors"),computerPlay());
        counter++;
    }
}
game();