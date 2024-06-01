let currentInput = '';
let currentOperator = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay()
}

function clearResult() {
  currentInput = '';
  currentOperator = '';
  updateDisplay()
}

function add() {
  currentOperator = '+';
  currentInput += currentOperator;
  updateDisplay()
}

function minus() {
  currentOperator = '-';
  currentInput += currentOperator;
  updateDisplay()
}

function multiply() {
  currentOperator = '*';
  currentInput += currentOperator;
  updateDisplay()
}

function divide() {
  currentOperator = '/';
  currentInput += currentOperator;
  updateDisplay()
}

function calculate() {
  const result = eval(currentInput);
  document.getElementById('result').value = result;
  currentInput = result.toString();
  currentOperator = '';
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

const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon'); 
const body = document.body;

const preferredTheme = localStorage.getItem('theme');
if (preferredTheme === 'light') {
    body.classList.remove('light-mode'); 
    themeIcon.src = "https://img.icons8.com/forma-bold/24/ffffff/sun.png";
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.src = "https://img.icons8.com/material-outlined/24/moon.png";
        themeIcon.style.filter = 'invert(0)';
    } else {
        themeIcon.src = "https://img.icons8.com/forma-bold/24/000000/sun.png"; 
        themeIcon.style.filter = 'invert(1)'; 
    }
    
    if (body.classList.contains('light-mode')) {
        signalIcon.style.filter = 'invert(1)';
        wifiIcon.style.filter = 'invert(1)';
        batteryIcon.style.filter = 'invert(1)';
        homebar.style.filter = 'invert(1)';
    } else {
        signalIcon.style.filter = 'invert(0)';
        wifiIcon.style.filter = 'invert(0)';
        batteryIcon.style.filter = 'invert(0)';
        homebar.style.filter = 'invert(0)';
    }

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
