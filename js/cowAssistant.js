function handleError(errorMessage, appClosed = false) {
    if (isErrorActive) {
        document.querySelector('.tip-container').remove();
        isErrorActive = false;
        console.log('old deleted');
    }
    if (appClosed) {
        return 0;
    }
    const newElement = document.createElement('div');
    
    newElement.className = 'tip-container';
    console.log('new created', newElement);

    newElement.innerHTML = `
    <div class="tip-text">${errorMessage}</div>
    <button class="tip-button">Я понял</button>
`;
    const existingElement = document.getElementById('tip-cow');

    existingElement.parentNode.insertBefore(newElement, existingElement);

    const deleteButton = newElement.querySelector('.tip-button');

    deleteButton.addEventListener('click', function () {
        newElement.remove();
        isErrorActive = false;
    });

    isErrorActive = true;
}

let isErrorActive = false;

