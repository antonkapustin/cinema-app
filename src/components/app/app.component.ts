import { IData } from "../slider/slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class App {
  data: IData[];
  hostElement: HTMLElement;
  template: string;

  constructor(data, hostElement) {
    this.data = data;
    this.hostElement = hostElement;
    this.template = hostElement.innerHTML;
  }
  async render() {
    this.hostElement.innerHTML = await RenderDOM(this.data, this.template);
  }
}
