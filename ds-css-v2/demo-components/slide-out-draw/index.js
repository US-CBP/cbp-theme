const accordion = document.querySelectorAll('.cbp-filter-cmpt .cbp-acc__btn');
const activeBtn = document.querySelector('.cbp-filter-cmpt .active-parent');

const CBPSlider = document.querySelector('.cbp-slide-draw');
const CBPSliderCloseBtn = document.querySelector('.cbp-slide-draw__close-btn');

const openFilter = document.querySelector('.filter-open');
const lightBox = document.querySelector('.light-box');

accordion.forEach(item => {
  item.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active-parent');
  });
});

const toggleSlider = () => {
  CBPSlider.classList.toggle('cbp-slide-draw--closed');
  lightBox.classList.toggle('light-box--hidden');
}

CBPSliderCloseBtn.addEventListener('click', () => { toggleSlider() });
openFilter.addEventListener('click', () => { console.log('CLICKED'); toggleSlider() });