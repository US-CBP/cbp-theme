const { children } = document.querySelector('[data-breadcrumb="true"]');

for (let child of children) {
  console.log(child);
}

console.log(window.location.pathname);