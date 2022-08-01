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
    this.value = this.input.value || 0;
    this.minus = this.numCounterNode.querySelector('#decrement');
    this.plus = this.numCounterNode.querySelector('#increment');

    this.plus.addEventListener('click', (e) => {
      this.increment(this.input)
    })

    this.minus.addEventListener('click', (e) => {
      this.decrement(this.input)
    })
  }

  increment(input, step = 1) {
    if (step > 1) {
      this.value += step;
      input.value = this.value;
    } else {
      this.value++;
      input.value = this.value;
    }
  }

  decrement(input, step = 1) {
    if (step > 1) {
      this.value -= step;
      input.value = this.value;
    } else {
      this.value--;
      input.value = this.value;
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
