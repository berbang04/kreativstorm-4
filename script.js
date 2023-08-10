const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operatorValue = null;
let secondValue = false;

updateDisplay();

function updateDisplay() {
      display.value = displayValue;
}

keys.addEventListener('click', function (e) {
      const element = e.target;

      if (!element.matches('button')) return;

      if (element.classList.contains('operators')) {
            handleOperator(element.value);
            updateDisplay();
            return;
      }
      if (element.classList.contains('clear')) {
            clear();
            updateDisplay();
            return;
      }
      if (element.classList.contains('decimal')) {
            inputDecimal();
            updateDisplay();
            return;
      }

      inputNumber(element.value);
      updateDisplay();
})

function handleOperator(operator) {
      const value = parseFloat(displayValue);

      if (firstValue === null) {
            firstValue = value;
      }else if(operator){
            const result=calculate(firstValue,value,operatorValue);

            displayValue=String(result);
            firstValue=result;
      }

      secondValue = true;
      operatorValue = operator;
}

function calculate(first,second,operator){
      if(operator==='+'){
            return first+ second;
      }else if(operator==='-'){
            return first-second;
      }else if(operator==='*'){
            return first*second;
      }else if(operator==='/'){
            return first / second;
      }else if(operator==='%'){
            displayValue = (parseFloat(displayValue)/100);
            // return first-second;
      }else if (operator === '+/-') { 
            displayValue = (-parseFloat(displayValue));
      }
            return second;
}

function inputNumber(num) {
      if (secondValue) {
            displayValue=num;
            secondValue=false;
      }
      else {
            displayValue = displayValue === '0' ? num : displayValue + num;

      }
}
function inputDecimal() {
      if (!displayValue.includes('.')) {
            displayValue += '.';
      }
}
function clear() {
      displayValue = '0';
}