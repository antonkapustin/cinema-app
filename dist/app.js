import { Slider } from "./components/slider/slider.component.js";
const data = [
  { name: "Joker", image: "assets/joker.jpeg", value: "1" },
  { name: "vechnye", image: "assets/vechnye.jpeg", value: "2" },
  { name: "encounter", image: "assets/encounter.jpeg", value: "3" },
  { name: "Joker", image: "assets/joker.jpeg", value: "4" },
  { name: "vechnye", image: "assets/vechnye.jpeg", value: "5" },
  { name: "encounter", image: "assets/encounter.jpeg", value: "6" },
];
const films = document.querySelector(".slider");
const filmsSlider = new Slider(data, films);
