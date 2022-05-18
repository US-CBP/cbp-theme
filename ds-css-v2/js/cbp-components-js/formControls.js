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

const allToppings = document.getElementById('all-toppings');
const nested = document.querySelectorAll('.cbp-form__control--nested input');

allToppings.addEventListener('change', (e) => {
  // e.preventDefault();

  if (e.target.checked) {
    nested.forEach(chk => {
      chk.checked = true;
    })
  } else {
    nested.forEach(chk => {
      chk.checked = false;
    })
  }
})

const updateIndy = () => {
  let checkedCount = 0;

  for(const topping of nested) {
    if (topping.checked) {
      checkedCount++;
    }
  }

  if(checkedCount === 0) {
    allToppings.checked = false;
    allToppings.indeterminate = false;
  } else if(checkedCount === nested.length) {
    allToppings.checked = true;
    allToppings.indeterminate = false;
  } else {
    allToppings.checked = false;
    allToppings.indeterminate = true;
  }
}

nested.forEach(chk => {
  chk.addEventListener('change', updateIndy)
})