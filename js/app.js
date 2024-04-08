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
    requiredAttemptLength = digitCount;
    for (let i = 0; i < digitCount; i++) {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('maxlength', 1);
        newInput.setAttribute('onkeydown', 'isInputEmpty(event, this)');
        newInput.setAttribute('oninput', 'moveForward(this)');
        newInput.addEventListener('focusout', (event) => changeFocus(event.target, true));
        digitInput.appendChild(newInput);
    }
    attemptsCount.innerHTML = tryCount;
    app.classList.remove('invisible');
    prepare.classList.add('invisible'); 
    digitInput.children[0].focus();
}

function endGame () {
    digitInput.innerHTML = '';
    attempts.innerHTML = '';
    currentAttempt = 0;
    currentAttempLength = 0;
    app.classList.add('invisible');
    prepare.classList.remove('invisible');
}

function isInputEmpty(event, input) {
    if (event.keyCode === 8 && input.value.length === 0) { // keyCode 8 для Backspace
        var prevInput = input.previousElementSibling;
        if (prevInput != null) {
            changeFocus(prevInput);
        }
    }
}

function moveForward(input) {
    if (possibileDigits.includes(input.value)) {
        currentAttempt = currentAttempt * 10 + parseInt(input.value);
        if(currentAttempLength < requiredAttemptLength) {
            currentAttempLength++;
        }
        var nextInput = input.nextElementSibling;
        if (nextInput != null) {
            changeFocus(nextInput);
        }
    } else if (input.value === '') {
        currentAttempt = Math.floor(currentAttempt / 10);
        if (currentAttempLength > 0){
            currentAttempLength--;
        }
        input.value = '';
    } 
    else {
        input.value = '';
    }
}

function tryAttempt() {
    if(currentAttempLength != requiredAttemptLength){
        alert("Введите все числа");
        changeFocus(digitInput.children[currentAttempLength]);
        return 0;
    }
    const newAttemptCard = document.createElement('p');
    newAttemptCard.textContent = checkCowsBulls(currentAttempt);
    attempts.appendChild(newAttemptCard);
    for(element of digitInput.children){
        element.value = '';
    }
    currentAttempt = 0;
    currentAttempLength = 0;
    changeFocus(digitInput.children[0]);
}

function checkCowsBulls (userNumber) {
    result = userNumber + ' 🐂🐂🐄🐄 2 быка 2 коровы. Так держать!';
    return result;
}

function changeFocus(input, isWrong = false) {
    if(isWrong) {
        if (!rightChangeFocusFlag) {
            input.focus();
        }
        rightChangeFocusFlag = 0;
    } else {
        rightChangeFocusFlag = 1;
        input.focus();
    }
}

const possibileDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const app = document.querySelector('#app');
const prepare = document.querySelector('#prepare');

const startButton = document.querySelector('#start-button');
const endButton = document.querySelector('#end-button');
const tryButton = document.querySelector('#try-button');

const digitInput = document.querySelector('#digit-input');
const attemptsCount = document.querySelector('#attempts-count');
const attempts = document.querySelector('#attempts');

let currentAttempt = 0;
let currentAttempLength = 0;

let requiredAttemptLength = 0;

let rightChangeFocusFlag = 0;

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
tryButton.addEventListener("click", tryAttempt);

