import { RenderDOM } from "../../utilits/renderToTheDom";
import { IDataArr } from "../slider/slider.interfaces";

export class Results {
  data: IDataArr;
  hostElement: Element;
  template: string;

  constructor(data, hostElement) {
    this.data = [...data];
    this.hostElement = hostElement;
    this.template = `
    <label class="results__box" data-dom="iterator">
    <a class="results__link" href="?name={{name}}#details"
    ><img
     class="results__img "
      src="{{image}}"
     alt="{{name}}"
 /></a>

 <h2 class="results__title">{{name}}</h2>
 <p class="results__text">{{genre}}</p>
    </label>
    `;
  }
  async render() {
    this.data = this.filter(`el`);
    if (!this.data.length) {
      this.template = `<div class="results__none">
        <span class="icon icon_search"><i class="fas fa-search"></i></span>
        <p class="results__title">Not Found</p>
        </div>`;
    }
    await RenderDOM(this.data, this.template, this.hostElement);
  }
  filter(par): IDataArr[] {
    let value = new URLSearchParams(window.location.search).get(par);
    if (value) {
      let item = this.data.filter((el) => {
        return el.name.toUpperCase().trim().indexOf(value.toUpperCase()) === 0;
      });
      return item;
    } else {
      return [];
    }
  }
}
