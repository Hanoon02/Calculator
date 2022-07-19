let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')
const deleteButton = document.getElementById('deleteBtn')
const pointButton = document.getElementById('pointBtn')
const lastOperationScreen = document.getElementById('lastOperation')
const currentOperationScreen = document.getElementById('currentOperation')

window.addEventListener('keydown', handleKeyboardInput);
equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNum);
pointButton.addEventListener('click', appendPoint);

function roundResult(number){
    return Math.round(number*1000)/1000
}

function convertOperator(keyboardOperator){
    if(keyboardOperator === '+') return '+';
    if(keyboardOperator === '-') return '-';
    if(keyboardOperator === 'x') return 'x';
    if(keyboardOperator === '÷') return '÷';
}

function add(a,b){
    return a + b;
};
function subtract(a,b){
    return a - b;
};
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    }
}
