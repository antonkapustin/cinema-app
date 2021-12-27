import { IData } from "../../../src/components/slider/slider.interfaces";
import { renderToDom } from "../utilits/renderToTheDom";

export class Parser {
  data: IData[];
  constructor(data: IData[]) {
    this.data = data;
    this.render();
  }
  render(): void {
    const currentId = this.parser("id");
    const el = this.data.filter((el) => {
      return el.id === currentId;
    });
    const info = document.querySelector(".info");
    if (info) {
      info.innerHTML = this.renderInfo(el);
    }
  }
  renderInfo(el: IData[]) {
    let template = el.map((el) => {
      return renderToDom(
        el,
        `<div class="blocks">
      <img class="blocks__img" src="{{image}}" alt="{{name}}" />
      <ul class="blocks__list">
        <li class="blocks__item">
          <span class="blocks__icon"><i class="fas fa-th"></i></span>
          <h1 class="blocks__title">Category</h1>
          <p class="blocks__paragraph">{{category}}</p>
        </li>
        <li class="blocks__item">
          <span class="blocks__icon"><i class="fas fa-clock"></i></span>
          <h1 class="blocks__title">Duration</h1>
          <p class="blocks__paragraph">{{duration}}</p>
        </li>
        <li class="blocks__item">
          <span class="blocks__icon"><i class="fas fa-star"></i></span>
          <h1 class="blocks__title">Rating</h1>
          <p class="blocks__paragraph">{{rating}}</p>
        </li>
      </ul>
    </div>
    <h1 class="info__title">{{name}}</h1>
    <div class="info__devider"></div>`
      );
    });

    return template.join("");
  }
  parser(parName: string): string {
    let parsParam = new URLSearchParams(window.location.search);
    if (parsParam === null) {
      return "";
    } else {
      return parsParam.get(parName) as string;
    }
  }
}
