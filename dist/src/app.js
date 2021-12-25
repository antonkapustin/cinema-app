import { Slider } from "./components/slider/slider.component";
const data = [
    { name: "Joker", image: "assets/joker.jpeg", value: "1" },
    { name: "vechnye", image: "assets/vechnye.jpeg", value: "2" },
    { name: "encounter", image: "assets/encounter.jpeg", value: "3" },
];
const films = document.querySelector(".slider");
const filmsSlider = new Slider(data, films);
