const fontInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const onFontChange = (event) => {

    const fontSize = event.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
}
fontInput.addEventListener('input', onFontChange);
