import { IData, IDataFilms } from "./slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Slider {
  data: IData;
  hostElement: Element;
  template: string;
  initialeData: IDataFilms[];
  current: number;
  items: number;
  value: number;
  constructor(data, hostElement) {
    this.initialeData = [...data.films];
    this.hostElement = hostElement;
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
    this.current = 0;
    this.items = 3;
    this.value = 1;
  }
  public async render(): Promise<void> {
    const data = this.slidShow(this.current, this.items);

    await RenderDOM(data, this.template, this.hostElement);

    let dote = this.hostElement.querySelectorAll(`.slider__dote`);
    dote[this.value].classList.add("slider__dote_active");
    this.applyHandler();
  }

  private applyHandler(): void {
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

    if (current.value === "prev") {
      const prev = this.initialeData.splice(this.initialeData.length - 1, 1);
      this.initialeData[1].active = "";
      this.initialeData = [...prev, ...this.initialeData];
      this.value = this.value - 1;
      console.log(this.value);
      if (this.value < 0) {
        this.value = 2;
      }
    } else if (current.value === "next") {
      const next = this.initialeData.splice(0, 1);
      this.initialeData[0].active = "";
      this.initialeData = [...this.initialeData, ...next];
      this.value = this.value + 1;
      if (this.value > 2) {
        this.value = 0;
      }
    }
    this.hostElement.innerHTML = "";
    this.render();
  };

  private slidShow(start: number, items: number): IDataFilms[] {
    this.current = start;
    let end = start + items;
    let showItem = this.initialeData.slice(this.current, end);
    showItem[1].active = "slider__img_active";

    return showItem;
  }
}
