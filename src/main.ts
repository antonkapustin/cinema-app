import { App } from "./components/app/app.component";
import { data } from "./data";
import "./style.less";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

const Application = new App(data, document.querySelector("#app"));
Application.render();
