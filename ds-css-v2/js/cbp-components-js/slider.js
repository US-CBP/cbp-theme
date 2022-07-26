// Remove once Selector class is added.
const allSliders = document.querySelectorAll("[data-slider]");

class Slider {
  constructor(element) {
    this.type = element.dataset.slider;
    this.slider = element;
    this.wrapper = this.slider.closest(".cbp-form__control"); // The parent/wrapper of the input
    this.valueInput = this.wrapper.querySelector(".cbp-form__number")?.firstElementChild;
    this.min = this.slider.min;
    this.max = this.slider.max;
    this.fillHex = "#745fe9";
    this.trackHex = "#afaea2";
    this.styleTag = document.createElement("style");
    this.isChrome = navigator.userAgent.indexOf("Chrome") != -1;
    this.isSafari = navigator.userAgent.indexOf("Safari") != -1;

    if (this.isChrome || this.isSafari) {
      this.chromeFill();
    }

    this.addListeners(this.slider);
  }

  handleChange(e, slider) {
    const gradient = `background: linear-gradient(to right, ${this.fillHex} 0%, ${this.fillHex} ${slider.value}%, ${this.trackHex} ${slider.value}%, ${this.trackHex} 100%)`;
    const property = `#${this.slider.id}::-webkit-slider-runnable-track {${gradient}}`;

    this.styleTag.innerHTML = property;

    if (this.type == "value") {
      this.valueInput.value = slider.value;
    }
  }

  handleInput(e, slider) {
    this.slider.value = this.valueInput.value;

    const gradient = `background: linear-gradient(to right, ${this.fillHex} 0%, ${this.fillHex} ${slider.value}%, ${this.trackHex} ${slider.value}%, ${this.trackHex} 100%)`;
    const property = `#${slider.id}::-webkit-slider-runnable-track {${gradient}}`;

    this.styleTag.innerHTML = property;
  }

  chromeFill() {
    const gradient = `background: linear-gradient(to right, ${this.fillHex} 0%, ${this.fillHex} ${this.slider.value}%, ${this.trackHex} ${this.slider.value}%, ${this.trackHex} 100%)`;
    const property = `#${this.slider.id}::-webkit-slider-runnable-track {${gradient}}`;

    this.styleTag.innerHTML = property;

    document.head.appendChild(this.styleTag);
  }

  addListeners(slider) {
    slider.addEventListener("input", (e) => {
      this.handleChange(e, slider);
    });

    if (this.type == "value") {
      this.valueInput.addEventListener("change", (e) => {
        this.handleInput(e, slider);
      });

      this.valueInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.handleInput(e, slider);
        }
      });
    }
  }
}

allSliders.forEach((slider) => {
  return new Slider(slider);
});
