const display = document.getElementById("display");
const answer = document.getElementById("answer");

function appendValue(value)
{
    display.value += value;
    updateCalculation();
}
function calculateResult()
{
    try {
        answer.textContent = eval(display.value);
        answer.classList.add('bold');
    }
    catch(error)
    {
        alert('Invalid expression')
    }
}
function updateCalculation()
{
    try {
        answer.textContent = eval(display.value);
    }
    catch(error)
    {
        answer.textContent = '';
    }
}
function clearDisplay()
{
    display.value = '';
    answer.textContent = '';
    answer.classList.remove('bold');
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d|[\+\-\*/\.\(\)]/.test(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
        updateCalculation();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});