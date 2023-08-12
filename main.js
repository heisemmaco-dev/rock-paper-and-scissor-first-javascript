
let rock = document.querySelector('.Rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')
let newGame = document.querySelector('.newGame')

let myChoice = document.querySelector('.mychoice')
let comChoice = document.querySelector('.comchoice')
let scoreMassage = document.querySelector('.scoreMassage')

let scoreHistory = document.querySelector('.scoreHistory')

//console.log(scoreHistory);
deRock = () => {
    const present = 'ROCK'
    myChoice.innerHTML = present
    meVsComputer(present)
}

dePaper = () => {
    let present = 'PAPER'
    myChoice.innerHTML = present
    meVsComputer(present)
}

deScissor = () => {
    const present = 'SCISSOR'
    myChoice.innerHTML = present
    meVsComputer(present)
}

deNewGame = () => {
    myChoice.innerHTML = ''
    comChoice.innerHTML = ''
    scoreMassage.innerHTML = ''
}

rock.addEventListener('click', deRock)
paper.addEventListener('click', dePaper)
scissor.addEventListener('click', deScissor)
newGame.addEventListener('click', deNewGame)


function computerMove() {
    let ranDomNumber = Math.floor(Math.random() * 6) + 1
    let result = ''
    if (ranDomNumber === 1 || ranDomNumber === 6) {
        result = 'ROCK'
    } else if (ranDomNumber === 3 || ranDomNumber === 5) {
        result = 'PAPER'
    } else if (ranDomNumber === 2 || ranDomNumber === 4) {
        result = 'SCISSOR'
    }

    return comChoice.innerHTML = result
}

let allScore = JSON.parse(localStorage.getItem('allscore')) 


meVsComputer = (option) => {
    let result = ''
    let move = computerMove()
    
    if (option === 'ROCK') {
        if (move === 'ROCK') {
            result = 'Tie Game'
        } else if (move === 'PAPER') {
            result = 'You lost'
        } else if (move === 'SCISSOR') {
            result = 'You Win'
        }
    } else if (option === 'PAPER') {
        if (move === 'ROCK') {
            result = 'You Win'
        } else if (move === 'PAPER') {
            result = 'Tie Game'
        } else if (move === 'SCISSOR') {
            result = 'You lost'
        }
    } else if (option === 'SCISSOR') {
        if (move === 'ROCK') {
            result = 'You lost'
        } else if (move === 'PAPER') {
            result = 'You Win'
        } else if (move === 'SCISSOR') {
            result = 'Tie Game'
        }
    }

    if (result === 'You Win') {
        allScore.win += 1
    } else if (result === 'You lost') {
        allScore.lost += 1
    } else if (result === 'Tie Game') {
        allScore.tie += 1
    }

    localStorage.setItem('allscore', JSON.stringify(allScore))
    scoreHistory.innerHTML = ` win: ${allScore.win}, lose: ${allScore.lost}, tie game: ${allScore.tie}`
    return scoreMassage.innerHTML = `You choose ${option} and computer choose ${move}, ${result}`
   
}




