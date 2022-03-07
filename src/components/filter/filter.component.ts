import { RenderDOM } from "../../utilits/renderToTheDom";
import { IDataArr } from "../slider/slider.interfaces";

export class Filter {
  data: IDataArr[];
  hostElement: Element;
  template: string;

  constructor(data, hostElement) {
    this.data = [...data];
    this.hostElement = hostElement;
    this.template = `<button class="filter__button">
    <span class="icon icon_search"><i class="fas fa-search"></i></span>
  </button>
  <input class="filter__input" type="text" placeholder="Search Movie" />`;
  }

  async render(): Promise<void> {
    await RenderDOM(this.data, this.template, this.hostElement);
    this.applyHandler();
  }

  applyHandler(): void {
    const button = this.hostElement.querySelector(".filter__button");
    const input = this.hostElement.querySelector(".filter__input");
    button.addEventListener("click", this.onClick);
    input.addEventListener("keypress", this.onClick);
  }

  onClick = (event: Event) => {
    let current = event.target as HTMLButtonElement;
    let key = event.key as string;

    while (current !== this.hostElement) {
      if (current.classList.contains("filter__button") || key === "Enter") {
        break;
      }
      current = current.parentElement as HTMLButtonElement;
    }
    if (current === this.hostElement) {
      return;
    }
    let input = this.hostElement.querySelector(
      ".filter__input"
    ) as HTMLInputElement;
    this.filtration(input.value);
  };

  filtration(value: string): void {
    let item = this.data.filter((el) => {
      return el.name.toUpperCase().trim().indexOf(value.toUpperCase()) === 0;
    });
    let a = ``;
    if (item.length > 1) {
      a = location.href.replace(/(?<=\?).*/gi, `el=${value}#search`);
    } else if (item.length === 1) {
      a = location.href.replace(/(?<=\?).*/gi, `name=${item[0].name}#details`);
    } else {
      a = `#search`;
    }

    location.href = a;
  }
}
