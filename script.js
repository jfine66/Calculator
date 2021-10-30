
const grid = document.querySelector('.parent-div')
const display = document.querySelector('.text')
const text = display.innerText;
let firstNum;
let secondNum;
let symbol;
let currentValue = 0;
const operations = {
    "+": function (operand1, operand2) {
        return operand1 + operand2
    },
    "-": function (operand1, operand2) {
        return operand1 - operand2
    },
    'x': function (operand1, operand2) {
        return operand1 * operand2
    },
    '÷': function (operand1, operand2) {
        return operand1 / operand2
    }
}

grid.addEventListener('click', function (event) {
    if (event.target.classList.contains('operand')) {
        firstNum = display.innerText;
        symbol = event.target.innerText;
        display.innerText = ""
    } else if (event.target.classList.contains('equals')) {
        secondNum = display.innerText;
        currentValue = operations[symbol](parseInt(firstNum, 10), (parseInt(secondNum, 10)))
        display.innerText = currentValue;
    } else if (event.target.classList.contains('clear')) {
        display.innerText = ""
    } else if (event.target.classList.contains('back')) {
        display.innerText = display.innerText.slice(0, -1)
    } else {
        display.innerText += event.target.innerText;
    }
});



