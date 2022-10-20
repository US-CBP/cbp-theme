const allTimeFields = document.querySelectorAll('.cbp-form__time');

/**
 * Time Picker component needs to have an input mask in place for
 * hh:mm formatting as well as disabling non-number (time) inputs
 */

const maskOptions = (hour = 12) => {
  return {
    overwrite: true,
    autofix: true,
    mask: "HH:MM",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        placeholderChar: "HH",
        from: 0,
        to: hour,
        maxLength: 2,
      },
      MM: {
        mask: IMask.MaskedRange,
        placeholderChar: "MM",
        from: 0,
        to: 59,
        maxLength: 2,
      },
    },
  };
};

class TimeField {
  constructor(node) {
    this.node = node;
    this.inputWrapper = this.node.querySelector('.cbp-form__time--input');
    this.input = this.handleInput(this.node);
    this.timePeriod = this.node.querySelector(".cbp-btn__time--period");
    this.timePeriodActive;
    this.timeMask;
    this.buttons = this.timePeriod.children;

    this.handleDefaultPeriod(this.input)
    
    this.timePeriod.addEventListener('click', e => this.handleBtns(e, this.buttons, this.input))

    this.inputWrapper.addEventListener('click', e => this.handleClick(e, this.input))
  }

  handleClick(e, input) {
    if (e.target.classList.contains('minutes')) {
      return;
    } else {
      input.focus();
    }
  }

  handleInput(node) {
    return node.querySelector("input[type=text]") || node.querySelector("input[type=number]");
  }

  handleBtns(e, buttons, input) {
    [...buttons].forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    this.timePeriodActive = e.target;

    if (this.timePeriodActive.innerText === 'AM' || this.timePeriodActive.innerText === 'PM') {
      if (this.input.type === "text") {
        this.timeMask.updateOptions(maskOptions());
      } else {
        input.max = 12;
      }
    } else {
      if (this.input.type === "text") {
        this.timeMask.updateOptions(maskOptions(23));
      } else {
        input.max = 23;
      }
    }
  }

  handleTextMask(timePeriodActive) {
    if (timePeriodActive.innerText === 'AM' || timePeriodActive.innerText === 'PM') {
      this.timeMask = IMask(this.input, maskOptions());
    } else {
      this.timeMask = IMask(this.input, maskOptions(23));
    }
  }

  handleNumInput(timePeriodActive) {
    if (timePeriodActive.innerText === 'AM' || timePeriodActive.innerText === 'PM') {
      this.input.max = 12;
    } else {
      this.input.max = 23;
    }
  }

  handleDefaultPeriod(input) {
    const [defaultPeriod] = [...this.buttons].filter(btn => btn.textContent.includes(input.getAttribute("data-time-period")));
    defaultPeriod.classList.add("active");

    this.timePeriodActive = defaultPeriod;

    this.input.type === "text" ? this.handleTextMask(this.timePeriodActive) : this.handleNumInput(this.timePeriodActive);
  }
}

allTimeFields.forEach(field => {
  new TimeField(field);
})