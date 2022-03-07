import { IData } from "../slider/slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Home {
  initialeData: IData;
  hostElement: Element;
  template: string;

  constructor(data, hostElement) {
    this.initialeData = { ...data };
    this.hostElement = hostElement;
    this.template = `
    <header class="header">
    <div class="header__discription">
      <h1 class="header__title">Hello Ihza</h1>
      <p class="header__city">
        <i class="fas fa-map-marker-alt"></i>
        Molang City
        <i class="fas fa-angle-down"></i>
      </p>
    </div>
    <div class="header__icon">
      <img class="header__img" src="assets/avatarIcon.png" alt="avatar" />
    </div>
  </header>
  <div class="filter" data-dom="filter" his-data="films">
  </div>
  <div class="films">
    <h2 class="films__title">Playing Now</h2>
    <div class="slider slider_films" data-dom="films" his-data="films"></div>
  </div>
  <div class="promo">
    <h2 class="promo__title">Promo</h2>
    <div class="slider slider_promo" data-dom="promo" his-data="promo">
    </div>
  </div>
  <footer class="footer">
    <a href="#home" class="footer__link"><i class="fas fa-home"></i></a>
    <a href="/ticket" class="footer__link"
      ><i class="fas fa-ticket-alt"></i
    ></a>
    <a href="/user" class="footer__link"><i class="fas fa-user"></i></a>
  </footer>
      `;
  }

  async render() {
    await RenderDOM(this.initialeData, this.template, this.hostElement);
  }
}
