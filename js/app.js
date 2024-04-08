function startGame(event) {
    event.preventDefault();
    const digitCount = parseInt(digitCountInput.value);
    const tryCount = parseInt(tryCountInput.value);
    if (digitCount < 4 || digitCount > 10) {
        cowHandleError('Пожалуйста, выберите количество цифр от 4 до 10.');
        return;
    }
    if (tryCount < 4 || tryCount > 100) {
        cowHandleError('Пожалуйста, выберите количество попыток от 4 до 100.');
        return;
    }
    requiredAttemptLength = digitCount;
    tryCounter = tryCount;
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
    attemptsCount.textContent = tryCount;
    app.classList.remove('invisible');
    prepare.classList.add('invisible');
    digitInput.children[0].focus();
    digitInput.children[digitInput.children.length - 1].addEventListener('keydown', (event) => {
        if (event.keyCode === 13 && currentAttempLength === requiredAttemptLength) {
            tryAttempt();
        }
    });
    randomNumber = createRandomNumber(digitCount);
}

function endGame() {
    digitInput.innerHTML = '';
    attempts.innerHTML = '';
    currentAttempt = 0;
    currentAttempLength = 0;
    randomNumber = 0;
    cowHandleError('', true);
    digitCountInput.value = '4';
    tryCountInput.value = '10';
    app.classList.add('invisible');
    prepare.classList.remove('invisible');
    possibileDigitsLeft = possibileDigits;
    clearAttempts();
}

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
tryButton.addEventListener("click", tryAttempt);

