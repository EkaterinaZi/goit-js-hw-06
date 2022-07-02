function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const descr = document.querySelector('.color');

function changeColor() {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  descr.textContent = color;
}

btn.addEventListener('click', changeColor)


