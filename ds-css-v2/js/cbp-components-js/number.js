const textarea = document.querySelector("textarea");
const textInput = document.getElementById("firstName");

let charCount = document.getElementById("char-count");
let charCount2 = document.getElementById("char-count-2");

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

const phoneError = (e, domNode) => {
  const phoneNumberNode = document.getElementById(domNode);
  const parent = phoneNumberNode.closest('.cbp-form-wrapper');
  const desc = parent.querySelectorAll('.cbp-form__description');
  const dropdown = phoneNumberNode.querySelector('#area-code');
  const input = phoneNumberNode.querySelector('input[type="tel"]');

  if (e.target.checked) {
    input.setCustomValidity('invalid')
    dropdown.classList.add('cbp-dropdown__custom--error');
    desc[0].hidden = true;
    desc[1].hidden = false;
  } else {
    input.setCustomValidity('')
    dropdown.classList.remove('cbp-dropdown__custom--error'); 
    desc[0].hidden = false;
    desc[1].hidden = true;
  }
}

const phoneDisable = (e, domNode) => {
  const phoneNumberNode = document.getElementById(domNode);
  const parent = phoneNumberNode.closest('.cbp-form-wrapper');
  const dropdown = phoneNumberNode.querySelector('#area-code');
  const input = phoneNumberNode.querySelector('input[type="tel"]');

  if (e.target.checked) {
    dropdown.disabled = true;
    input.disabled = true;
  } else {
    dropdown.disabled = false;
    input.disabled = false;
  }
}

const disableNumSwitch = (event, inputId) => {
  const input = document.getElementById(inputId);
  const node = input.closest('.cbp-form__number--switch'); // node will be used to refer to wrapper of component
  const switchNode = node.querySelector('.cbp-btn--segment');
  const switches = switchNode.children;
  
  if (event.target.checked) {
    input.disabled = true;
    switches[0].disabled = true;
    switches[1].disabled = true;
  } else {
    input.disabled = false;
    switches[0].disabled = false;
    switches[1].disabled = false;
  }
}

const handleReadOnly = (event, inputId) => {
  const input = document.getElementById(inputId);
  const node = input.closest('.cbp-form__number--switch'); // node will be used to refer to wrapper of component
  const switchNode = node.querySelector('.cbp-btn--segment');
  const switches = switchNode.children;

  if (event.target.checked) {
    input.readOnly = true;
    switchNode.classList.add('read-only');
    switches[0].disabled = true;
    switches[1].disabled = true;
  } else {
    input.readOnly = false;
    switchNode.classList.remove('read-only');
    switches[0].disabled = false;
    switches[1].disabled = false;
  }
}
class NumberCounter {
  constructor(id) {
    this.numCounterNode = document.getElementById(id)
    this.input = this.numCounterNode.querySelector('input[type="number"]');
    this.minus = this.numCounterNode.querySelector('#decrement');
    this.plus = this.numCounterNode.querySelector('#increment');
    this.isDisabled = this.input.disabled;
    this.isReadOnly = this.input.readOnly;

    this.plus.addEventListener('click', (e) => {
      this.increment(this.input)
    })

    this.minus.addEventListener('click', (e) => {
      this.decrement(this.input)
    })

    this.setReadOnly();
  }

  increment(input, step = 1) {
    if (step > 1) {
      input.value += step;
    } else {
      input.value++;
    }
  }

  decrement(input, step = 1) {
    if (step > 1) {
      input.value -= step;
    } else {
      input.value--;
    }
  }

  setReadOnly() {
    if (this.isReadOnly || this.isDisabled) {
      this.minus.disabled = true;
      this.plus.disabled = true;
    } else {
      this.minus.disabled = false;
      this.plus.disabled = false;
    }
  }
 }

const demoNumInput = new NumberCounter('number-counter');
