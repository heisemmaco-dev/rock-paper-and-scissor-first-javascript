let rock = document.querySelector('.Rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')
let newbtn = document.querySelector('.newGame')
let myChoice = document.querySelector('.mychoice')
let comChoice = document.querySelector('.comchoice')
let scoreMassage = document.querySelector('.scoreMassage')
let scoreHistory = document.querySelector('.scoreHistory')
//console.log(comChoice);
let insight = null;
myRock = () => {
    insight = 'ROCK'  
    myChoice.innerHTML = insight
    resultDetected(insight)
}

myPaper = () => {
    insight = 'PAPER'  
    myChoice.innerHTML = insight
    resultDetected(insight)
}

myScissor = () => {
    insight = 'SCISSOR'  
    myChoice.innerHTML = insight
    resultDetected(insight)
}

myNewbtn = () => {
    comChoice.innerHTML =  null
    myChoice.innerHTML = null
    scoreMassage.innerHTML = null
}

rock.addEventListener('click', myRock)
paper.addEventListener('click', myPaper)
scissor.addEventListener('click', myScissor)
newbtn.addEventListener('click', myNewbtn)

computerMove = () => {
    let ranDom = Math.floor(Math.random() * 6) + 1
    let result = null
    if (ranDom === 1 || ranDom === 6) {
        result = 'ROCK';
    } else if (ranDom === 3 || ranDom === 5) {
        result = 'PAPER';
    } else if (ranDom === 2 || ranDom === 4) {
        result ='SCISSOR';
    }

    return comChoice.innerHTML =  result
}

resultDetected = (option) => {
    let result = null
    let computMove = computerMove()
    if (option === 'ROCK') {
        if (computMove === 'ROCK') {
            result = 'Tie Game';
        } else if (computMove === 'PAPER') {
            result = 'You lost';
        }  else if (computMove === 'SCISSOR') {
            result = 'You Win';
        } 
    } else if (option === 'PAPER') {
        if (computMove === 'ROCK') {
            result = 'You Win';
        } else if (computMove === 'PAPER') {
            result = 'Tie Game';
        }  else if (computMove === 'SCISSOR') {
            result = 'You lost';
        } 
    } else if (option === 'SCISSOR') {
        if (computMove === 'ROCK') {
            result = 'You lost';
        } else if (computMove === 'PAPER') {
            result = 'You Win';
        }  else if (computMove === 'SCISSOR') {
            result = 'Tie Game';
        } 
    }

    return scoreMassage.innerHTML = `You choosed ${option} and computer choose ${computMove}, ${result}`
}
