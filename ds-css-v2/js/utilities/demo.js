const addError = (e, selector, isMulti = false) => {
  const select = document.getElementById(selector);
  const errDesc = select.previousElementSibling;
  const desc = errDesc.previousElementSibling;

  if (isMulti) {
    if (e.target.checked) {
      select.firstElementChild.classList.add("cbp-dropdown__custom--error");
      errDesc.hidden = false;
      desc.hidden = true;
    } else {
      select.firstElementChild.classList.remove("cbp-dropdown__custom--error");
      errDesc.hidden = true;
      desc.hidden = false;
    }
  } else {
    if (e.target.checked) {
      select.classList.add("select-wrapper--error");
      errDesc.hidden = false;
      desc.hidden = true;
    } else {
      select.classList.remove("select-wrapper--error");
      errDesc.hidden = true;
      desc.hidden = false;
    }
  }
};

const disableSelect = (e, selector, isMulti = false) => {
  const select = document.getElementById(selector);

  if (isMulti) {
    if (e.target.checked) {
      select.disabled = true;
      select.firstElementChild.disabled = true;
    } else {
      select.disabled = false;
      select.firstElementChild.disabled = false;
    }
  } else {
    if (e.target.checked) {
      select.classList.add('select-wrapper--disabled');
      select.firstElementChild.disabled = true;
    } else {
      select.classList.remove('select-wrapper--disabled');
      select.firstElementChild.disabled = false;
    }
  }
}
