let rock = document.querySelector('.Rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')
let newbtn = document.querySelector('.newGame')
let myChoice = document.querySelector('.mychoice')
let comChoice = document.querySelector('.comchoice')
//let scoreMassage = document.querySelector('.scoreMassage')
let scoreHistory = document.querySelector('.scoreHistory')
let sumbit = document.querySelector('.theresult')
let back = document.querySelector('.back')
//console.log(comChoice);
background = () => {
   let body = document.querySelector('.body')
   body.classList.add('dark')
   if (body.classList.contains('white')) {
    body.classList.replace('white', 'dark')
   } else if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'white')
   }


}
back.addEventListener('click', background)

let insight = null;
myRock = () => {
    insight = '✊'  
    myChoice.innerHTML = insight
    resultDetected(insight)
}

myPaper = () => {
    insight = '🖐'  
    myChoice.innerHTML = insight
    resultDetected(insight)
}

myScissor = () => {
    insight = '✌️'  
    myChoice.innerHTML = insight
    resultDetected(insight)
}

myNewbtn = () => {
    comChoice.innerHTML =  null
    myChoice.innerHTML = null
    //scoreMassage.innerHTML = null
    sumbit.innerHTML = null
}

rock.addEventListener('click', myRock)
paper.addEventListener('click', myPaper)
scissor.addEventListener('click', myScissor)
newbtn.addEventListener('click', myNewbtn)

computerMove = () => {
    let ranDom = Math.floor(Math.random() * 6) + 1
    let result = null
    if (ranDom === 1 || ranDom === 6) {
        result = '✊';
    } else if (ranDom === 3 || ranDom === 5) {
        result = '🖐';
    } else if (ranDom === 2 || ranDom === 4) {
        result ='✌️';
    }

    return comChoice.innerHTML =  result
}

let ask = document.querySelector('.asktochoose')

asktoChooseaMove = () => {
    let ranDom = Math.floor(Math.random() * 6) + 1
    let result = null
    if (ranDom === 1 || ranDom === 6) {
        result = myPaper();
    } else if (ranDom === 3 || ranDom === 5) {
        result = myScissor();
    } else if (ranDom === 2 || ranDom === 4) {
        result = myRock();
    }

    computMove()
    return comChoice.innerHTML =  result
}

ask.addEventListener('click', asktoChooseaMove)

let history = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
} 

update()
function update() {
    scoreHistory.innerHTML = `
    🏆 ${history.win} | 🤦‍♂ ${history.lose} | 🪢 ${history.tie}`
}


let me = document.querySelector('.resetbtn')

console.log(me)
    me.addEventListener('click', function(){
        localStorage.removeItem('score')
        history.win = 0;
        history.lose = 0;
        history.tie = 0;
        update()
    })

/*{
    win: 0,
    lose: 0,
    tie: 0
} */

//localStorage.removeItem('score')

console.log()
let sum = null
resultDetected = (option) => {
    let computMove = computerMove()
    if (option === '✊') {
        if (computMove === '✊') {
            sum = 'Tie Game 🪢';
        } else if (computMove === '🖐') {
            sum = 'You lost 🤦‍♂';
        }  else if (computMove === '✌️') {
            sum = 'You Win 🏆';
        } 
    } else if (option === '🖐') {
        if (computMove === '✊') {
            sum = 'You Win 🏆';
        } else if (computMove === '🖐') {
            sum = 'Tie Game 🪢';
        }  else if (computMove === '✌️') {
            sum = 'You lost 🤦‍♂';
        } 
    } else if (option === '✌️') {
        if (computMove === '✊') {
            sum = 'You lost 🤦‍♂';
        } else if (computMove === '🖐') {
            sum = 'You Win 🏆';
        }  else if (computMove === '✌️') {
            sum = 'Tie Game 🪢';
        } 
    }

    if (sum === 'You Win 🏆') {
        history.win += 1
    } else if (sum === 'You lost 🤦‍♂') {
        history.lose += 1
    } else if (sum === 'Tie Game 🪢') {
        history.tie += 1
    }

    localStorage.setItem('score', JSON.stringify(history))
    
    update()

    /*if (document.querySelector('.resetbtn')) {
        let me = document.querySelector('.resetbtn')
        console.log(me)
        me.add
    }*/

    sumbit.innerText = sum

    if (sum === 'You Win 🏆') {
        sumbit.classList.add('green')

            if(sumbit.classList.contains('red')){
                sumbit.classList.replace('red', 'green') 
            } else if(sumbit.classList.contains('yellow')){
                sumbit.classList.replace('yellow', 'green') 
            }

    } else if (sum === 'You lost 🤦‍♂') {
        sumbit.classList.add('red')
        if(sumbit.classList.contains('green')){
            sumbit.classList.replace('green', 'red') 
        } else if(sumbit.classList.contains('yellow')){
            sumbit.classList.replace('yellow', 'red') 
        }
    } else if (sum === 'Tie Game 🪢') {
        sumbit.classList.add('yellow')
        if(sumbit.classList.contains('green')){
            sumbit.classList.replace('green', 'yellow') 
        } else if(sumbit.classList.contains('red')){
            sumbit.classList.replace('red', 'yellow') 
        }
    }
    
    //return scoreMassage.innerHTML = `🙍‍♂ ${option} VS ${computMove} 🤖`
}
