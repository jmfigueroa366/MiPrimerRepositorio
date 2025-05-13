let currentInput = '';
let firstNumber = null;
let currentOperation = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  firstNumber = parseFloat(currentInput);
  currentOperation = op;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || currentOperation === null || firstNumber === null) return;

  const secondNumber = parseFloat(currentInput);
  let result;

  switch (currentOperation) {
    case '+': result = firstNumber + secondNumber; break;
    case '-': result = firstNumber - secondNumber; break;
    case '*': result = firstNumber * secondNumber; break;
    case '/':
      if (secondNumber === 0) {
        result = 'Error';
      } else {
        result = firstNumber / secondNumber;
      }
      break;
    default: result = 'NaN';
  }

  currentInput = result.toString();
  currentOperation = null;
  firstNumber = null;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  firstNumber = null;
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}