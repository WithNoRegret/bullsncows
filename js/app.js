function startGame (event) {
    event.preventDefault();
    const digitCountInput = document.querySelector('#digit-count');
    const tryCountInput = document.querySelector('#try-count');
    const digitCount = parseInt(digitCountInput.value);
    const tryCount = parseInt(tryCountInput.value);
    if (digitCount < 4 || digitCount > 10) {
        alert('Пожалуйста, выберите количество цифр от 4 до 10.');
        return;
    }
    if (tryCount < 4 || tryCount > 100) {
        alert('Пожалуйста, выберите количество попыток от 4 до 100.');
        return;
    }
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('maxlength', 1);
    newInput.setAttribute('oninput', 'moveToNext(this)');
    newInput.setAttribute('onkeydown', 'moveToPrev(this)');
    digitInput.appendChild(newInput);
    app.classList.remove('invisible');
    prepare.classList.add('invisible'); 
}

function endGame () {
    app.classList.add('invisible');
    prepare.classList.remove('invisible');
}

function moveToNext(input) {
    if (input.value.length === 1) {
        var nextInput = input.nextElementSibling;
        if (nextInput != null) {
            nextInput.focus();
        }
    }
}

function moveToPrev(input) {
    if (event.keyCode === 8 && input.value.length === 0) { // keyCode 8 для Backspace
        var prevInput = input.previousElementSibling;
        if (prevInput != null) {
            prevInput.focus();
        }
    }
    
}

const app = document.querySelector('#app');
const prepare = document.querySelector('#prepare');
const startButton = document.querySelector('#start-button');
const endButton = document.querySelector('#end-button');
const digitInput = document.querySelector('#digit-input');


startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);