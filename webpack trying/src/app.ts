import { Slider } from "./components/slider/slider.component";
import { IData } from "./components/slider/slider.interfaces";
import "./style.less";
import "../node_modules/@fortawesome/fontawesome-free/less/fontawesome";
import "../node_modules/@fortawesome/fontawesome-free/less/solid";
import "../node_modules/@fortawesome/fontawesome-free/less/_variables";
import "../node_modules/@fortawesome/fontawesome-free/less/regular";
import "../node_modules/@fortawesome/fontawesome-free/less/brands";

// /@import url("less/fontawesome.less");
// @import url("less/_variables.less");
// @import url("less/_icons.less");
// @import url("less/solid.less");
// @import url("less/brands.less");

const data: IData[] = [
  { name: "Joker", image: "assets/joker.jpeg", value: "1" },
  { name: "vechnye", image: "assets/vechnye.jpeg", value: "2" },
  { name: "encounter", image: "assets/encounter.jpeg", value: "3" },
];

const films = document.querySelector(".slider") as Element;

const filmsSlider = new Slider(data, films);
