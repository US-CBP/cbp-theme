const indCheck = document.getElementById('indy');

indCheck.indeterminate = true;

const setInline = (e, wrapperId) => {
  const { target: { checked } } = e;
  const wrapper = document.getElementById(wrapperId);

  if (checked) {
    wrapper.classList.toggle('cbp-form__control--inline');
  } else {
    wrapper.classList.toggle('cbp-form__control--inline');
  }
}

const setControlDisabled = (e, wrapperId) => {
  const { target: { checked } } = e;
  const wrapper = document.getElementById(wrapperId);
  const allInputs = wrapper.querySelectorAll('.cbp-form__checkbox,.cbp-form__radio');
  const { children } = wrapper;

  if (checked) {
    allInputs.forEach(input => {
      input.disabled = true;
    })
  } else {
    allInputs.forEach(input => {
      input.disabled = false;
    })
  }
}