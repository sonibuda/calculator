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


