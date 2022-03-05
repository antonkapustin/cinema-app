import { RenderDOM } from "../../utilits/renderToTheDom";
import { IData, IDataFilms } from "../slider/slider.interfaces";
import { ShowTime } from "../seanses/time";
import { isContinueStatement } from "typescript";

export class Tabs {
  data: IDataFilms;
  hostElement: Element;
  var: string;
  params: string[];
  template: string;
  constructor(data: IDataFilms, hostElement: Element) {
    this.data = data;
    this.params = ["synopsis", "time"];
    this.hostElement = hostElement;
    this.var = `synopsis`;
    this.template = `<p class="synopsis__paragraph">{{${this.var}}}</p>`;
    this.render();
    this.applyHandler();
  }
  render(): void {
    const tabsSelect = this.hostElement.querySelector(".tabs__select");
    tabsSelect.innerHTML = this.renderHeader();
    const content = this.hostElement.querySelector(".tabs__content");
    // if (value === 1) {
    //   content.innerHTML = "";
    //   const seanses = new ShowTime(this.data, content);
    // } else {
    //   content.innerHTML = this.renderContent(value);
    // }
  }
  private applyHandler(): void {
    this.hostElement.addEventListener("click", this.onClick.bind(this));
  }
  private onClick(event: Event): void {
    let current = event.target as HTMLInputElement;
    while (current !== this.hostElement) {
      if (current.classList.contains("tabs__input")) {
        break;
      }
      current = current.parentElement as HTMLInputElement;
    }
    if (current === this.hostElement) {
      return;
    }

    console.log(current.value);
  }
  private renderHeader(): string {
    let template = "";
    for (let i = 0; i < this.params.length; i++) {
      template += `<label class="tabs__item"><input type="radio" class="tabs__input" name="tabs__input" value="${this.params[i]}" checked/>
        <span class="tabs__title">${this.params[i]}</span></label>`;
    }
    return template;
  }
}
