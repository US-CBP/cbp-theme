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

const setInvalid = (event, inputId) => {
  const { target: { checked } } = event;
  const input = getInput(inputId);

  if (checked) {
    input.setCustomValidity("invalid");
  } else {
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