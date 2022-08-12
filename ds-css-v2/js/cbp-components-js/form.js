const { children } = document.querySelector(".cbp-form__password");
const [input, btn] = children;

btn.addEventListener("click", (e) => {
  if (input.type === "password") {
    input.type = "text";
    btn.firstElementChild.className = "fas fa-eye";
  } else {
    input.type = "password";
    btn.firstElementChild.className = "fas fa-eye-slash";
  }
});

const getInput = (inputId) => {
  const input = document.getElementById(inputId);

  return input;
};

const findDesc = (element) => {
  const wrapper = element.closest(".cbp-form-wrapper");
  const descriptions = wrapper.querySelectorAll(".cbp-form__description");

  return descriptions;
}

const setInvalid = (event, inputId) => {
  const { target: { checked } } = event;
  const input = getInput(inputId);
  const desc = findDesc(input);
  const isPassword = inputId == 'password';
  const passParent = isPassword && input.closest('.cbp-form__password');
  const hashBtn = isPassword && input.nextElementSibling;

  if (checked) {
    desc[0].hidden = true;
    desc[1].hidden = false;
    input.setCustomValidity("invalid");
    isPassword && passParent.classList.add("cbp-form__password--error");
  } else {
    desc[0].hidden = false;
    desc[1].hidden = true;
    input.setCustomValidity("");
    isPassword && passParent.classList.remove("cbp-form__password--error");
  }
}

const disableInput = (event, inputId) => {
  const { target: { checked } } = event;
  const input = getInput(inputId);
  const isPassword = inputId == 'password';
  const hashBtn = isPassword && input.nextElementSibling;
  const isNumericCounter = inputId == 'numeric-counter';
  const increment = document.getElementById('increment');
  const decrement = document.getElementById('decrement');

  if (checked) {
    input.disabled = true;
    hashBtn.disabled = true;

    if (isNumericCounter) {
      increment.disabled = true;
      decrement.disabled = true;
    }
  } else {
    input.disabled = false;
    hashBtn.disabled = false;
    
    if (isNumericCounter) {
      increment.disabled = false;
      decrement.disabled = false;
    }
  }
}

const readOnlyInput = (event, inputId) => {
  const { target: { checked } } = event;
  const input = getInput(inputId);
  const isPassword = inputId == 'password';
  const passParent = isPassword && input.closest('.cbp-form__password');
  const hashBtn = isPassword && input.nextElementSibling;
  const isNumericCounter = inputId == 'numeric-counter';
  const increment = document.getElementById('increment');
  const decrement = document.getElementById('decrement');
  const numericParent = isNumericCounter && input.closest('.cbp-form__number--counter');

  if (checked) {
    input.readOnly = true;
    if (isPassword) {
      passParent.classList.add('cbp-form__password--readonly');
      hashBtn.disabled = true;
    }

    if (isNumericCounter) {
      increment.disabled = true;
      decrement.disabled = true;
      numericParent.classList.add('input-read-only')
    }
  } else {
    input.readOnly = false;
    if (isPassword) {
      passParent.classList.remove('cbp-form__password--readonly');
      hashBtn.disabled = false;
    }

    if (isNumericCounter) {
      increment.disabled = false;
      decrement.disabled = false;
      numericParent.classList.remove('input-read-only')
    }
  }
}

class NumberSwitch {
  constructor(id) {
    this.node = document.getElementById(id);
    this.btns = this.node.querySelector('.cbp-btn--segment');
    this.unit = this.node.querySelector('.cbp-form__unit');
    this.activeBtn = this.btns.querySelector('.active');

    this.toggleActive();
  }

  toggleActive() {
    this.btns.addEventListener('click', ({ target }) => {
      const { classList } = target;
      if (classList.contains('active')) {
        return;
      } else {
        this.clearActive();
        classList.add('active');
        this.activeBtn = target;

        this.setUnit(this.activeBtn.innerText);
      }
    })
  }

  clearActive() {
    const [...btns] = this.btns.children;
    btns.forEach(btn => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })
  }

  setUnit(unit) {
    this.unit.innerHTML = unit.toLowerCase();
  }
}

const demoSwitch = new NumberSwitch('demo-switch');