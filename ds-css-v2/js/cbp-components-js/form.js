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
})
