import { IDataArr } from "../slider/slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";
import { isTypeParameterDeclaration } from "typescript";

export class Blocks {
  data: IDataArr[];
  blocksTemplate: string;
  hostElement: Element;
  current: string;

  constructor(data: IDataArr[], hostElement) {
    this.current = this.getURl("name");
    this.data = [...data].filter((el) => {
      return el.name === this.current;
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
  <h1 class="info__title">{{name}}</h1>
  <div class="tabs" data-dom="tabs">
  <div class="tabs__select"></div>
  <div class="tabs__content"></div>
</div>`;
  }
  async render(): Promise<void> {
    await RenderDOM(this.data[0], this.blocksTemplate, this.hostElement);
  }

  getURl(parName: string): string {
    const param = new URLSearchParams(window.location.search).get(parName);

    if (param === null) {
      return "";
    } else {
      return param;
    }
  }
}
