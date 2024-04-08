const possibileDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let possibileDigitsLeft = possibileDigits;

const app = document.querySelector('#app');
const prepare = document.querySelector('#prepare');

const startButton = document.querySelector('#start-button');
const endButton = document.querySelector('#end-button');
const tryButton = document.querySelector('#try-button');

const resultModal = document.querySelector('#result-modal');
const resultText = document.querySelector('#result-text');
const answerText = document.querySelector('#answer-text');
const closeModalButton = document.querySelector('#close-modal-button');

const digitCountInput = document.querySelector('#digit-count');
const tryCountInput = document.querySelector('#try-count');

const digitInput = document.querySelector('#digit-input');
const attemptsCount = document.querySelector('#attempts-count');

const attempts = document.querySelector('#attempts');



let isErrorActive = false;

let requiredAttemptLength = 0;
let tryCounter = 0;

let currentAttempt = 0;
let currentAttempLength = 0;

let randomNumber = 0;

let rightChangeFocusFlag = 0;

let backwardInputStorage;

let OldAttempts = [];