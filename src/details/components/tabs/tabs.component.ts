import { IData } from "../../../../../src/components/slider/slider.interfaces";
import { renderToDom } from "../../../utilits/renderToTheDom";

export class Tabs {
  data: IData[];
  hostElement: Element;
  synopsisTemplate: string;
  timeTemplate: string;
  content: string;
  value: string;
  constructor(data: IData[], hostElement: Element) {
    this.data = data;
    this.hostElement = hostElement;
    this.synopsisTemplate = `
    <p class="synopsis__paragraph">{{synopsis}}</p>`;
    this.timeTemplate = `<p class="synopsis__box">{{name}}</p>`;
    this.content = `
    <p class="synopsis__paragraph">{{synopsis}}</p>`;
    this.value;
    this.render();
    this.applyHandler();
  }
  render(): void {
    if (this.value === undefined) {
      const inputCheck = this.hostElement.querySelector(
        "[checked]"
      ) as HTMLInputElement;
      this.value = inputCheck.value;
    }
    const contentBox = this.hostElement.querySelector(".tabs__content");
    if (contentBox) {
      contentBox.innerHTML = "";
      if (this.value === "synopsis") {
        contentBox.innerHTML = this.renderContent(this.synopsisTemplate);
      } else if (this.value === "time") {
        contentBox.innerHTML = this.renderContent(this.timeTemplate);
      }
    }
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
    let key = current.value;
    this.value = key;
    this.render();
  }

  renderContent(content: string): string {
    let template = this.data.map((el) => {
      return renderToDom(el, content);
    });
    return template.join("");
  }
}
