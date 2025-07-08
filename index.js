// index.js

// Get all radio buttons
const radioInputs = document.querySelectorAll('input[type="radio"]');

// Get boxes and total display element
const boxes = document.querySelectorAll('.box');
const total = document.querySelector('.total');

// Define prices for each option
const prices = {
  1: '$10.00 USD',
  2: '$18.00 USD',
  3: '$24.00 USD'
};

// Listen for changes in selection
radioInputs.forEach((radio, i) => {
  radio.addEventListener('change', () => {
    // Remove 'selected' class from all boxes
    boxes.forEach(box => {
      box.classList.remove('selected');
    });

    // Add 'selected' class to clicked one
    boxes[i].classList.add('selected');

    // Update total price text
    total.innerText = 'Total: ' + prices[radio.value];
  });
});
