// Elements
const counterEl = document.getElementById('counter')
const minusEl = document.getElementById('minus')
const plusEl = document.getElementById('plus')
const heartEl = document.getElementById('heart')
const pauseEl = document.getElementById('pause')
const ul = document.querySelector('.likes')

let count = 0
updateDisplay()
let intId

plusEl.addEventListener('click', () => {
  count++
  updateDisplay()
})

minusEl.addEventListener('click', () => {
  count--
  updateDisplay()
})

function updateDisplay() {
  counterEl.innerHTML = count
}

intId = setInterval(() => {
  count++
  counterEl.textContent = count
},1000)

heartEl.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    ul.textContent = `Number ${count} has been liked.`
  }
})

pauseEl.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    clearInterval(intId)
    pauseEl.innerHTML = 'resume'
  } else {
    intId = setInterval(() => {
      count++
      counterEl.textContent = count
    },1000)
  }
})

const input = document.getElementById('comment-input')
const form = document.getElementById('comment-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const list = document.getElementById('list')
  const p = document.createElement('p')
  p.textContent = input.value
  list.append(p)
}
