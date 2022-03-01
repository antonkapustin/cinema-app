import { IData, IDataFilms } from "./slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Slider {
  data: IData;
  hostElement: Element;
  template: string;
  initialeData: IDataFilms[];
  clone: IDataFilms[];
  current: number;
  items: number;
  value: string;
  constructor(data, hostElement) {
    this.initialeData = [...data.films];
    this.clone = [...data.films];
    this.hostElement = hostElement;
    this.template = `
    <div class="slider__content"><div class="slider__item" data-dom="iterator">
         <a class="slider__link" href="#details?name={{name}}"
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
        <li class="slider__item_navigation"  data-dom="iterator" ><div class="slider__dote" value="{{value}}"></div></li>
        <li class="slider__item_navigation"><button class="slider__button" type="button" value="next">></button></li>
      </ul></div>`;
    this.current = 0;
    this.items = 3;
    this.value = data.films[1].value as string;
    this.initialeData = this.slidShow(this.current, this.items);
    this.render().then(() => {
      this.applyHandler();
    });
  }
  public async render(): Promise<void> {
    this.hostElement.innerHTML = await RenderDOM(
      this.initialeData,
      this.template
    );

    let dote = this.hostElement.querySelector(
      `[value="${this.value}"]`
    ) as HTMLDivElement;
    dote.classList.add("slider__dote_active");
  }

  private applyHandler(): void {
    this.hostElement.addEventListener("click", this.onClick);
  }

  private onClick = (event: Event): void => {
    console.log(1);
    let current = event.target as HTMLButtonElement;
    console.log(current);
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
    delete this.initialeData[1].active;
    this.value = this.initialeData[1].value as string;
    this.initialeData = this.slidShow(this.current, this.items);
    this.value = this.initialeData[1].value as string;
    this.render();
  };

  private slidShow(start: number, items: number): IDataFilms[] {
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
