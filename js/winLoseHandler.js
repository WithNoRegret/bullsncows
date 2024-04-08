function winGame (botNumber) {
    resultText.textContent = 'Победа!';
    answerText.textContent = 'Ответ: ' + botNumber;
    resultModal.classList.remove('invisible');
    closeModalButton.addEventListener('click', () => {
        resultModal.classList.add('invisible');
    });
}

function loseGame (botNumber) {
    resultText.textContent = 'Проигрыш!';
    answerText.textContent = 'Ответ: ' + botNumber;
    resultModal.classList.remove('invisible');
    closeModalButton.addEventListener('click', () => {
        resultModal.classList.add('invisible');
    });
}