const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputEvent)

function onInputEvent(event) {
   outputName.textContent = event.currentTarget.value;
   
   if (event.currentTarget.value === '') {
    outputName.textContent = 'Anonymous';
   } else {
    outputName.textContent === event.currentTarget.value;
   }
    return outputName;
}


