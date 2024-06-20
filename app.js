const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score =document.querySelector('#score')
let hit = null
let result = 0, time = 10
let countDownId = setInterval(countDown,1000), timerId = null
timeLeft.textContent = time

squares.forEach(square =>{
    square.addEventListener('click', ()=>{
        if(square.id === hit){
            result++
            score.textContent = result
            hit = null
        }
    })
})

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randSquare = squares[Math.floor(Math.random() * 9)]
    randSquare.classList.add('mole')
    hit = randSquare.id
}

function moveMole(){
    timerId = setInterval(randomSquare,500)
}

function countDown(){
    time--
    timeLeft.textContent = time
    if(time === 0){
        clearInterval(countDownId)
        clearInterval(timerId)
        squares.forEach(square => {
            square.classList.add('mole')
        })
        alert('Game Over. Your score is: ' + result)
    }
}

moveMole()