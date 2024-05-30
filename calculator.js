let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const display = document.getElementById('display');

function appendToDisplay(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    display.innerText = currentOperand;
}

function clearDisplay() {
    currentOperand = '';
    display.innerText = '0';
}

function calculate(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        operate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function operate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operation = undefined;
    previousOperand = '';
    display.innerText = currentOperand;
}

