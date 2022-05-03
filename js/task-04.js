let counterEl = document.querySelector('#value');

let counterValue = Number(counterEl.textContent);

const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
decrementBtn.addEventListener('click', onDecreaseBtn);

function onDecreaseBtn() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

const incrementBtn = document.querySelector(`button[data-action="increment"]`);
incrementBtn.addEventListener('click', onIncreaseBtn);

function onIncreaseBtn() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}
