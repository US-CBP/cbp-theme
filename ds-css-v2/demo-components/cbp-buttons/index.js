const disableBtns = document.querySelectorAll('.disable-btn');
const justTextBtns = document.querySelectorAll('.just-text-btn');
const justIconBtns = document.querySelectorAll('.just-icon-btn');

const returnDisplay = (el) => {
  const currentState = window.getComputedStyle(el, null).getPropertyValue("display")

  if(currentState !== 'none') {
    return 'none';
  } else {
    return 'inline';
  }
};

disableBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const targetBtn = parent.firstElementChild;
    targetBtn.disabled = !targetBtn.disabled;
  })
})

justIconBtns.forEach( btn => {
  btn.addEventListener('click', e => {
    const parent = e.target.parentElement;
    const btnIcon = parent.querySelector('.cbp-btn > .fas');
    const btnTxt = parent.querySelector('.cbp-text-button');


    btnIcon.style.display = returnDisplay(btnIcon);
    
    if(returnDisplay(btnIcon) === 'none') {
      btnTxt.style.marginLeft = '8px';
    } else {
      btnTxt.style.marginLeft = '20px';
    }

  })
})