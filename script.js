let display = document.getElementById('display');
let currentInput = '';
let hasDecimal = false;

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
    hasDecimal = false;
}

function appendNumber(number) {
    if (currentInput.length < 16) {
        currentInput += number;
        display.textContent = currentInput;
    }
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.textContent = currentInput;
        hasDecimal = false; // reset decimal flag after operator
    }
}

function appendDot() {
    if (!hasDecimal) {
        currentInput += '.';
        display.textContent = currentInput;
        hasDecimal = true;
    }
}

function deleteLast() {
    if (currentInput !== '') {
        if (currentInput[currentInput.length - 1] === '.') {
            hasDecimal = false;
        }
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        hasDecimal = currentInput.includes('.');
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
}