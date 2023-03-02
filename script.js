const form = document.getElementById('form');
const cardHolder = document.getElementById('cardholder-name');
const cardName = document.querySelector('.card-name');
const cardNumber = document.getElementById('card-number');
const cardNum = document.querySelector('.card-number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const inputbb = document.querySelectorAll('input');
const button = document.querySelector('.continue');
const thankYou = document.querySelector('.thank-you');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove('success');
  formControl.classList.add('error');

  const small = formControl.querySelector('p');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function checkCvc(input) {
  if (input.value === '') {
    showError(input, "Can't be blank");
  } else if (
    isNaN(input.value) ||
    input.value.length < 3 ||
    input.value > 999
  ) {
    showError(input, 'Choose between 000 and 999');
  } else {
    showSuccess(input);
  }
}
function checkRequiredDate(input1, input2) {
  if (isNaN(input1.value) || input1.value < 1 || input1.value > 12) {
    showError(input1, 'Must be between 1 and 12');
  } else if (input1.value === '' || input2.value === '') {
    showError(input1, "Can't be blank");
  } else if (isNaN(input2.value) || input2.value < 1 || input2.value > 99) {
    showError(input1, 'Must be between 1 and 99');
  } else {
    showSuccess(input1, input2);
  }
}

function cardNumberFormat(input) {
  const inputValue = input.value;

  if (inputValue === '') {
    showError(input, "Can't be blank");
  } else if (/[a-zA-Z]/.test(inputValue)) {
    showError(input, 'Wrong format, numbers only');
  } else if (inputValue.length !== 19) {
    showError(input, 'Numbers must be 16');
  } else {
    showSuccess(input);
  }
}

function cardNameFormat(input) {
  const words = input.value.trim().split(/\s+/);

  if (input.value === '') {
    showError(input, "can't be blank");
  } else if (words.length === 1) {
    showError(input, 'Invalid name');
  } else if (/\d/.test(input.value)) {
    showError(input, 'Wrong format, letters only');
  } else {
    showSuccess(input);
  }
}

function addSpace(input) {
  let inputText = input.value;
  inputText = inputText.replace(/\s/g, '');
  inputText = inputText.replace(/(.{4})(?=.)/g, '$1 ');
  input.value = inputText;
}

function cardNumText() {
  if (cardNumber.value === '') {
    cardNum.innerText = '0000 0000 0000 0000';
  } else {
    cardNum.innerText = cardNumber.value;
  }
}

function cardNameText() {
  if (cardHolder.value === '') {
    cardName.innerText = 'JANE APPLESEED';
  } else {
    cardName.innerText = cardHolder.value;
  }
}

function monthText() {
  if (month.value === '') {
    document.querySelector('.month').innerText = '00';
  } else {
    document.querySelector('.month').innerText = month.value;
  }
}

function yearText() {
  if (year.value === '') {
    document.querySelector('.year').innerText = '00';
  } else {
    document.querySelector('.year').innerText = year.value;
  }
}

function cvcText(params) {
  if (cvc.value === '') {
    document.getElementById('cvv-no').innerText = '000';
  } else {
    document.getElementById('cvv-no').innerText = cvc.value;
  }
}

function confirm(inputs) {
  let allFilled = true;
  inputs.forEach((input) => {
    const formControl = input.parentElement;
    if (input.value === '') {
      formControl.classList.add('error');
      allFilled = false;
    } else if (formControl.className.includes('error')) {
      allFilled = false;
    } else {
      formControl.classList.remove('error');
    }
  });

  if (allFilled) {
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
  }
}

inputbb.forEach((inputb) => {
  inputb.addEventListener('input', (e) => {
    e.preventDefault();

    checkCvc(cvc);
    checkRequiredDate(month, year);
    cardNameFormat(cardHolder);
    addSpace(cardNumber);
    cardNumberFormat(cardNumber);
    cardNameText();
    cardNumText();
    monthText();
    yearText();
    cvcText();
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  confirm([cardHolder, cardNumber, month, year, cvc]);
});

button.addEventListener('click', (e) => {
  e.preventDefault();

  form.classList.remove('hidden');
  thankYou.classList.add('hidden');
});
