function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}
function calculateDifference() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let difference = num1 - num2;
    document.getElementById('result').innerHTML = 'Result: ' + difference;
}
function calculateProduct() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let product = num1 * num2;
    document.getElementById('result').innerHTML = 'Result: ' + product;
}
function calculateQuotient() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerHTML = 'Error: Division by zero';
    } else {
        let quotient = num1 / num2;
        document.getElementById('result').innerHTML = 'Result: ' + quotient;
    };
}

/*
document.addEventListener("DOMContentLoaded", function(){
    const ranges = document.querySelectorAll('input[type="range"]');
    ranges.forEach(range => {
        const span = document.getElementById(range.id.replace('num', 'value'));
        if (!span) return;
        span.textContent = range.value;
        range.addEventListener('input', function(){
            span.textContent = range.value;
        });
    });
}
);
*/
document.addEventListener("DOMContentLoaded", function(){
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const value1 = document.getElementById('value1');
    const value2 = document.getElementById('value2');

    value1.textContent = num1.value;
    value2.textContent = num2.value;

    num1.addEventListener('input', () => {
        value1.textContent = num1.value;
    });
     num2.addEventListener('input', () => {
        value2.textContent = num2.value;
    });
}
);
