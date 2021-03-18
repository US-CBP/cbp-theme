const accordion = document.querySelectorAll('.cbp-filter-cmpt button');
const activeBtn = document.querySelector('.cbp-filter-cmpt .active-parent');

const CBPSlider = document.querySelector('.cbp-slide-draw');
const CBPSliderCloseBtn = document.querySelector('.cbp-slide-draw__close-btn');

accordion.forEach(item => {
  item.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active-parent');
  });
});

const toggleSlider = () => {
  CBPSlider.classList.toggle('cbp-slide-draw--closed');
}

CBPSliderCloseBtn.addEventListener('click', () => { toggleSlider() });