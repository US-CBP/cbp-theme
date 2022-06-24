const vsInput = document.getElementById('value-slider-input');
const valueSlider = document.getElementById('value-slider');

let value;

valueSlider.addEventListener('input', (e) => {
  value = e.target.value;

  vsInput.value = value;
})