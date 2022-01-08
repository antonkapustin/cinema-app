import { IData } from "./components/slider/slider.interfaces";
import { renderToDom } from "./utilits/renderToTheDom";
import { Tabs } from "./components/tabs/tabs.component";

export class RenderPage {
  data: IData[];
  blocksTemplate: string;
  constructor(data: IData[]) {
    this.data = data;
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
  render(): void {
    const currentId = this.getURl("name");
    const el = this.data.filter((el) => {
      return el.name === currentId;
    });
    const info = document.querySelector(".info");
    const synopsis = document.querySelector(".synopsis");
    if (info) {
      info.innerHTML = this.renderInfo(el);
    }
    const tabs = document.querySelector(".tabs");
    if (tabs) {
      const tabsClass = new Tabs(el, tabs, ["synopsis", "time"]);
    }
  }
  renderInfo(el: IData[]) {
    let template = el.map((el) => {
      return renderToDom(el, this.blocksTemplate);
    });

    return template.join("");
  }
  getURl(parName: string): string {
    let parsParam = new URLSearchParams(window.location.search);
    if (parsParam === null) {
      return "";
    } else {
      return parsParam.get(parName) as string;
    }
  }
}
