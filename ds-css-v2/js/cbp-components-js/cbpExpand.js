const expandTitles = document.querySelectorAll(".cbp-expand__title");

expandTitles.forEach((title) => {
  title.addEventListener("click", (item) => {
    const expandParent = item.target.closest(".cbp-expand");
    expandParent.classList.toggle("active");
  });
});
