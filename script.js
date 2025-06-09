function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

const n1 = 0;
const n2 = 0;
const operator = '+';

function operate(n1, n2, operator){
    switch(operator){
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            alert('Please choose a valid operator, such as +, -, *, or /.');
            return null;
    }
 }

 const number = document.querySelectorAll(".digit");
 const display = document.getElementById("screen");
 let currentInput = "";
 let equalsPressed = false;
 number.forEach(number => {
    number.addEventListener('click', function(event) {
      if (equalsPressed) {
        currentInput = "";
        equalsPressed = false;
      }
        currentInput += event.target.value;
      display.textContent = currentInput;
    })
 });

 const operatorPressed = document.querySelectorAll(".operator");
let currentOperator;
let operand1;
let operand2;
 operatorPressed.forEach(button => {
    button.addEventListener('click', function(event) {
        operand1 = Number(currentInput);
        currentOperator = event.target.value; 
        currentInput = "";
    });
});

 const equalPressed = document.querySelector(".equals");


 equalPressed.addEventListener('click', function(event){
    operand2 = Number(currentInput);
    let result = operate(operand1, operand2, currentOperator);
    display.textContent = result;
    currentInput = result.toString();
    equalsPressed = true;
 });

 const AC = document.querySelector(".clear");

 AC.addEventListener('click', function(event) {
    operand1 = "";
    operand2 = "";
    currentOperator = "";
    currentInput = "";
    display.textContent = 0;
    equalsPressed = false;
 })

