function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const number = document.querySelector('#controls input')

function amountEl() {
  let amount = (Number(number.value))
  console.log(amount)
}
number.addEventListener('input', amountEl)


const createEl = document.querySelector('[data-create]')
const div = document.querySelector('#boxes')

let amount = amountEl()

function createBox(amount) {
  const boxes = [];
  const box = `<div></div>`
  
  for (let i = 0; i <= amount; i += 1) {
   
     boxes.push(box)
    
  }

  boxes.join('')
 
  div.insertAdjacentHTML('afterbegin', boxes)
  
}
createEl.addEventListener('click', createBox)
















/*

const destroyEl = document.querySelector('[data-destroy]')

const div = document.querySelector('#boxes')


function onCreate() {
  
//div.append() добавить все виноградинки в одну
}
function onDestroy() {

}


function createBoxes(amount) {

  
  
}


createEl.addEventListener('click', onCreate)
destroyEl.addEventListener('click', onDestroy)



*/

