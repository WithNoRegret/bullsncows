function bullsCowsHandler (currentAttempt, botNumber) {
    if (OldAttempts.includes(currentAttempt)) {
        cowHandleError('Это число уже использовалось');
        return 0;

    }
    const bulls = bullCounter(String(currentAttempt).split(''), String(botNumber).split(''));
    if (bulls === String(currentAttempt).length) {
        return 1;
    }
    const cows = cowCounter(String(currentAttempt).split(''), String(botNumber).split(''));
    return `<span class="attempt-text">${currentAttempt}</span> Быки: ${bulls} ${'🐂'.repeat(bulls)} | Коровы: ${cows} ${'🐄'.repeat(cows)}`;
}

function bullCounter(userNumber, botNumber) {
    let bulls = 0;
    for (let i = 0; i < userNumber.length; i++) {
        if (userNumber[i] === botNumber[i]) {
            bulls++;
        }
    }
    return bulls;
}

function cowCounter (userNumber, botNumber) {
    let cows = 0;
    for (let i = 0; i < userNumber.length; i++) {
        for (let j = 0; j < botNumber.length; j++) {
            if (userNumber[i] === botNumber[j] && i !== j) {
                cows++;
            }
        }
    }
    return cows;
}

function clearAttempts () {
    OldAttempts = [];
}

let OldAttempts = []; 

