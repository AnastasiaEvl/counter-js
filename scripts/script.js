const timer = document.querySelector('#timer')
const startBtn = document.querySelector('#start-btn')
const pauseBtn = document.querySelector('#pause-btn')
const resetBtn = document.querySelector('#reset-btn')
const audio = new Audio('beep.mp3')

let seconds = 0
let minutes = 0
let hours = 0
let interval = null
let sound = null

function updateTime () {
  seconds++
  if (seconds === 60) {
    minutes++
    seconds = 0
  }
  if (minutes === 60) {
    hours++
    minutes = 0
  }
  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function updateAudio () {
  audio.play()
}

startBtn.addEventListener('click', () => {
  interval = setInterval(updateTime, 1000)
  sound = setInterval(updateAudio, 1000)
  startBtn.disabled = true
  pauseBtn.disabled = false
  resetBtn.disabled = false
})

pauseBtn.addEventListener('click', () => {
  clearInterval(interval)
  clearInterval(sound)
  startBtn.disabled = false
  pauseBtn.disabled = true
})

resetBtn.addEventListener('click', () => {
  clearInterval(interval)
  clearInterval(sound)
  seconds = 0
  minutes = 0
  hours = 0
  timer.textContent = '00:00:00'
  startBtn.disabled = false
  pauseBtn.disabled = true
  resetBtn.disabled = true
})
