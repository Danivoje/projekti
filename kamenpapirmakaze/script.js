let rps = [1,2,3]
let result = document.getElementById("result")
//kompjuterski izbor
function getComputerChoice(){//kompjuter nalazi kamen papir makaze
    const computerChoice = Math.floor(Math.random() * 3)
    let computerChoiceString = ''
    if (computerChoice == 1){
        computerChoiceString = 'Rock'
        return computerChoiceString
    }else if(computerChoice == 2){
        computerChoiceString = 'Paper'
        return computerChoiceString
    }else{
        computerChoiceString = 'Scissors'
        return computerChoiceString
    }
}

//console.log(getComputerChoice(rps))

function getResult(playerChoice, computerChoiceString){
    let rezultat

    if (playerChoice === 'Rock' && computerChoiceString ==='Scissors'){
        rezultat = 1
    }else if(playerChoice === 'Paper' && computerChoiceString === 'Rock'){
        rezultat = 1
    }else if(playerChoice === 'Scissors' && computerChoiceString === 'Paper'){
        rezultat = 1
    }else if(playerChoice === computerChoiceString){
        rezultat = 0
    }else{
        rezultat = -1
    }
    return rezultat
}

//pokazuje rezultat  u odnosu na broj 1 / 0 / -1
function showResult(rezultat, playerChoice, computerChoiceString){
    let result = document.getElementById("result")

    if(rezultat == 1){
        result.innerText = 'YOU WIN'
    }else if(rezultat == 0){
        result.innerText = 'DRAW'
    }else{
        result.innerText = 'YOU LOSE'
    }

    let playerScore = document.getElementById("player-score")
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText)+rezultat}`
    hands.innerText = `👦 ${playerChoice} vs 🤖 ${computerChoiceString}`
}

//na klik se ovo dogadja
function onClickRPS(playerChoice){
    const computerChoice = getComputerChoice()
    const rezultat = getResult(playerChoice.value, computerChoice)
    showResult(rezultat,playerChoice.value, computerChoice)
}
//pokretanje na klik selektovanje dugmadi sa klasom .rpsbutton
function playGame(){
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton =>{
        rpsButton.onclick = () => onClickRPS(rpsButton)
    })
    let endGameButton = document.getElementById("endGameButton")
    endGameButton.onclick = () => endGame()
}
//funkcija za reset igre
function endGame(){
    let playerScore = document.getElementById("player-score")
    let hands = document.getElementById("hands")
    let result = document.getElementById("result")
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()