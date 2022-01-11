import { IData } from "../slider/slider.interfaces";

export class ShowTime {
  hostElement: Element;
  flag: boolean;
  data: IData[];
  date: Date;
  days: string[];
  constructor(data: IData[], hostElement: Element) {
    this.hostElement = hostElement;
    this.data = data;
    this.flag = false;
    this.date = new Date();
    this.days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    this.render();
    this.applyHandler();
  }
  render(): void {
    let numberOfDay = this.date.getDay();
    let x = [...this.days].splice(numberOfDay, 6);
    let y = [...this.days].splice(0, numberOfDay);

    let week = [...x, ...y];
    if (this.flag === false) {
      const content = document.createElement("div");
      content.classList.add("time");
      content.innerHTML = this.renderDate(week, this.date);
      this.hostElement.append(content);
      this.flag = true;
    }
    this.showSeanses(week[0]);
  }
  applyHandler(): void {
    this.hostElement.addEventListener("click", this.onClick.bind(this));
  }
  onClick(event: Event): void {
    let current = event.target as HTMLInputElement;

    while (current !== this.hostElement) {
      if (current.classList.contains("time__day")) {
        break;
      }
      current = current.parentElement as HTMLInputElement;
    }
    if (current === this.hostElement) {
      return;
    }
    let key = current.id;
    const currentInput = this.hostElement.querySelector(".time__label_checked");
    currentInput.classList.remove("time__label_checked");
    this.showSeanses(key);
  }

  renderDate(array: string[], date: Date): string {
    let template = "";
    for (let i = 0; i < array.length; i++) {
      template += `<label for="${array[i]}" class="time__label">
      <input class="time__day" type="radio" id="${array[i]}" name="day">
        <p class="time__paragraph">${date.getDate() + i}</p>
        <p class="time__paragraph">${array[i]}</p>
        </label>`;
    }
    return template;
  }
  showSeanses(id: string): void {
    let label = this.hostElement.querySelector(`[for="${id}"]`);
    label.classList.add("time__label_checked");

    if (id === "Пятница" || "Суббота") {
      let template = `<div class=""></div>`;
      let content = this.renderSeanses(template);
    }
  }
  renderSeanses(template: string): string {
    return "";
  }
}
