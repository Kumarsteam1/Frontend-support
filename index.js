// index.js

const radioInputs = document.querySelectorAll('input[type="radio"]');
const boxes = document.querySelectorAll('.box');
const total = document.querySelector('.total');

const prices = {
  1: '$10.00 USD',
  2: '$18.00 USD',
  3: '$24.00 USD'
};

radioInputs.forEach((radio, idx) => {
  radio.addEventListener('change', () => {
    boxes.forEach(box => box.classList.remove('selected'));
    boxes[idx].classList.add('selected');
    total.innerText = `Total: ${prices[radio.value]}`;
  });
});
