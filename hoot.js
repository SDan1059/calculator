
const screen = document.getElementById('scream');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function updateScreen(value) {
    screen.textContent = value;
}

function handleNumber(number) {
    if (currentOperator === '') {
        firstOperand += number;
        updateScreen(firstOperand);
    } else {
        secondOperand += number;
        updateScreen(secondOperand);
    }
}

function handleOperator(operator) {
    if (firstOperand === '') return;
    currentOperator = operator;
    updateScreen(currentOperator);
}

function calculate() {
    if (firstOperand === '' || secondOperand === '') return;
    let result = 0;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateScreen(result);
    firstOperand = result.toString();
    secondOperand = '';
    currentOperator = '';
}

function BorraP() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    updateScreen('');
}

document.querySelectorAll('.boton').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        if (id === 'igual') {
            calculate();
        } else if (id === 'punto') {
            handleNumber('.');
        } else if (id === 'cero') {
            handleNumber('0');
        } else {
            handleNumber(id);
        }
    });
});

document.querySelectorAll('.operaciones').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        if (id === 'eliminar') {
            BorraP();
        } else {
            handleOperator(button.textContent);
        }
    });
});


