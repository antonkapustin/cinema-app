import { IDataArr } from "./slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Slider {
  hostElement: Element;
  template: string;
  data: IDataArr[];

  constructor(data, hostElement) {
    this.data = [];
    this.hostElement = hostElement;
    this.template = ``;
  }

  public async render(): Promise<void> {
    await RenderDOM(this.data, this.template, this.hostElement);
  }

  public applyHandler(): void {}
  public changeSlides(value): void {
    if (value === "prev") {
      const prev = this.data.splice(this.data.length - 1, 1);
      this.data[1].active = "";
      this.data = [...prev, ...this.data];
    } else if (value === "next") {
      const next = this.data.splice(0, 1);
      this.data[0].active = "";
      this.data = [...this.data, ...next];
    }
  }
}
