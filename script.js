const choices = document.querySelectorAll(".rpsButton")
const reset = document.getElementById("endGameButton")
const result = document.getElementById("result")
const hands = document.getElementById("hands")
const score = document.getElementById("player-score")

let totalScore = 0

let computerChoice = () => Math.floor(Math.random() * 3)
let getHands = (han) => {
      if(han==0){
        return "Rock"
      }
      else if(han==1){
        return "Paper"
      }
      else if(han==2){
        return "Scissors"
      }
      else{
        return
      }
}

function userChoice() {
  choices.forEach(choice => {
    choice.onclick = () => {
      let selected = null
      if(choice.value == "Rock"){
        selected = 0
      }
      else if(choice.value == "Paper"){
        selected = 1
      }
      else if(choice.value == "Scissors"){
        selected = 2
      }
      else{
        return
      }
      comp = computerChoice()
      hands.innerText = `You chose ${choice.value}, Computer chose ${getHands(comp)}`
      startGame(selected, comp)
      score.innerText = totalScore 
    }
  })

  reset.onclick = () => {
    hands.innerText = ''
    result.innerText = ''
    score.innerText = ''
    totalScore = 0
  }
}


function startGame(user, computer) {
  if (user == 0 && computer == 0) {
    result.innerText = "DRAW"
  }
  else if (user == 0 && computer == 1) {
    result.innerText = "LOSS"
    totalScore -= 1
  }
  else if (user == 0 && computer == 2) {
    result.innerText = "WIN"
    totalScore += 1
  }
  else if (user == 1 && computer == 0) {
    result.innerText = "WIN"
    totalScore += 1
  }
  else if (user == 1 && computer == 1) {
    result.innerText = "DRAW"
  }
  else if (user == 1 && computer == 2) {
    result.innerText = "LOSS"
    totalScore -= 1
  }
  else if (user == 2 && computer == 0) {
    result.innerText = "LOSS"
    totalScore -= 1
  }
  else if (user == 2 && computer == 1) {
    result.innerText = "WIN"
    totalScore += 1
  }
  else if (user == 2 && computer == 2) {
    result.innerText = "DRAW"
  }
  else {
    return
  }

}

userChoice()