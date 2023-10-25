const rps = ["Rock", "Paper", "Scissors"];
const computerChoice = rps[Math.floor((Math.random() * rps.length))];
console.log("Computer choose: " + computerChoice);
      
//player part
// const userChoice = prompt("Choose your weapon: Rock, Paper or Scissors").toLowerCase();
// console.log("You choose: " + userChoice);

let userChoice ="";


document.getElementById("btnRock").addEventListener("click",() => {
    userChoice = "Rock";
    console.log("You choose Rock!")
    gameRound(computerChoice,userChoice);
})

document.getElementById("btnPaper").addEventListener("click",() => {
    userChoice = "Paper";
    console.log("You choose Paper!")
    gameRound(computerChoice,userChoice);
})

document.getElementById("btnScissors").addEventListener("click",() => {
    userChoice = "Scissors";
    console.log("You choose Scissors!")
    gameRound(computerChoice,userChoice);
})
















function gameRound(computerChoice,userChoice){
    if (computerChoice === userChoice){
        console.log("Its a draw!");
    }else if (computerChoice == "rock" && userChoice == "scissors"){
        console.log("Computer won!");
    } else if(computerChoice == "paper" && userChoice == "rock"){
        console.log("Computer won!");
    } else if ( computerChoice == "scissors" && userChoice == "paper"){
        console.log("Computer won!");
    } else {
        console.log("Player won!");
    }
}

   