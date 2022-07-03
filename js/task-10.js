function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


//  Цю задачу виконати не вдалось. Буду вдячна, якщо спрямуєте,
//  чи вірно взагалі в мене був хід думок?



const number = document.querySelector('#controls input')
const createEl = document.querySelector('[data-create]')
const destroyEl = document.querySelector('[data-destroy]')
const div = document.querySelector('#boxes')

function amountEl() {
  let amount = (Number(number.value))
  console.log(amount)
}
number.addEventListener('input', amountEl)

function createBox() {
  let widthBox = 20;
 
 for (let i = 0; i < number.value; i += 1) {
    if (number.value > 1) {
      widthBox += 10
    }
   
   let box = document.createElement("div");
   box.style.backgroundColor = getRandomHexColor();
   box.style.width = `${ widthBox }px`;
   box.style.height = `${ widthBox }px`;
   div.append(box)
 }
}

function deleteBox() {
  div.remove(div.childNodes)
}

createEl.addEventListener('click', createBox)
destroyEl.addEventListener('click', deleteBox)