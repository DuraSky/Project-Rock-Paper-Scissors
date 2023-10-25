const rps = ["Rock", "Paper", "Scissors"];
const computerChoice = rps[Math.floor((Math.random() * rps.length))];
console.log("Computer choose: " + computerChoice);

let userChoice ="";
let winningString = "";

document.getElementById("btnRock").addEventListener("click",() => {
    userChoice = "Rock";
    console.log("You choose Rock!")
    gameRound(computerChoice,userChoice);
    updateUserChoice();
    updateWinningString();
})

document.getElementById("btnPaper").addEventListener("click",() => {
    userChoice = "Paper";
    console.log("You choose Paper!");
    gameRound(computerChoice,userChoice);
    updateUserChoice();
    updateWinningString();
})

document.getElementById("btnScissors").addEventListener("click",() => {
    userChoice = "Scissors";
    console.log("You choose Scissors!");  
    gameRound(computerChoice,userChoice);
    updateUserChoice();
    updateWinningString();
})


let paraComputerChoose = document.querySelector("#computerChoose");
paraComputerChoose.textContent = "Computer choose: " + computerChoice;

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
        return winningString = "Computer won!";
    } else if(computerChoice == "Paper" && userChoice == "Rock"){
        return winningString = "Computer won!";
    } else if ( computerChoice == "Scissors" && userChoice == "Paper"){
        return winningString = "Computer won!";
    } else {
        return winningString = "Player won!";
    }
}

   