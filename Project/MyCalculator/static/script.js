document.getElementById('btn').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    document.querySelector('.sumVal').innerText = num1 + num2;
    document.querySelector('.productVal').innerText = num1 * num2;
    document.querySelector('.divisionVal').innerText = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by 0';
});
