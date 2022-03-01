import { IData } from "../slider/slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Details {
  initialeData: IData;
  hostElement: Element;
  template: string;

  constructor(data, hostElement) {
    this.initialeData = data;
    this.hostElement = hostElement;
    this.template = `
    <header class="header_details">
    <a class="header_details__link" href="./index.html">
      <i class="fas fa-arrow-left"></i>
    </a>
    <h1 class="header_details__title">Movie Detail</h1>
  </header>
  <div class="info" data-dom="blocks" his-data="films"></div>
 
  <div class="controll">
    <button class="controll__button" type="button">Watch Trailer</button>
    <a href="/byticket" class="controll__link">Get Ticket</a>
  </div>
      `;

    setTimeout(() => {
      this.initialeData.loading = false;
      this.render();
    }, 2000);
  }

  async render() {
    this.hostElement.innerHTML = await RenderDOM(
      this.initialeData,
      this.template
    );
  }
}
