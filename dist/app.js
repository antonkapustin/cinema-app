import { Slider } from "./components/slider/slider.component.js";
const data = [
  { name: "Joker", image: "assets/joker.jpeg" },
  { name: "vechnye", image: "assets/vechnye.jpeg" },
  { name: "encounter", image: "assets/encounter.jpeg" },
  { name: "Joker", image: "assets/joker.jpeg" },
  { name: "vechnye", image: "assets/vechnye.jpeg" },
  { name: "encounter", image: "assets/encounter.jpeg" },
];
const films = document.querySelector(".slider");
const filmsSlider = new Slider(data, films);
