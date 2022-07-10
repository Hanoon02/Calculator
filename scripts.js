function add(){
    document.getElementById('Add').addEventListener("click"); 
    var number1 = window.prompt("Enter the First Number: ");
    var number2 = window.prompt("Enter the Second Number: ");
    alert("The numbers added together are: " + (parseInt(number1) + parseInt(number2)));
};

alert("Hello World!");