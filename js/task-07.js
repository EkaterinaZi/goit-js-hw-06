const slider = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function onSlider(event) {
     textEl.style.fontSize = `${event.currentTarget.value}px`;
}

slider.addEventListener('input', onSlider);