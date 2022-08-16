const findDesc = (element) => {
  const wrapper = element.closest(".cbp-form-wrapper");
  const descriptions = wrapper.querySelectorAll(".cbp-form__description");

  return descriptions;
}

const invalidateInputGroup = (event, id, type = 'element') => {
  const { target: { checked } } = event;
  const isComponent = type === 'component';
  const element = !isComponent && document.getElementById(id);
  const component = isComponent && document.getElementById(id);
  const input = component.querySelector('input');
  const desc = findDesc(component)

  if (checked) {
    desc[0].hidden = true;
    desc[1].hidden = false;
    input.setCustomValidity("invalid");
    isComponent && component.classList.add("cbp-field-group--error");
  } else {
    desc[0].hidden = false;
    desc[1].hidden = true;
    input.setCustomValidity("");
    isComponent && component.classList.remove("cbp-field-group--error");
  }
}

const disableInputGroup = (event, id, type = 'element') => {
  const { target: { checked } } = event;
  const isComponent = type === 'component';
  const component = isComponent && document.getElementById(id);
  const input = component.querySelector('input');
  const btn = component.querySelector('button');

  if (checked) {
    input.disabled = true;
    btn.disabled = true;
  } else {
    input.disabled = false;
    btn.disabled = false;
  }
}

const readOnlyInputGroup = (event, id, type = 'element') => {
  const { target: { checked } } = event;
  const isComponent = type === 'component';
  const component = isComponent && document.getElementById(id);
  const input = component.querySelector('input');
  const btn = component.querySelector('button');

  if (checked) {
    component.classList.add('cbp-field-group--readonly');
    input.readOnly = true;
    btn.disabled = true;
  } else {
    component.classList.remove('cbp-field-group--readonly');
    input.readOnly = false;
    btn.disabled = false;
  }
}