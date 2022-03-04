const disableBtns = document.querySelectorAll('.disable-btn');
const justTextBtns = document.querySelectorAll('.just-text-btn');
const justIconBtns = document.querySelectorAll('.just-icon-btn');
const activeBtns = document.querySelectorAll('.active-btn');
const outlineActiveBtns = document.querySelectorAll('.outline-active-btn');
const ghostActiveBtns = document.querySelectorAll('.ghost-active-btn');
const disabledLinks = document.querySelectorAll('[aria-disabled="true"]');

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

activeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const targetBtn = parent.firstElementChild;
    targetBtn.classList.toggle("cbp-btn--active");
  })
})

outlineActiveBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const targetBtn = parent.firstElementChild;
    targetBtn.classList.toggle("cbp-btn--outline-active");
  })
})

ghostActiveBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    const targetBtn = parent.firstElementChild;
    targetBtn.classList.toggle("cbp-btn--ghost-active");
  })
})

disabledLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (e.target.nodeName === 'A' && e.target.getAttribute('aria-disabled') == 'true') {
      e.preventDefault();
    }
  })
})

const singleSegment = document.querySelectorAll('[data-segment-button="single"]');
const multiSegment = document.querySelectorAll('[data-segment-button="multi"]');

multiSegment.forEach(segment => {
  let selected = [];

  const { children } = segment;

  for (const child of children) {
    child.addEventListener('click', e => {
      selected.push(e.target);
      e.target.classList.toggle("active");
    })
  }
})

singleSegment.forEach(segment => {
  let selected;
  
  const { children } = segment;

  for (const child of children) {
    child.addEventListener('click', e => {
      if (typeof selected === "undefined") {
        selected = e.currentTarget;
        selected.classList.add("active");
      } else if (e.currentTarget === selected) {
        selected.classList.remove("active");
      }

      if (e.currentTarget != selected) {
        selected.classList.remove("active");
        selected = e.currentTarget;
        selected.classList.add("active");
      }
    })
  }
})

/* Ripple animation effect on all buttons */
const createRipple = (e) => {
  const button = e.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.offsetX - radius}px`;
  circle.style.top = `${e.offsetY - radius}px`;
  circle.classList.add("ripple"); 

  button.appendChild(circle);

  circle.addEventListener('animationend', () => button.removeChild(circle));
}

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener("click", createRipple);
}