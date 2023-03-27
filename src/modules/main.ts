const display = document.querySelector('.display') as HTMLDivElement;
const btns = document.querySelectorAll('button');
const img = document.querySelector('img') as HTMLImageElement;

const imgUrl = new URL('../media/accept.png', import.meta.url);

let firstNumber: string = '';
let secondNumber: string = '';
let method: string = '';

btns.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            clear();
        }
        else if (value === '=') {
            calculate();
            img.src = imgUrl.href;
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            method = value;
            firstNumber = display.innerText;
            secondNumber = '';
            display.innerText = value;
        } else {
            if (method === '') {
                firstNumber += value;
                display.innerText = firstNumber;
            } else {
                secondNumber += value;
                display.innerText = secondNumber;
            }
        }
    })
})

function clear(): void {
    display.innerText = '';
    firstNumber = '';
    secondNumber = '';
    method = '';
    img.src = '';
}

function calculate(): void {
    const a: number = parseInt(firstNumber);
    const b: number = parseInt(secondNumber);

    switch (method) {
        case '+':
            display.innerText = (a + b).toString();
            break;
        case '-':
            display.innerText = (a - b).toString();
            break;
        case '*':
            display.innerText = (a * b).toString();
            break;
        case '/':
            display.innerText = (a / b).toString();
            break;
    }

    firstNumber = '';
    secondNumber = '';
    method = '';
}