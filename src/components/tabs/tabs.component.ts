import { RenderDOM } from "../../utilits/renderToTheDom";
import { IDataArr } from "../slider/slider.interfaces";

export class Tabs {
  data: IDataArr[];
  hostElement: Element;
  var: string;
  params: string[];
  template: string;
  contentBox: Element;
  tabsSelect: Element;
  template_: string;
  constructor(data: IDataArr[], hostElement: Element) {
    this.data = data;
    this.params = ["synopsis", "time"];
    this.hostElement = hostElement;
    this.var = `time`;

    this.contentBox = this.hostElement.querySelector(".tabs__content");
    this.tabsSelect = this.hostElement.querySelector(".tabs__select");
    this.tabsSelect.innerHTML = this.renderHeader();
    this.template = `<p class="synopsis__paragraph">{{synopsis}}</p>`;
    this.template_ = `<div class="seans" data-dom="seans" his-data="time"></div>`;
    this.applyHandler();
  }
  async render(): Promise<void> {
    if (this.var === "synopsis") {
      await RenderDOM(this.data, this.template, this.contentBox);
    } else {
      await RenderDOM(this.data, this.template_, this.contentBox);
    }
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
    this.var = current.value;
    this.contentBox.innerHTML = "";

    this.render();
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
