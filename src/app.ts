import { Slider } from "./components/slider/slider.component";
import { IData } from "./components/slider/slider.interfaces";

const data: IData[] = [
  { name: "Joker", image: "assets/joker.jpeg" },
  { name: "vechnye", image: "assets/vechnye.jpeg" },
  { name: "encounter", image: "assets/encounter.jpeg" },
  { name: "Joker", image: "assets/joker.jpeg" },
  { name: "vechnye", image: "assets/vechnye.jpeg" },
  { name: "encounter", image: "assets/encounter.jpeg" },
];

const films = document.querySelector(".slider") as Element;

const filmsSlider = new Slider(data, films);
