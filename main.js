function playGame() {

  var userChoice = prompt("Do you pick rock, paper or scissors?");
  var computerChoice = Math.random();
  if (computerChoice <= 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  };

  alert("Computer chose:" + " " + computerChoice);

  function compare(choice1, choice2) {
    if (choice1 === choice2) {
      return (0);
    } else if (choice1 === "rock") {
      if (choice2 === "paper") {
        return ("Paper beats rock! You lost! *I know its stupid how paper can beat rock. But hey, I don't make the rules. God does.*");
      } else {
        return ("Rock beats scissors! You won!");
      }
    } else if (choice1 === "paper") {
      if (choice2 === "rock") {
        return ("Paper beats rock! You won!");
      } else {
        return ("Scissors beats paper! You lost!");
      }
    } else if (choice1 === "scissors") {
      if (choice2 === "rock") {
        return ("Rock beats scissors! You lost!");
      } else {
        return ("Scissors beats paper! You won!");
      }
    }


    return ("Pick something, you noob!");
  };

  var result = compare(userChoice, computerChoice);
  if (result === 0) {
    alert("Its a tie! Play again!");
    playGame();
  } else {
    alert(result);
    
    if (confirm("Would you like to try again?")) {
      playGame();
    } else {
      alert("Thanks for playing!");
    }
  }
}
