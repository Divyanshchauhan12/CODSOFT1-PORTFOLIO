let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = '';
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
