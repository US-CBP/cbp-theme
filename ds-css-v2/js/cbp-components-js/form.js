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

  if (checked) {
    desc[0].hidden = true;
    desc[1].hidden = false;
    input.setCustomValidity("invalid");
  } else {
    desc[0].hidden = false;
    desc[1].hidden = true;
    input.setCustomValidity("");
  }
}

const disableInput = (event, inputId) => {
  const { target: { checked } } = event;
  const input = getInput(inputId);

  if (checked) {
    input.disabled = true;
  } else {
    input.disabled = false;
  }
}

const readOnlyInput = (event, inputId) => {
  const { target: { checked } } = event;
  const input = getInput(inputId);

  if (checked) {
    input.readOnly = true;
  } else {
    input.readOnly = false;
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