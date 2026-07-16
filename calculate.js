let num1 = document.getElementById("firstNum");
let num2 = document.getElementById("secNum");
let result = document.getElementById("result");
let operation = document.getElementById("operation");
let current = num1;



function append(value) {
    current.textContent += value;
}

function clear() {
    num1.textContent = "";
    num2.textContent = "";
    operation.textContent = "";
    result.textContent = "0";
    current = num1;
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
    if (num1.textContent == "")
        return 0;
    else if (num2.textContent == "")
        return num1.textContent;

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
document.getElementById("clear").addEventListener(`click`, function () { clear(); });

document.addEventListener(`keydown`, (e) => {
    switch (e.key) {
        case "1": append(1); break;
        case "2": append(2); break;
        case "3": append(3); break;
        case "4": append(4); break;
        case "5": append(5); break;
        case "6": append(6); break;
        case "7": append(7); break;
        case "8": append(8); break;
        case "9": append(9); break;
        case "0": append(0); break;
        case "+": setOperation("+"); break;
        case "-": setOperation("-"); break;
        case "x": setOperation("x"); break;
        case "/": setOperation("/"); break;
        case "=": result.textContent = calc(); break;
        case "c": clear();
        
    }
})

