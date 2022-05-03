const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputLengthEvent);

function onInputLengthEvent(event) {

    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        console.log(input);
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        console.log(input);
    }
}
