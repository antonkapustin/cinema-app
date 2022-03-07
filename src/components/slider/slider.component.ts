import { IDataArr } from "./slider.interfaces";
import { RenderDOM } from "../../utilits/renderToTheDom";

export class Slider {
  hostElement: Element;
  template: string;
  data: IDataArr[];
  initialeData: IDataArr[];

  constructor(data, hostElement) {
    this.data = data;
    this.initialeData = [...data];
    this.hostElement = hostElement;
    this.template = ``;
  }

  public async render(): Promise<void> {
    await RenderDOM(this.data, this.template, this.hostElement);
  }

  public applyHandler(): void {}
  public changeSlides(value): void {
    if (value === "prev") {
      const prev = this.initialeData.splice(this.initialeData.length - 1, 1);
      this.initialeData[1].active = "";
      this.initialeData = [...prev, ...this.initialeData];
    } else if (value === "next") {
      const next = this.initialeData.splice(0, 1);
      this.initialeData[0].active = "";
      this.initialeData = [...this.initialeData, ...next];
    }
    this.data = this.initialeData;
  }
}
