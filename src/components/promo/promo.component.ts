import { Slider } from "../slider/slider.component";

export class Promo extends Slider {
  value: number;
  constructor(data, hostElement) {
    super(data, hostElement);
    this.value = 1;
  }
  public async render(): Promise<void> {
    this.template = `<ul class="slider__list">
    <li class="slider__item" data-dom="iterator">
      <img
        class="slider__img slider__img_small"
        src={{img}}
        alt="promo"
      />
    </li>
  </ul>`;
    await super.render();
    setTimeout(() => {
      this.changeSlides("next");
      this.hostElement.innerHTML = "";
      this.render();
    }, 10000);
  }
}
