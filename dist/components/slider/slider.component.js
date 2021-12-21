import { renderToDom } from "../../utilits/renderToTheDom.js";
export class Slider {
  constructor(data, hostElement) {
    this.initialeData = [...data];
    this.hostElement = hostElement;
    this.sliderTemplate = `<li class="slider__item">
    <a class="slider__link" href="/{{name}}"
      ><img
        class="slider__img"
        src="{{image}}"
        alt="{{name}}"
    /></a>
    </li>`;
    this.current = 0;
    this.data = this.slidShow(this.current, 3);
    this.render();
    this.applyHandler();
  }
  render() {
    const slider = document.createElement("div");
    const navigation = document.createElement("div");
    navigation.classList.add("slider__navigation");
    slider.classList.add("slider__content");
    slider.innerHTML = this.renderSlider();
    navigation.innerHTML = this.renderNavigation();
    this.hostElement.innerHTML = "";
    this.hostElement.append(slider);
    this.hostElement.append(navigation);
  }
  renderSlider() {
    let template = this.data.map((el) => {
      return renderToDom(el, this.sliderTemplate);
    });
    return `<ul class="slider__list">
    ${template.join("")}
    </ul>`;
  }
  renderNavigation() {
    let dote = '<li class="slider__dote"></li>';
    for (let i = 1; i < this.data.length; i++) {
      dote = dote + '<div class="slider__dote"></div>';
    }
    return `<ul class="slider__list">
    <li class="slider__item"><button class="slider__button" type="button" value="prev"><</button></li>
    ${dote}
    <li class="slider__item"><button class="slider__button" type="button" value="next">></button></li>
  </ul>`;
  }
  applyHandler() {
    this.hostElement.addEventListener("click", this.onClick.bind(this));
  }
  onClick(event) {
    let current = event.target;
    while (current !== this.hostElement) {
      if (current.classList.contains("slider__button")) {
        break;
      }
      current = current.parentElement;
    }
    if (current === this.hostElement) {
      return;
    }
    if (current.value === "prev") {
      this.current = this.current - 1;
    } else if (current.value === "next") {
      this.current = this.current + 1;
    }
    this.data = this.slidShow(this.current, 3);
    this.render();
  }
  slidShow(start, items) {
    this.current = start;
    let end = start + items;
    let showItem = this.initialeData.slice(this.current, end);
    return showItem;
  }
}
