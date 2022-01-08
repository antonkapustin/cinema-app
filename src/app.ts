import { Slider } from "./components/slider/slider.component";
import { data } from "./data";
import "./style.less";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

const films = document.querySelector(".slider") as Element;

const filmsSlider = new Slider(data, films);
