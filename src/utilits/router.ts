export class Router {
  routes: Map<string, Function>;

  constructor(routes) {
    this.routes = new Map();
    if (routes || []) {
      routes.forEach((element) => {
        this.routes.set(element.path, element.cb);
      });
    }

    this.listener();
  }
  public add(path: string, cb: Function): Map<string, Function> {
    this.routes = this.routes.set(path, cb);
    return this.routes;
  }

  private listener(): void {
    window.addEventListener("hashchange", this.onHashChange);
  }

  private onHashChange = (): void => {
    const current = location.hash.slice(1);
    let newCurrent = current.charAt(0).toUpperCase() + current.slice(1);

    if (this.routes.get(newCurrent) === undefined) {
      let n = newCurrent.match(/\w*?(?=\?)/gi);
      newCurrent = n.join("");
    }

    this.routes.get(newCurrent).call(null);
  };
}
