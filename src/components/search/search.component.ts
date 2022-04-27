import { RenderDOM } from "../../utilits/renderToTheDom";
import { IData } from "../slider/slider.interfaces";

export class Search {
  data: IData;
  hostElement: Element;
  template: string;

  constructor(data, hostElement) {
    this.data = { ...data };
    this.hostElement = hostElement;
    this.template = `
    <header class="header_details">
    <a class="header_details__link" href="#home">
      <i class="fas fa-arrow-left"></i>
    </a>
    <h1 class="header_details__title">Search</h1>
  </header>
  <div class="results" data-dom="results" his-data="films"></div>`;
  }

  async render() {
    await RenderDOM(this.data, this.template, this.hostElement);
    this.data.loading = false;
  }
}
