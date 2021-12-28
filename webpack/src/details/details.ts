import { IData } from "../../../src/components/slider/slider.interfaces";
import { renderToDom } from "../utilits/renderToTheDom";

export class Details {
  data: IData[];
  blocksTemplate: string;
  synopsisTemplate: string;
  constructor(data: IData[]) {
    this.data = data;
    this.blocksTemplate = `<div class="blocks">
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
  <div class="info__devider"></div>`;
    this.synopsisTemplate = `<h1 class="synopsis__title">Synopsis</h1> 
    <p class="synopsis__paragraph">{{synopsis}}</p>`;
    this.render();
  }
  render(): void {
    const currentId = this.parser("name");
    const el = this.data.filter((el) => {
      return el.name === currentId;
    });
    const info = document.querySelector(".info");
    const synopsis = document.querySelector(".synopsis");
    if (info) {
      info.innerHTML = this.renderInfo(el);
    }
    if (synopsis) {
      synopsis.innerHTML = this.renderSynopsis(el);
    }
  }
  renderInfo(el: IData[]) {
    let template = el.map((el) => {
      return renderToDom(el, this.blocksTemplate);
    });

    return template.join("");
  }
  renderSynopsis(el: IData[]): string {
    let template = el.map((el) => {
      return renderToDom(el, this.synopsisTemplate);
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
