import { IData } from "./slider.interfaces";
import { renderToDom } from "../../utilits/renderToTheDom";

export class Slider {
  data: IData[];
  initialeData: IData[];
  clone: IData[];
  hostElement: Element;
  sliderTemplate: string;
  current: number;
  items: number;
  value: string;

  constructor(data: IData[], hostElement: Element) {
    this.initialeData = [...data];
    this.clone = [...data];
    this.hostElement = hostElement;
    this.sliderTemplate = `<li class="slider__item">
    <a class="slider__link" href="/{{name}}"
      ><img
        class="slider__img {{active}}"
        src="{{image}}"
        alt="{{name}}"
    /></a>
    </li>`;
    this.current = 0;
    this.items = 3;
    this.value = data[1].value;
    this.data = this.slidShow(this.current, this.items);
    this.render();
    this.applyHandler();
  }
  render(): void {
    const slider = document.createElement("div");
    const navigation = document.createElement("div");
    navigation.classList.add("slider__navigation");
    slider.classList.add("slider__content");
    slider.innerHTML = this.renderSlider();
    navigation.innerHTML = this.renderNavigation();
    this.hostElement.innerHTML = "";
    this.hostElement.append(slider);
    this.hostElement.append(navigation);

    let dote = this.hostElement.querySelector(
      `[value="${this.value}"]`
    ) as HTMLDivElement;
    dote.classList.add("slider__dote_active");
  }
  renderSlider(): string {
    let template = this.data.map((el) => {
      return renderToDom(el, this.sliderTemplate);
    });

    return `<ul class="slider__list">
    ${template.join("")}
    </ul>`;
  }
  renderNavigation(): string {
    let dote = '<li class="slider__dote" value="1"></li>';
    for (let i = 2; i <= this.initialeData.length; i++) {
      dote = dote + `<li class="slider__dote" value="${i}"></li>`;
    }
    return `<ul class="slider__list">
    <li class="slider__item"><button class="slider__button" type="button" value="prev"><</button></li>
    ${dote}
    <li class="slider__item"><button class="slider__button" type="button" value="next">></button></li>
  </ul>`;
  }
  applyHandler(): void {
    this.hostElement.addEventListener("click", this.onClick.bind(this));
  }
  onClick(event: Event): void {
    let current = event.target as HTMLButtonElement;

    while (current !== this.hostElement) {
      if (current.classList.contains("slider__button")) {
        break;
      }
      current = current.parentElement as HTMLButtonElement;
    }
    if (current === this.hostElement) {
      return;
    }

    if (current.value === "prev") {
      this.current = this.current - 1;
    } else if (current.value === "next") {
      this.current = this.current + 1;
    }
    delete this.data[1].active;
    this.value = this.data[1].value;
    this.data = this.slidShow(this.current, this.items);
    this.value = this.data[1].value;
    this.render();
  }
  slidShow(start: number, items: number): IData[] {
    if (this.value === `${this.initialeData.length - 1}`) {
      this.clone.push(...this.initialeData);
    }
    this.current = start;
    let end = start + items;
    let showItem = this.clone.slice(this.current, end);
    showItem[1].active = "slider__img_active";

    return showItem;
  }
}
