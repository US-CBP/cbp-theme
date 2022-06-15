const demoInput = document.getElementById("number-counter");
const numInput = document.getElementById("numeric-counter");
const minus = demoInput.querySelectorAll("button")[0];
const plus = demoInput.querySelectorAll("button")[1];
const textarea = document.querySelector("textarea");
const textInput = document.getElementById("firstName");

let charCount = document.getElementById("char-count");
let charCount2 = document.getElementById("char-count-2");
let value = numInput;

class NumberInput {
  constructor(id) {
    this.numCounterNode = document.getElementById(id)
    this.input = this.numCounterNode.querySelector('input[type="number"]');
    this.value = this.input.value;
    this.minus = this.numCounterNode.querySelector('#decrement');
    this.plus = this.numCounterNode.querySelector('#increment');

    this.plus.addEventListener('click', this.increment(10), false)
    console.log(this.plus);
  }

  increment(step = 1) {
    console.log('increment was called');
    if (step > 1) {
      this.value += step;
    } else {
      this.value++;
    }
  }
}

const demoNumInput = new NumberInput('number-counter');

const countChar = (id, event) => {
  const { currentTarget: target } = event;
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;
  const count = document.getElementById(id);

  if (currentLength >= maxLength) {
    return console.log("You have reached the maximum number of characters.");
  }

  count.innerHTML = maxLength - currentLength;
};
