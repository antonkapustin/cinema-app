import { Slider } from "../slider/slider.component";
import { IDataArr } from "../slider/slider.interfaces";

export class Films extends Slider {
  template: string;
  current: number;
  items: number;
  value: number;
  data: IDataArr[];
  initialeData: IDataArr[];

  constructor(data, hostElement) {
    super(data, hostElement);
    this.current = 0;
    this.items = 3;
    this.value = 1;
  }
  public async render(): Promise<void> {
    this.data = this.slidShow(this.current, this.items);
    this.template = `
      <div class="slider__content"><div class="slider__item" data-dom="iterator">
           <a class="slider__link" href="?name={{name}}#details"
             ><img
              class="slider__img {{active}}"
               src="{{image}}"
              alt="{{name}}"
          /></a>
           </div>
           </div>
           <div class="slider__navigation">
           <ul class="slider__list">
          <li class="slider__item_navigation" ><button class="slider__button" type="button" value="prev"><</button></li>
          <li class="slider__item_navigation"  data-dom="iterator"><div class="slider__dote"></div></li>
          <li class="slider__item_navigation"><button class="slider__button" type="button" value="next">></button></li>
        </ul></div>`;

    await super.render();

    let dote = this.hostElement.querySelectorAll(`.slider__dote`);
    dote[this.value].classList.add("slider__dote_active");
    this.applyHandler();
  }
  public applyHandler() {
    this.hostElement.addEventListener("click", this.onClick);
  }
  private onClick = (event: Event): void => {
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

    this.changeSlides(current.value);

    if (current.value === "prev") {
      this.value = this.value - 1;
      if (this.value < 0) {
        this.value = 2;
      }
    } else if (current.value === "next") {
      this.value = this.value + 1;
      if (this.value > 2) {
        this.value = 0;
      }
    }
    this.hostElement.innerHTML = "";
    this.render();
  };

  private slidShow(start: number, items: number): IDataArr[] {
    this.current = start;
    let end = start + items;
    let showItem = this.data.slice(this.current, end);
    showItem[1].active = "slider__img_active";

    return showItem;
  }
}
