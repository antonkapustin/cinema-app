import { IDataFilms } from "../slider/slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Blocks {
  data: IDataFilms[];
  blocksTemplate: string;
  hostElement: Element;
  current: string;

  constructor(data: IDataFilms[], hostElement) {
    this.current = this.getURl("name");
    this.data = data.filter((el) => {
      return el.name === decodeURI(this.current);
    });

    this.hostElement = hostElement;
    this.blocksTemplate = `<div class="blocks">
    <img class="blocks__img" src="{{image}}" alt="{{name}}" />
    <ul class="blocks__list">
      <li class="blocks__item">
        <span class="blocks__icon"><i class="fas fa-th"></i></span>
        <h1 class="blocks__title">Категория</h1>
        <p class="blocks__paragraph">{{category}}</p>
      </li>
      <li class="blocks__item">
        <span class="blocks__icon"><i class="fas fa-clock"></i></span>
        <h1 class="blocks__title">Длительность</h1>
        <p class="blocks__paragraph">{{duration}}</p>
      </li>
      <li class="blocks__item">
        <span class="blocks__icon"><i class="fas fa-star"></i></span>
        <h1 class="blocks__title">Рэйтинг</h1>
        <p class="blocks__paragraph">{{rating}}</p>
      </li>
    </ul>
  </div>
  <h1 class="info__title">{{name}}</h1>`;

    this.render();
  }
  async render(): Promise<void> {
    this.hostElement.innerHTML = await RenderDOM(
      this.data[0],
      this.blocksTemplate
    );
  }

  getURl(parName: string): string {
    let regExp = new RegExp(`(?<=${parName}=).*`, "g");
    let parsParam = window.location.hash.match(regExp);
    if (parsParam === null) {
      return "";
    } else {
      return parsParam.join("");
    }
  }
}
