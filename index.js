class Canvas {
  constructor(target, height, width) {
    this.canvas = null;
    this.objects = [];
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
    this.height = height;
    this.width = width;
    this.init(target);
    this.bindEvent();
  }
  init(target) {
    const canvasWrap = document.querySelector(target);
    const canvas = document.createElement("canvas");
    canvasWrap.appendChild(canvas);
    canvas.height = this.height;
    canvas.width = this.width;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }
  bindEvent() {
    const { canvas } = this;
    canvas.addEventListener("mousedown", (e) => {
      const { offsetX, offsetY } = e;
      const filterObjects = this.objects.filter((object) =>
        this.isIncludesTheRange(offsetX, offsetY, object)
      );
      if (!filterObjects.length) return;
      this.activeObject =
        filterObjects.length === 1
          ? filterObjects[0]
          : filterObjects[filterObjects.length - 1];

      this.drawControl(this.activeObject);
      this.paddingX = offsetX - this.activeObject.x;
      this.paddingY = offsetY - this.activeObject.y;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (!this.activeObject) return;
      const { offsetX, offsetY } = e;
      this.activeObject.x = offsetX - this.paddingX;
      this.activeObject.y = offsetY - this.paddingY;
      this.render();
    });
    canvas.addEventListener("mouseup", (e) => {
      this.reset();
    });
  }
  drawControl(target) {
    const { x, y, height, width } = target;
  }
  reset() {
    this.activeObject = null;
    this.paddingX = 0;
    this.paddingY = 0;
  }
  isIncludesTheRange(offsetX, offsetY, { x, y, height, width }) {
    return (
      offsetX > x && offsetX < x + width && offsetY < y + height && offsetY > y
    );
  }

  add(target) {
    this.objects.push(target);
    console.log(this.objects);
  }
  draw({ x, y, height, width, fillStyle }) {
    const { ctx } = this;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, height, width);
  }
  clear() {
    const { height, width } = this.canvas;
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, height, width);
  }
  render() {
    this.clear();

    requestAnimationFrame(() => {
      this.objects.forEach((item) => {
        this.draw(item);
      });
    });
  }
  upper(target) {}
  lower(target) {}
}

class Base {
  constructor(options) {
    this.initOptions(options);
  }
  initOptions(options) {
    Object.keys(options).forEach((item) => {
      this[item] = options[item];
    });
  }
}
class Rect extends Base {
  constructor(options) {
    super(options);
    this.type = "Rect";
  }
}

class Line {
  constructor({ x, y, height, width, fill }) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fill = fill;
    this.type = "Rect";
  }
}
