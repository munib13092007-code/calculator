let num1 = document.getElementById("firstNum");
let num2 = document.getElementById("secNum");
let result = document.getElementById("result");
let operation = document.getElementById("operation");
let current = num1;


document.getElementById("clear").addEventListener(`click`, function () {
    num1.textContent = "";
    num2.textContent = "";
    operation.textContent = "";
    result.textContent = "0";
    current = num1;
});

function append(value) {
    current.textContent += value;
}

function setOperation(operator) {
    operation.textContent = operator;
    current = num2;
    if (result.textContent != "0") {
        num1.textContent = result.textContent;
        result.textContent = "0";
        num2.textContent = "";
    }
}

function calc() {
    if (num1 == "")
        return 0;
    else if (num2 == "")
        return num1;

    switch (operation.textContent) {
        case "+": return parseInt(num1.textContent) + parseInt(num2.textContent);
        case "-": return parseInt(num1.textContent) - parseInt(num2.textContent);
        case "x": return parseInt(num1.textContent) * parseInt(num2.textContent);
        case "/": return parseInt(num1.textContent) / parseInt(num2.textContent);
    }
}


document.getElementById("one").addEventListener(`click`, function(){ append("1"); })
document.getElementById("two").addEventListener(`click`, function () {append("2"); })
document.getElementById("three").addEventListener(`click`, function () { append("3"); })
document.getElementById("four").addEventListener(`click`, function () { append("4"); })
document.getElementById("five").addEventListener(`click`, function () { append("5"); })
document.getElementById("six").addEventListener(`click`, function () { append("6"); })
document.getElementById("seven").addEventListener(`click`, function () { append("7"); })
document.getElementById("eight").addEventListener(`click`, function () { append("8"); })
document.getElementById("nine").addEventListener(`click`, function () { append("9");})
document.getElementById("zero").addEventListener(`click`, function () { append("0"); })
document.getElementById("plus").addEventListener(`click`, function () { setOperation("+"); })
document.getElementById("minus").addEventListener(`click`, function () { setOperation("-"); })
document.getElementById("multiply").addEventListener(`click`, function () { setOperation("x"); })
document.getElementById("divide").addEventListener(`click`, function () { setOperation("/"); })
document.getElementById("equal").addEventListener(`click`, function () { result.textContent = calc(); })

