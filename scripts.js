const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
let number1=0;
let number2=0;

function add(){
    alert("The sum is: " + (parseInt(number1) + parseInt(number2)));
};
function subtract(){
    alert("The difference is: " + (parseInt(number1) - parseInt(number2)));
};
function multiply(){
    alert("The product is: " + (parseInt(number1) * parseInt(number2)));
}
function divide(){
    alert("The quotient is: " + (parseInt(number1) / parseInt(number2)));
}

function assignNumber(num){
    if(number1==0){
        number1 = num;
    }
    else{
        number2 = num;
    }
}
function clear(){
    number1 = 0;
    number2 = 0;
}

one.addEventListener("click");
{
    event.target.style.backgroundColor = 'red';
    assignNumber(1);
}
two.addEventListener("click");
{
    assignNumber(2);
}
three.addEventListener("click");
{
    assignNumber(3);
}
four.addEventListener("click");
{
    assignNumber(4);
}
five.addEventListener("click");
{
    assignNumber(5);
}
six.addEventListener("click");
{
    assignNumber(6);
}
seven.addEventListener("click");
{
    assignNumber(7);
}
eight.addEventListener("click");
{
    assignNumber(8);
}
nine.addEventListener("click");
{
    assignNumber(9);
}
zero.addEventListener("click");
{
    assignNumber(0);
}

add.addEventListener("click");
{
    add();
}
subtract.addEventListener("click");
{
    subtract();
}
multiply.addEventListener("click");
{
    multiply();
}
divide.addEventListener("click");
{
    divide();
}

// Language: javascript
// Path: