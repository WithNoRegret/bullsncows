function moveBackwardOldValue(input) {
    backwardInputStorage = input.value;
}

function moveForward(input, oldValue) {
    if (currentAttempLength === 0 && input.value === '0') {
        cowHandleError('Число нельзя начать с нуля.');
        input.value = '';
        return;

    }
    if (possibileDigitsLeft.includes(input.value)) {
        currentAttempt = currentAttempt * 10 + parseInt(input.value);
        if (currentAttempLength < requiredAttemptLength) {
            currentAttempLength++;
        }
        var nextInput = input.nextElementSibling;
        if (nextInput != null) {
            changeFocus(nextInput);
        }
        possibileDigitsLeft = possibileDigitsLeft.filter(x => x !== input.value);
    } else if (!possibileDigitsLeft.includes(input.value) && possibileDigits.includes(input.value)) {
        cowHandleError(`Вы уже использовали цифру ${input.value} в этом числе. Каждая цифра должна быть уникальной.`);
        input.value = '';

    } else if (input.value === '') {
        currentAttempt = Math.floor(currentAttempt / 10);
        if (currentAttempLength > 0) {
            currentAttempLength--;
        }
        input.value = '';
        possibileDigitsLeft.push(backwardInputStorage);
    }
    else {
        cowHandleError('Неверное значение. Используй только цифры от 0 до 9.');
        input.value = '';
    }
}

function isInputEmpty(event, input) {
    if (event.keyCode === 8 && input.value.length === 0) { // keyCode 8 для Backspace
        var prevInput = input.previousElementSibling;
        if (prevInput != null) {
            changeFocus(prevInput);
        }
    }
}