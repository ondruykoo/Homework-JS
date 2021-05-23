'use strict';
let firstNumber = +prompt('Enter the first number (Введіть перший номер)');
let secondNumber = +prompt('Enter the second number (Введіть другий номер)');
let operationType = prompt('Enter operation sign (введіть знак операції)'); 
function calculator(firstNumber, secondNumber, operationType) {
  switch (operationType) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
  }
}
alert(calculator(firstNumber, secondNumber, operationType));