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
    if (n2 === 0){
        return;
    } else {
    return n1 / n2;
}
}

function percent(n1, n2){
    if (n2 === undefined || n2 === null) {
        return n1 / 100;
    } else {
    return (n1 / 100) * n2;
    }
}

//

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
        case '%':
            return percent(n1,n2);
        default:
            alert('Please choose a valid operator, such as +, -, *, / or %.');
            return null;
    }
 }
//updates display when numbers are pressed.
 const number = document.querySelectorAll(".digit");
 const display = document.getElementById("screen");
 let currentInput = "";
 let equalsPressed = false;
 number.forEach(number => {
    number.addEventListener('click', function(event) {
      if (equalsPressed && currentInput !== "-") {
        currentInput = "";
        equalsPressed = false;
        operand1 = null;
        operand2 = null;
        currentOperator = null;
      }
      if (currentInput === "-") {
        currentInput = "-" +event.target.value;
      } else {
        currentInput += event.target.value;
      }
      display.textContent = currentInput;
    })
 });

 const operatorPressed = document.querySelectorAll(".operator");
 const sign = document.querySelector(".sign");
//adds functionality for negative/positive sign button.
  sign.addEventListener('click', function(event) {
   if (currentInput === "") {
    currentInput = "-";
   } else if (currentInput === "-") {
    currentInput = "";
   } else if (currentInput.startsWith("-")){
    currentInput = currentInput.slice(1);
   } else {
    currentInput = "-" + currentInput;
   }
   display.textContent = currentInput;
});


//activates the decimal point button.
const point = document.querySelector(".point");

point.addEventListener('click', function(event) {
    if (currentInput.includes(".")) {
        currentInput = currentInput;
    } else {
        currentInput = currentInput + ".";
    }
    display.textContent = currentInput;
});

//tracks the first operand and the operator.
let currentOperator;
let operand1;
let operand2;


operatorPressed.forEach(button => {
    button.addEventListener('click', function(event){
     if (currentInput === "") {
        return;
     }
     if (equalsPressed) {
        operand1 = Number(currentInput);
        equalsPressed = false;
     }
     if (operand1 === undefined || operand1 === null) {
        operand1 = Number(currentInput);
     } else if (currentOperator && currentInput !== "") {
        operand2 = Number(currentInput);
        operand1 = operate(operand1, operand2, currentOperator);
        display.textContent = operand1
     }
      currentOperator = event.target.value;
      currentInput = "";
      equalsPressed = false;

    
    });

});


 const equalPressed = document.querySelector(".equals");

//tracks the second operand and result.
 equalPressed.addEventListener('click', function(event){
    operand2 = Number(currentInput);
    let result = operate(operand1, operand2, currentOperator);
    if ((currentOperator === "/" && operand2 === 0) || (currentOperator === "/" && operand2 === "0")) {
        result = "Nope.";
        display.textContent = result;
    } else {
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    display.textContent = operand1 + " " + currentOperator + " " + operand2 + " = " + result;
    currentInput = result.toString();
    equalsPressed = true;
    currentOperator = null;
    return result;
    
   
    }

 });

//adds functionality for the clear button.
 const AC = document.querySelector(".clear");

 AC.addEventListener('click', function(event) {
    operand1 = null;
    operand2 = null;
    currentOperator = null;
    currentInput = "";
    display.textContent = 0;
    equalsPressed = false;
 });

 //adds 'press' visual effect for buttons when clicked.
 const allButtons = document.querySelectorAll("button");

 allButtons.forEach(button => {
    button.addEventListener('click', function() {
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 150);
    });
 });


