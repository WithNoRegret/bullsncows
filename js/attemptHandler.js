function tryAttempt() {
    if (currentAttempLength != requiredAttemptLength) {
        cowHandleError("Введите все числа");
        changeFocus(digitInput.children[currentAttempLength]);
        return;
    }
    const newAttemptCard = document.createElement('p');
    const attempt = bullsCowsHandler(currentAttempt, randomNumber);
    if (attempt === 1) {
        winGame(randomNumber);
        endGame();
        return;
    }
    if (attempt) {
        OldAttempts.push(currentAttempt);
        newAttemptCard.innerHTML = attempt;
        attempts.appendChild(newAttemptCard);
        for (element of digitInput.children) {
            element.value = '';
        }
        currentAttempt = 0;
        currentAttempLength = 0;
        possibileDigitsLeft = possibileDigits;
        changeFocus(digitInput.children[0]);
        tryCounter--;
        if (tryCounter === 0) {
            loseGame(randomNumber);
            endGame();
            return;
        }
        attemptsCount.textContent = tryCounter;
    }

}