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
  <div class="filter">
    <button class="filter__button">
      <span class="icon icon_search"><i class="fas fa-search"></i></span>
    </button>
    <input class="filter__input" type="text" placeholder="Search Movie" />
  </div>
  <div class="films">
    <h2 class="films__title">Playing Now</h2>
    <div class="slider slider_films" data-dom="slider"></div>
  </div>
  <div class="promo">
    <h2 class="promo__title">Promo</h2>
    <div class="slider slider_promo">
      <ul class="slider__list">
        <li class="slider__item">
          <img
            class="slider__img slider__img_small"
            src="assets/promo2.png"
            alt="promo"
          />
        </li>
        <li class="slider__item">
          <img
            class="slider__img slider__img_small"
            src="assets/promo1.jpeg"
            alt="promo"
          />
        </li>
      </ul>
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

    // setTimeout(() => {
    //   this.initialeData.loading = false;
    //   this.render();
    // }, 2000);
  }

  async render() {
    // this.hostElement.innerHTML = await RenderDOM(
    //   this.initialeData,
    //   this.template
    // );
    await RenderDOM(this.initialeData, this.template, this.hostElement);
  }
}
