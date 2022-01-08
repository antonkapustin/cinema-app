import { isConstructorDeclaration, isThisTypeNode } from "typescript";
import { renderToDom } from "../../utilits/renderToTheDom";
import { IData } from "../slider/slider.interfaces";

export class Tabs {
  data: IData[];
  hostElement: Element;
  timeTemplate: string;
  value: string;
  params: string[];
  flag: boolean;
  constructor(data: IData[], hostElement: Element, param: string[]) {
    this.data = data;
    this.hostElement = hostElement;
    this.value;
    this.params = param;
    this.flag = false;
    this.render(0);
    this.applyHandler();
  }
  render(value: number): void {
    this.showDate();
    if (this.flag === false) {
      const tabsSelect = this.hostElement.querySelector(".tabs__select");
      tabsSelect.innerHTML = this.renderHeader();
    }

    const content = this.hostElement.querySelector(".tabs__content");
    content.innerHTML = this.renderContent(value);
  }
  applyHandler(): void {
    this.hostElement.addEventListener("click", this.onClick.bind(this));
  }
  onClick(event: Event): void {
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
    let key = +current.value;
    this.render(key);
  }
  renderHeader(): string {
    let template = "";
    for (let i = 0; i < this.params.length; i++) {
      if (i === 0) {
        template += `<label class="tabs__item"><input type="radio" class="tabs__input" name="tabs__input" value="${i}" checked/>
        <span class="tabs__title">${this.params[i]}</span></label>`;
      } else {
        template += `<label class="tabs__item"><input type="radio" class="tabs__input" name="tabs__input" value="${i}"/>
      <span class="tabs__title">${this.params[i]}</span></label>`;
      }
    }
    this.flag = true;
    return template;
  }

  renderContent(value: number): string {
    let template = `
      <p class="synopsis__paragraph">{{${this.params[value]}}}</p>`;

    [template] = this.data.map((el) => {
      return renderToDom(el, template);
    });
    return template;
  }
}
