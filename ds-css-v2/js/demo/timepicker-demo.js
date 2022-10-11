class TimePickerDemo {
  #id = 'time-picker-demo';
  #component = document.getElementById(this.#id)
}

console.log(TimePickerDemo.component)

const tpDemo = (e, id) => {
  const component = document.getElementById(id);
  const parent = component.closest('.cbp-form-wrapper');
  const input = component.querySelector('input[type=text]') || component.querySelector('input[type=number]');
  const inputs = component.querySelectorAll('input[type=number]');
  const description = parent.querySelector('.cbp-form__description');
  const errorMessage = parent.querySelector('.cbp-form__description--error');
  const timePeriod = parent.querySelector('.cbp-btn__time--period');

  if (e.target.checked) {
    switch (e.target.name) {
      case "invalid":
        description.hidden = true;
        errorMessage.hidden = false;

        component.classList.add("error");
        break;

      case "disable":
        component.classList.add("disabled");
        input.setAttribute('disabled', true);

        inputs[0].setAttribute('disabled', true);
        inputs[1].setAttribute('disabled', true);

        [...timePeriod.children].forEach((btn) => {
          btn.setAttribute('disabled', true);
        });
        break;

      case "readonly":
        component.classList.add('readonly')
        input.setAttribute('readonly', true);

        inputs[0].setAttribute('readonly', true);
        inputs[1].setAttribute('readonly', true);
        
        [...timePeriod.children].forEach(btn => {
          btn.setAttribute('disabled', true);
        })
        break;
      default:
        break;
    }
  } else {
    component.className = 'cbp-form__time';
    description.hidden = false;
    errorMessage.hidden = true;
    input.removeAttribute('readonly');
    input.removeAttribute('disabled');

    inputs[0].removeAttribute('readonly');
    inputs[1].removeAttribute('readonly');

    inputs[0].removeAttribute('disabled');
    inputs[1].removeAttribute('disabled');

    [...timePeriod.children].forEach(btn => {
      btn.removeAttribute('disabled', false);
    });

    [...timePeriod.children].forEach(btn => {
      btn.removeAttribute('readonly', false);
    })
  }

}