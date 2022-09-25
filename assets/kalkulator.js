console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
  };
   
  function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
  }
   
  function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
  }
   
  function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
      calculator.displayNumber = digit;
    } else {
      calculator.displayNumber += digit;
    }
  }
   
  const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }
    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }
    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }
 
    inputDigit(target.innerText);
    updateDisplay();
  });
}