const inputEl = document.querySelector('#validation-input')
console.log(inputEl)

function onInputBlur() {
    if (inputEl.value.length !== 6) {
return inputEl.classList.add('invalid')
    } else {
return inputEl.classList.add('valid')
    }
}

inputEl.addEventListener('blur', onInputBlur)