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
