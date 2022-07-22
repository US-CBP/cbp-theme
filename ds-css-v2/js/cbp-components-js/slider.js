const tempStyle = document.createElement('style');
const fillHex = '#745fe9';
const trackHex = '#afaea2';

class Slider {
  constructor(id) {
    this.node = document.getElementById(id);
    this.slider = this.node.querySelector('input[type="range"]');
    this.valueInput = this.node.querySelector(".cbp-form__number").firstElementChild;
    this.slider.value = this.valueInput.value;
    this.min = this.slider.min;
    this.max = this.slider.max;
    this.isChrome = navigator.userAgent.indexOf("Chrome") != -1;

    if (this.isChrome) {
      this.chromeFill();
    }
    
    this.slider.addEventListener("input", (e) => {
      this.handleChange(e, this.slider);
    });

    this.valueInput.addEventListener("change", (e) => {
      this.handleInput(e, this.slider);
    });

    this.valueInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleInput(e, this.slider);
      }
    });
  }

  handleChange(e, slider) {
    const gradient = `background: linear-gradient(to right, ${fillHex} 0%, ${fillHex} ${slider.value}%, ${trackHex} ${slider.value}%, ${trackHex} 100%)`;
    const property = `#${this.slider.id}::-webkit-slider-runnable-track {${gradient}}`;

    tempStyle.innerHTML = property;

    this.valueInput.value = slider.value;
  }

  handleInput(e, slider) {
    this.slider.value = this.valueInput.value;
    
    const gradient = `background: linear-gradient(to right, ${fillHex} 0%, ${fillHex} ${slider.value}%, ${trackHex} ${slider.value}%, ${trackHex} 100%)`;
    const property = `#${slider.id}::-webkit-slider-runnable-track {${gradient}}`;

    tempStyle.innerHTML = property;
  }

  chromeFill() {
    const gradient = `background: linear-gradient(to right, ${fillHex} 0%, ${fillHex} ${this.slider.value}%, ${trackHex} ${this.slider.value}%, ${trackHex} 100%)`;
    const property = `#${this.slider.id}::-webkit-slider-runnable-track {${gradient}}`;

    tempStyle.innerHTML = property;

    document.head.appendChild(tempStyle);
  }
}

const demoSlider = new Slider("demo-value-slider");
