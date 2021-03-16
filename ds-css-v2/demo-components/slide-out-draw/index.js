const accordion = document.querySelectorAll('.cbp-filter-cmpt button');
const activeBtn = document.querySelector('.cbp-filter-cmpt .active-parent')

accordion.forEach(item => {
  item.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active-parent');
  });
});