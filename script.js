let currentInput = '';
let currenOperator = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay()
}

function clearResult() {
  currentInput = '';
  currenOperator = '';
  updateDisplay()
}

function add() {
  currenOperator = '+';
  currentInput += currenOperator;
  updateDisplay()
}

function minus() {
  currenOperator = '-';
  currentInput += currenOperator;
  updateDisplay()
}

function multiply() {
  currenOperator = '*';
  currentInput += currenOperator;
  updateDisplay()
}

function divide() {
  currenOperator = '/';
  currentInput += currenOperator;
  updateDisplay()
}

function calculate() {
  const result = eval(currentInput);
  document.getElementById('result').value = result;
  currentInput = result.toString();
  currenOperator = '';
}

function updateDisplay() {
  const resultInput = document.getElementById('result');
  resultInput.value = currentInput;
  
  const inputLength = currentInput.length;
  const targetFontSize = inputLength <= 5 ? 80 : inputLength <= 7 ? 60 : inputLength <= 10 ? 40 : 25;

  resultInput.style.fontSize = targetFontSize + 'px'; 
  resultInput.style.transition = 'font-size 0.3s ease'; 
}

function deleteOne() {
  currentInput = currentInput.slice(0, -1); 
  updateDisplay();
}