const display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === '.' && display.textContent.includes('.')) return;
    if (display.textContent === "0" && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function calculateResult() {
    try {
        const expression = display.textContent.replace(/factorial/g, 'factorialCalc');
        const result = Function('"use strict";return (' + expression + ')')();
        display.textContent = result;
    } catch (error) {
        display.textContent = "Invalid Expression";
    }
}

function factorialCalc(n) {
    if (n < 0) return undefined;
    return n <= 1 ? 1 : n * factorialCalc(n - 1);
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearDisplay();
    }
});
