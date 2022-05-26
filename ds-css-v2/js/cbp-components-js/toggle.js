const getCheck = document.getElementById('demo-toggle');

const input = getCheck.querySelector('input');
const first = getCheck.querySelector('.slider').firstElementChild;
const last = getCheck.querySelector('.slider').lastElementChild;

input.onchange = (e) => {
  if (e.target.checked) {
    first.style.display = "inline-block";
    last.style.display = "none";
  } else {
    first.style.display = "none";
    last.style.display = "inline-block";
  }
}