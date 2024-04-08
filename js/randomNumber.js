function createRandomNumber (digitLength) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let digit;
    let randomNumber = 0;
    for (let i = 0; i < digitLength; i++) {
        digit = numbers[Math.floor(Math.random() * numbers.length)];
        if (i === 0 && digit === '0') {
            i--;
            continue;
        }
        randomNumber = randomNumber * 10 + +digit;
        numbers = numbers.filter(x => x !== digit);
    }
    return randomNumber;
}