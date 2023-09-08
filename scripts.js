let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')

let boxes =Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const x_TEXT = "X"

let currentPlayer=x_TEXT;

let spaces = Array(9).fill(null)
let count_plays = 0

const startGame = function(){
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}


function boxClicked(e){
    const id = e.target.id
    if (!spaces[id] && count_plays < 9) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer


        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            by.innerHTML = ``
            real.innerHTML = ``
            let winningBlock = playerHasWon()
            count_plays= 10

           winningBlock.map(box => boxes[box].style.backgroundColor=winnerIndicator)
           return
        } 
        count_plays++
        currentPlayer = currentPlayer == x_TEXT ? O_TEXT: x_TEXT  
    }
    if(count_plays === 9){
        playerText.innerHTML = 'Draw Game!'
        by.innerHTML = ``
        real.innerHTML = ``
        boxes.forEach(box => box.style.color = drawInicator)
    }
}



const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerHasWon(){
    for(const condition of winningCombos){
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        }
    
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart(){
spaces.fill(null)
count_plays = 0
boxes.forEach( box => {
    box.innerText = ''
    box.style.backgroundColor=''

})
playerText.innerHTML = 'TIC TAC TOE'
by.innerHTML = "by"
real.innerHTML = "The Real Coder"

currentPlayer = x_TEXT;

}
startGame()