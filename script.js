let userChoice ="";
let winningString = "";
let playerCounter = 0;
let computerCounter = 0;


document.getElementById("btnRock").addEventListener("click",() => {
    userChoice = "Rock";
    gameChoice();
    updateUserChoice();
    updateWinningString();
    updateScore();
})

document.getElementById("btnPaper").addEventListener("click",() => {
    userChoice = "Paper";
    gameChoice();
    updateUserChoice();
    updateWinningString();
    updateScore();
})

document.getElementById("btnScissors").addEventListener("click",() => {
    userChoice = "Scissors";
    gameChoice();
    updateUserChoice();
    updateWinningString();
    updateScore();
})

function updateScore(){
    document.getElementById("computerScore").innerHTML = computerCounter;
    document.getElementById("playerScore").innerHTML = playerCounter;
}

function gameChoice(){
    const rps = ["Rock", "Paper", "Scissors"];
    const computerChoice = rps[Math.floor((Math.random() * rps.length))];
    console.log("Computer choose: " + computerChoice);

    let paraComputerChoose = document.querySelector("#computerChoose");
    paraComputerChoose.textContent = "Computer choose: " + computerChoice;

    gameRound(computerChoice, userChoice);
    checkTheScore();
}

function updateUserChoice(){
    let paraUserChoose = document.querySelector("#userChoose");
    paraUserChoose.textContent = "You choose: " + userChoice;
}

function updateWinningString(){
    let paraResult = document.querySelector("#roundResult");
    paraResult.textContent = winningString;
}


function gameRound(computerChoice,userChoice){
    if (computerChoice === userChoice){
        return winningString = "Its a draw";
    }else if (computerChoice == "Rock" && userChoice == "Scissors"){
        computerCounter++;
        return winningString = "Computer won!";
    } else if(computerChoice == "Paper" && userChoice == "Rock"){
        computerCounter++;
        return winningString = "Computer won!";
    } else if ( computerChoice == "Scissors" && userChoice == "Paper"){
        computerCounter++;
        return winningString = "Computer won!";
    } else {
        playerCounter++;
        return winningString = "Player won!";
        
    }
}

function checkTheScore(){
    if (playerCounter === 5) {
    alert("Player has won the game!");
    }else if (computerCounter === 5){
    alert("Computer has won the game!");
    }
}



   