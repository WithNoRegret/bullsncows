function startGame (event) {
    event.preventDefault();
    const digitCountInput = document.querySelector('#digit-count');
    const tryCountInput = document.querySelector('#try-count');
    const digitCount = parseInt(digitCountInput.value);
    const tryCount = parseInt(tryCountInput.value);
    if (digitCount < 4 || digitCount > 10) {
        handleError('Пожалуйста, выберите количество цифр от 4 до 10.');
        return;
    }
    if (tryCount < 4 || tryCount > 100) {
        handleError('Пожалуйста, выберите количество попыток от 4 до 100.');
        return;
    }
    requiredAttemptLength = digitCount;
    for (let i = 0; i < digitCount; i++) {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('maxlength', 1);
        newInput.addEventListener('keydown', (event) => isInputEmpty(event, event.target));
        newInput.addEventListener('beforeinput', (event) => moveBackwardOldValue(event.target));
        newInput.addEventListener('input', (event) => moveForward(event.target));
        newInput.addEventListener('focusout', (event) => changeFocus(event.target, true));
        digitInput.appendChild(newInput);
    }
    attemptsCount.innerHTML = tryCount;
    app.classList.remove('invisible');
    prepare.classList.add('invisible'); 
    digitInput.children[0].focus();
    
    let numbers = possibileDigits;
    for (let i = 0; i < digitCount; i++) {
        digit = numbers[Math.floor(Math.random() * numbers.length)];
        digit = i;
        if (i === 0 && digit === '0') {
            i--;
            continue;
        }
        randomNumber = randomNumber * 10 + +digit;
        numbers = numbers.filter(x => x !== digit);
    }
}

function endGame () {
    digitInput.innerHTML = '';
    attempts.innerHTML = '';
    currentAttempt = 0;
    currentAttempLength = 0;
    randomNumber = 0;
    handleError('', true);
    app.classList.add('invisible');
    prepare.classList.remove('invisible');
    possibileDigitsLeft = possibileDigits;
}

function isInputEmpty(event, input) {
    if (event.keyCode === 8 && input.value.length === 0) { // keyCode 8 для Backspace
        var prevInput = input.previousElementSibling;
        if (prevInput != null) {
            changeFocus(prevInput);
        }
    }
}

function moveBackwardOldValue (input) {
    backwardInputStorage = input.value;
}

function moveForward(input, oldValue) {
    if (currentAttempLength === 0 && input.value === '0') {
        handleError('Число нельзя начать с нуля.');
        input.value = '';
        return;

    }
    if (possibileDigitsLeft.includes(input.value)) {
        currentAttempt = currentAttempt * 10 + parseInt(input.value);
        if(currentAttempLength < requiredAttemptLength) {
            currentAttempLength++;
        }
        var nextInput = input.nextElementSibling;
        if (nextInput != null) {
            changeFocus(nextInput);
        }
        possibileDigitsLeft = possibileDigitsLeft.filter(x => x !== input.value);
    } else if (!possibileDigitsLeft.includes(input.value) && possibileDigits.includes(input.value)) {
        handleError (`Вы уже использовали цифру ${input.value} в этом числе. Каждая цифра должна быть уникальной.`);
        input.value = '';

    }else if (input.value === '') {
        currentAttempt = Math.floor(currentAttempt / 10);
        if (currentAttempLength > 0){
            currentAttempLength--;
        }
        input.value = '';
        possibileDigitsLeft.push(backwardInputStorage);
    } 
    else {
        handleError ('Неверное значение. Используй только цифры от 0 до 9.');
        input.value = '';
    }
}

function tryAttempt() {
    if(currentAttempLength != requiredAttemptLength){
        handleError("Введите все числа");
        changeFocus(digitInput.children[currentAttempLength]);
        return 0;
    }
    const newAttemptCard = document.createElement('p');
    newAttemptCard.innerHTML = `<span class="attempt-text">${currentAttempt}</span> 🐂🐂🐄🐄 2 быка 2 коровы. Так держать!`;
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
let possibileDigitsLeft = possibileDigits;

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
let randomNumber = 0;
let rightChangeFocusFlag = 0;

let backwardInputStorage;

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
tryButton.addEventListener("click", tryAttempt);

