function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operation';
    }
  
    document.getElementById('result').value = result;
  }

  function clearInput() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
  }

// just something extra wherein these are listeners to input fields so
// as to restrict input to only numbers
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

num1Input.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, ''); // regular expression
                                                // 0-9
});

num2Input.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});