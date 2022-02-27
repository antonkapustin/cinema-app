import { RenderDOM } from "../../utilits/renderToTheDom";
import { IData } from "../slider/slider.interfaces";

export class List {
  data: IData[];
  hostElement: Element;
  template: string;
  constructor(data, hostElement) {
    this.data = data;
    this.hostElement = hostElement;
    this.template = this.hostElement.outerHTML;
  }

  async render() {
    for (let index of this.data) {
      const temp = document.createElement("div");
      temp.innerHTML = this.template;
      for (let i = 0; i < temp.children.length; i++) {
        const element = temp.childNodes[i];
        element.innerHTML = await RenderDOM(index, element.innerHTML);
      }
      while (temp.childNodes.length > 0) {
        this.hostElement.parentNode.insertBefore(
          temp.childNodes[0],
          this.hostElement
        );
      }
    }
    this.hostElement.remove();
  }
}
