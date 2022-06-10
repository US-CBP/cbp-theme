const demoInput = document.getElementById('number-counter');
const numInput = document.getElementById('numeric-counter');
const minus = demoInput.querySelectorAll('button')[0];
const plus = demoInput.querySelectorAll('button')[1];
const textarea = document.querySelector("textarea");
const textInput = document.getElementById('firstName');

let charCount = document.getElementById('char-count');
let charCount2 = document.getElementById('char-count-2');
let value = numInput;

minus.addEventListener('click', () => {
  numInput.value--;
})

plus.addEventListener('click', () => {
  numInput.value++;
})

numInput.addEventListener('change', (e) => {
  console.log(e.target.value);
})


textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    if (currentLength >= maxLength) {
        return console.log("You have reached the maximum number of characters.");
    }
    
    charCount.innerHTML = maxLength - currentLength;
    // console.log(`${maxLength - currentLength} chars left`);
});

textInput.addEventListener("input", event => {
  const target = event.currentTarget;
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;

  if (currentLength >= maxLength) {
      return console.log("You have reached the maximum number of characters.");
  }
  
  charCount2.innerHTML = maxLength - currentLength;
  // console.log(`${maxLength - currentLength} chars left`);
});