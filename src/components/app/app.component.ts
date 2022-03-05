import { IData } from "../slider/slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";
import { Router } from "../../utilits/router";

export class App {
  data: IData[];
  hostElement: HTMLElement;
  template: string;
  router = new Router([]);

  constructor(data, hostElement) {
    this.data = data;
    this.hostElement = hostElement;
    this.template = hostElement.innerHTML;
  }
  public async render() {
    // this.hostElement.innerHTML = await RenderDOM(this.data, this.template);

    this.router.add("Home", () => {
      this.hostElement.innerHTML = "";
      import("../home/home.component").then(({ Home }) => {
        new Home(this.data, this.hostElement).render();
      });
    });
    this.router.add("Details", () => {
      this.hostElement.innerHTML = "";
      import("../details/details.component").then(({ Details }) => {
        new Details(this.data, this.hostElement).render();
      });
    });

    this.router.onHashChange();
  }
}
