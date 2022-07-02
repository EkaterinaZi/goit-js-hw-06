const formEl = document.querySelector('.login-form')


const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;

    const password = event.currentTarget.elements.password.value;

    
    if (email === "" || password === "") {
        return alert(`Все поля должны быть заполнены!`);
    } else {
        console.log(`Login: ${email}, Password: ${password}`);
    }
    event.currentTarget.reset();
}

formEl.addEventListener("submit", handleSubmit);