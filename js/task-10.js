function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const number = document.querySelector('#controls input')
const createEl = document.querySelector('[data-create]')
const destroyEl = document.querySelector('[data-destroy]')
const div = document.querySelector('#boxes')

function amountEl() {
  createBox(Number(number.value))
}


function createBox() {
  let widthBox = 20;
  div.innerHTML = "";
 for (let i = 0; i < Number(number.value); i += 1) {
  
   widthBox += 10
   let box = document.createElement("div");
   box.style.backgroundColor = getRandomHexColor();
   box.style.width = `${ widthBox }px`;
   box.style.height = `${ widthBox }px`;
   div.append(box)
 }
}

function deleteBox() {
  div.innerHTML = "";
}

createEl.addEventListener('click', createBox)
destroyEl.addEventListener('click', deleteBox)