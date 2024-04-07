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
    let firstInput;
    for (let i = 0; i < digitCount; i++) {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('maxlength', 1);
        newInput.setAttribute('onkeyup', 'moveTo(event, this)');
        digitInput.appendChild(newInput);
        if (i === 0) {
            firstInput = newInput;
        }
    }
    attemptsCount.innerHTML = tryCount;
    app.classList.remove('invisible');
    prepare.classList.add('invisible'); 
    firstInput.focus();
}

function endGame () {
    digitInput.innerHTML = '';
    app.classList.add('invisible');
    prepare.classList.remove('invisible');
}

function moveTo(event, input) {
    if (possibileDigits.includes(event.key)) {
        var nextInput = input.nextElementSibling;
        if (nextInput != null) {
            nextInput.focus();
        }
    } else if (event.keyCode === 8 && input.value.length === 0) { // keyCode 8 для Backspace
        var prevInput = input.previousElementSibling;
        if (prevInput != null) {
            prevInput.focus();
        }
    } else {
        input.value = '';
    }
}

const possibileDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const app = document.querySelector('#app');
const prepare = document.querySelector('#prepare');
const startButton = document.querySelector('#start-button');
const endButton = document.querySelector('#end-button');
const digitInput = document.querySelector('#digit-input');
const attemptsCount = document.querySelector('#attempts-count');


startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);